import { collectAmazonProducts } from "./collectors/amazon/amazon.collector";
import { saveProducts } from "./services/product.service";
import { collectGoogleTrends } from "./collectors/trends/google-trends.collector";
import { analyzeTrendKeyword } from "./engines/trend-intelligence.engine";
import { matchProductWithTrends } from "./engines/product-trend-match.engine";


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

  console.log("Finalizado.");
}

main();
