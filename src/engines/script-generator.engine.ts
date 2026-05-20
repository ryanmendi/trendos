import { ProductData } from "../types/product";

import { ViralStructure } from "../types/viral-structure";

import { ViralScript } from "../types/script";

export function generateViralScript(
  product: ProductData,

  structure: ViralStructure
): ViralScript {
  const hook =
    `Você não vai acreditar nesse ${product.title} 😳`;

  const scenes = [
    `Mostrando o ${product.title} rapidamente`,

    `Demonstrando principal efeito visual`,

    `Comparação antes/depois`,

    `Close no detalhe mais satisfatório`,

    `Mostrar preço e desconto`,
  ];

  let cta =
    "Corre porque isso aqui vai viralizar MUITO.";

  if (
    structure.ctaStyle ===
    "Urgência forte"
  ) {
    cta =
      "Corre AGORA antes que todo mundo descubra isso.";
  }

  const estimatedRetention =
    structure.estimatedViralScore *
    1.2;

  return {
    title:
      `${product.title} Viral Script`,

    hook,

    scenes,

    cta,

    estimatedRetention:
      Number(
        estimatedRetention.toFixed(2)
      ),
  };
}