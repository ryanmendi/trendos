import { collectAmazonProducts } from "./collectors/amazon/amazon.collector";
import { saveProducts } from "./services/product.service";
import { collectGoogleTrends } from "./collectors/trends/google-trends.collector";
import { analyzeTrendKeyword } from "./engines/trend-intelligence.engine";
import { matchProductWithTrends } from "./engines/product-trend-match.engine";
import { calculatePostingPriority } from "./engines/smart-posting.engine";
import { calculateViralScore } from "./engines/viral-score.engine";
import { analyzeTrend } from "./engines/trend-hunter.engine";
import { sendTelegramMessage } from "./services/telegram.service";
import { generateProductContent } from "./engines/hook-generator.engine";
import { generateContentVariants } from "./engines/content-optimizer.engine";
import { saveContentPerformance } from "./services/learning.service";
import { simulatePerformance } from "./utils/performance-simulator";
import { findBestHooks } from "./engines/self-optimization.engine";


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

console.log("\n=== CONTENT OPTIMIZATION ===");

const bestProduct = products[0];

const variants =
  generateContentVariants(bestProduct);

console.log(
  "\n=== TOP 5 VARIANTES ==="
);

console.table(
  variants.slice(0, 5).map((v) => ({
    hook: v.hook,
    cta: v.cta,
    score: v.predictedScore,
  }))
);

console.log("\n=== LEARNING SYSTEM ===");

for (const variant of variants.slice(0, 5)) {
  const metrics = simulatePerformance(
    variant.predictedScore
  );

  await saveContentPerformance({
    productTitle: bestProduct.title,

    hook: variant.hook,
    cta: variant.cta,

    predictedScore: variant.predictedScore,

    views: metrics.views,
    clicks: metrics.clicks,
    sales: metrics.sales,

    engagementRate:
      metrics.engagementRate,
  });

  console.log({
    hook: variant.hook,
    views: metrics.views,
    clicks: metrics.clicks,
    sales: metrics.sales,
    engagement: metrics.engagementRate,
  });
}

console.log("\n=== ENVIANDO PARA TELEGRAM ===");

for (const item of ranking) {
  if (
    item.priority === "CRÍTICA" ||
    item.priority === "Alta"
  ) {
const content  = await generateProductContent({
  title: item.title,
  price: 99,
  discount: 40,
  rating: 4.8,
  url: "",
  store: "Amazon",
});

await sendTelegramMessage(content.caption);

    console.log("Enviado:", item.title);
  }
}

  console.log("Finalizado.");

  console.log("\n=== SELF OPTIMIZATION ===");

const bestHooks = await findBestHooks();

console.table(
  bestHooks.slice(0, 5)
);
}



main();
