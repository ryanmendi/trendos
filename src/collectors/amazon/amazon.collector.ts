import { ProductData } from "../../types/product";

export async function collectAmazonProducts(): Promise<ProductData[]> {
  return [
    {
      title: "Mouse Gamer RGB",
      price: 89.9,
      oldPrice: 149.9,
      discount: 40,

      rating: 4.7,
      reviews: 5300,

      image: "https://image.com/mouse.jpg",

      url: "https://amazon.com/mouse",
      store: "Amazon",
    },

    {
      title: "Teclado Mecânico Gamer",
      price: 199.9,
      oldPrice: 399.9,
      discount: 50,

      rating: 4.9,
      reviews: 12000,

      image: "https://image.com/keyboard.jpg",

      url: "https://amazon.com/keyboard",
      store: "Amazon",
    },

    {
      title: "Fone de Ouvido Bluetooth",
      price: 129.9,
      oldPrice: 259.9,
      discount: 50,
      rating: 4.8,
      reviews: 8000,
      image: "https://image.com/earbuds.jpg",
      url: "https://amazon.com/earbuds",
      store: "Amazon",
    },

    {
      title: "Webcam Full HD",
      price: 149.9,
      oldPrice: 299.9,
      discount: 50,
      rating: 4.6,
      reviews: 6000,
      image: "https://image.com/webcam.jpg",
      url: "https://amazon.com/webcam",
      store: "Amazon",
    },

    {
      title: "Mouse wireless para jogos",
      price: 899.9,
      oldPrice: 1799.9,
      discount: 50,
      rating: 4.8,
      reviews: 4000,
      image: "https://image.com/rato.jpg",
      url: "https://amazon.com/rato",
      store: "Amazon",
    },

    {
      title: "Teclado RGB",
      price: 499.9,
      oldPrice: 999.9,
      discount: 50,
      rating: 4.9,
      reviews: 12000,
      image: "https://image.com/teclado.jpg",
      url: "https://amazon.com/teclado",
      store: "Amazon",
    },

  ];
}