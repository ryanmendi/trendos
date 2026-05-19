import { ProductData } from "../types/product";

import { ContentVariant } from "../types/content";

const hooks = [
  "TikTok está enlouquecendo com isso 🔥",
  "Isso aqui está viralizando MUITO 🚀",
  "Você não vai acreditar nesse produto 😳",
  "O item mais absurdo que achei hoje 🤯",
  "Esse produto parece caro mas não é 👀",
];

const ctas = [
  "Corre antes que acabe.",
  "Isso vai explodir nas próximas semanas.",
  "Vale cada centavo.",
  "TikTok made me buy it.",
  "Isso aqui está vendendo MUITO.",
];

export function generateContentVariants(
  product: ProductData
): ContentVariant[] {
  const variants: ContentVariant[] = [];

  for (const hook of hooks) {
    for (const cta of ctas) {
      let score = 0;

      // WOW FACTOR
      if (
        hook.includes("viralizando") ||
        hook.includes("enlouquecendo")
      ) {
        score += 30;
      }

      // IMPULSIVIDADE
      if (
        cta.includes("Corre") ||
        cta.includes("vendendo")
      ) {
        score += 25;
      }

      // PREÇO BAIXO
      if (product.price < 150) {
        score += 20;
      }

      // DESCONTO
      if (product.discount) {
        score += product.discount * 0.4;
      }

      const caption = `
${hook}

🎯 ${product.title}

💰 R$ ${product.price}

🔥 ${product.discount}% OFF

⭐ ${product.rating} estrelas

${cta}
      `;

      variants.push({
        hook,
        cta,
        caption,
        predictedScore: Number(score.toFixed(2)),
      });
    }
  }

  return variants.sort(
    (a, b) => b.predictedScore - a.predictedScore
  );
}