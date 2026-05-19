import { collectAmazonProducts } from "./collectors/amazon/amazon.collector";
import { saveProducts } from "./services/product.service";
import { collectGoogleTrends } from "./collectors/trends/google-trends.collector";
import { analyzeTrendKeyword } from "./engines/trend-intelligence.engine";
import { matchProductWithTrends } from "./engines/product-trend-match.engine";
import { calculatePostingPriority } from "./engines/smart-posting.engine";
import { calculateViralScore } from "./engines/viral-score.engine";
import { analyzeTrend } from "./engines/trend-hunter.engine";
import { sendTelegramMessage } from "./services/telegram.service";


async function main() {
  console.log("TrendOS iniciado");

  const products = await collectAmazonProducts();

  console.log("Produtos coletados:", products.length);

  await saveProducts(products);

  const trends = await collectGoogleTrends();

  console.log("\n=== GOOGLE TRENDS ===");

  for (const trend of trends) {
    const result = analyzeTrendKeyword(trend);

    console.log(result);
  }

  console.log("\n=== PRODUCT TREND MATCH ===");

for (const product of products) {
  const match = matchProductWithTrends(
    product,
    trends
  );

  console.log({
    product: product.title,
    matched: match.matched,
    score: match.matchScore,
    keywords: match.matchedKeywords,
  });
}

console.log("\n=== SMART POSTING ENGINE ===");

const ranking = [];

for (const product of products) {
  const analysis = calculateViralScore(product);

  const trendAnalysis = analyzeTrend(product);

  const match = matchProductWithTrends(
    product,
    trends
  );

  const priority = calculatePostingPriority({
    title: product.title,

    viralScore: analysis.viralScore,
    trendScore: trendAnalysis.trendScore,
    growthScore: trendAnalysis.growthScore,
    saturationLevel: trendAnalysis.saturationLevel,

    matchScore: match.matchScore,
  });

  ranking.push(priority);
}

ranking.sort(
  (a, b) => b.finalScore - a.finalScore
);

console.log("\n=== RANKING FINAL ===");

console.table(ranking);

console.log("\n=== ENVIANDO PARA TELEGRAM ===");

for (const item of ranking) {
  if (
    item.priority === "CRÍTICA" ||
    item.priority === "Alta"
  ) {
    await sendTelegramMessage(
      `
🔥 <b>${item.title}</b>

⭐ Score: ${item.finalScore}

🚀 Prioridade: ${item.priority}
      `
    );

    console.log("Enviado:", item.title);
  }
}

  console.log("Finalizado.");
}

main();
