import { ProductData } from "../types/product";
import { getBestPerformingHooks } from "./adaptive-hook.engine";

const hooks = [
  "TikTok está enlouquecendo com isso 🔥",
  "Esse produto está viralizando AGORA 🚀",
  "Você vai querer isso depois de ver...",
  "O produto mais absurdo que achei hoje 😳",
  "Isso aqui parece MUITO mais caro do que custa 🤯",
];

const ctas = [
  "Corre antes que acabe.",
  "Isso aqui vai explodir nas próximas semanas.",
  "Esse produto está sumindo rápido.",
  "Vale cada centavo.",
  "TikTok made me buy it.",
];

export interface GeneratedContent {
  hook: string;
  cta: string;
  caption: string;
}

export async function generateProductContent(
  product: ProductData
): GeneratedContent {
const adaptiveHooks =
  await getBestPerformingHooks();

const prioritizedHooks = [
  ...adaptiveHooks.map((h) => h.hook),
  ...hooks,
];

const randomHook =
  prioritizedHooks[
    Math.floor(
      Math.random() *
        prioritizedHooks.length
    )
  ];

  const randomCTA =
    ctas[Math.floor(Math.random() * ctas.length)];

  const caption = `
${randomHook}

🎯 ${product.title}

💰 R$ ${product.price}

🔥 Desconto: ${product.discount}%

⭐ ${product.rating} estrelas

${randomCTA}
  `;

  return {
    hook: randomHook,
    cta: randomCTA,
    caption,
  };
}