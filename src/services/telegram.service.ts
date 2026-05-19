import axios from "axios";

const token = process.env.TELEGRAM_BOT_TOKEN;

const chatId = process.env.TELEGRAM_CHAT_ID;

export async function sendTelegramMessage(
  message: string
) {
  const url = `https://api.telegram.org/bot${token}/sendMessage`;

  await axios.post(url, {
    chat_id: chatId,
    text: message,
    parse_mode: "HTML",
  });
}