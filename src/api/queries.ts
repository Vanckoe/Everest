/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from 'axios';

/** Поля, которые реально приходят из формы */
type Lead = Record<string, string>;

export const sendToTelegram = async (data: Lead) => {
  const botToken = process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN;
  const chatId = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    console.error('Telegram env vars are missing');
    return;
  }

  const text = `
🛠️ <b>Новая заявка Everest Appliance Repair</b>

👤 <b>Имя:</b> ${data.firstName ?? ''} 
📞 <b>Телефон:</b> ${data.phone ?? ''}
📧 <b>Email:</b> ${data.email ?? ''}

📅 <b>:</b> ${data.date ?? ''}   ⏰ <b>:</b> ${data.time ?? ''}
🔧 <b>:</b> ${data.service ?? ''} ${data.versServices ?? ''}
🏠 <b>Адрес:</b> ${data.street ?? ''}

💬 <b>Комментарий:</b> ${data.comments ?? ''}
`;

  await axios.post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
    chat_id: chatId,
    text,
    parse_mode: 'HTML',
  });
};
