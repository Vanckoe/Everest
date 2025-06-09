/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from 'axios';

/** Поля, которые реально приходят из формы */
type Lead = Record<string, string>;

export const sendToTelegram = async (data: Lead) => {
  const botToken = process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN;
  const chatId   = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    console.error('Telegram env vars are missing');
    return;
  }

  const text = `
🛠️ <b>Новая заявка Everest Appliance Repair</b>

👤 ${data.firstName ?? ''} ${data.lastName ?? ''}
📞 ${data.phone ?? ''}
📧 ${data.email ?? ''}

📅 ${data.date ?? ''}   ⏰ ${data.time ?? ''}
🔧 ${data.service ?? ''}

🏠 ${data.street ?? ''}${data.apt ? `, Apt: ${data.apt}` : ''}
🌆 ${data.city ?? ''}, ${data.state ?? ''}${data.zip ? `, ${data.zip}` : ''}
  `;

  await axios.post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
    chat_id: chatId,
    text,
    parse_mode: 'HTML',
  });
};
