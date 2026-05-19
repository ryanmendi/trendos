import { collectAmazonProducts } from "./collectors/amazon/amazon.collector";
import { saveProducts } from "./services/product.service";

async function main() {
  console.log("TrendOS iniciado");

  const products = await collectAmazonProducts();

  console.log("Produtos coletados:", products.length);

  await saveProducts(products);

  console.log("Finalizado.");

  
}

main();