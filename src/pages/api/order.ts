import type { APIRoute } from 'astro';

export const prerender = false;

interface OrderPayload {
  name: string;
  phone: string;
  email?: string;
  material?: string;
  quantity?: string;
  message?: string;
  source_url?: string;
  locale?: string;
}

function escapeMd(s: string): string {
  return String(s).replace(/[_*[\]()~`>#+=|{}.!\\-]/g, (c) => '\\' + c);
}

function validatePhone(phone: string): boolean {
  const cleaned = phone.replace(/[\s\-()]/g, '');
  return /^(\+?380|0)\d{9}$/.test(cleaned);
}

export const POST: APIRoute = async ({ request }) => {
  let payload: OrderPayload;
  try {
    payload = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid JSON' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  if (!payload.name || payload.name.trim().length < 2) {
    return new Response(JSON.stringify({ error: 'Name required' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }
  if (!payload.phone || !validatePhone(payload.phone)) {
    return new Response(JSON.stringify({ error: 'Invalid phone' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const token = import.meta.env.TELEGRAM_BOT_TOKEN;
  const chatId = import.meta.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) {
    console.error('Telegram credentials missing');
    return new Response(
      JSON.stringify({ error: 'Service temporarily unavailable. Call: +38 050 420 42 29' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }

  const lines = [
    '🆕 *НОВЕ ЗАМОВЛЕННЯ*',
    '',
    `👤 *Name:* ${escapeMd(payload.name)}`,
    `📞 *Phone:* ${escapeMd(payload.phone)}`,
  ];
  if (payload.email) lines.push(`✉️ *Email:* ${escapeMd(payload.email)}`);
  if (payload.material) lines.push(`📦 *Material:* ${escapeMd(payload.material)}`);
  if (payload.quantity) lines.push(`⚖️ *Qty:* ${escapeMd(payload.quantity)} t`);
  if (payload.message) lines.push('', `💬 ${escapeMd(payload.message)}`);
  if (payload.source_url) lines.push('', `🔗 ${payload.source_url}`);

  try {
    const resp = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: lines.join('\n'),
        parse_mode: 'MarkdownV2',
        disable_web_page_preview: true,
      }),
    });
    if (!resp.ok) {
      const err = await resp.text();
      console.error(`Telegram API ${resp.status}: ${err}`);
      return new Response(
        JSON.stringify({ error: 'Failed to send. Call: +38 050 420 42 29' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }
  } catch (e) {
    console.error('Telegram error:', e);
    return new Response(
      JSON.stringify({ error: 'Connection error. Call: +38 050 420 42 29' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }

  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};
