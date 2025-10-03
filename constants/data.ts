import { Product } from "../types";

export const products: Product[] = [
  {
    id: "1",
    name: "PEUGEOT - LR01",
    price: 1999.99,
    category: "Road Bike",
    imageUrl: require("../assets/product_images/PEUGEOT_LR01.png"),
  },
  {
    id: "2",
    name: "SMITH - Trade",
    price: 120.0,
    category: "Road Helmet",
    imageUrl: require("../assets/product_images/SMITH_Trade.png"),
  },
  {
    id: "3",
    name: "Smith Trade",
    price: 3999.99,
    category: "Road Helmet",
    imageUrl: require("../assets/product_images/SMITH_Trade.png"),
  },
  {
    id: "4",
    name: "KASK - Protone",
    price: 250.0,
    category: "Aero Helmet",
    imageUrl: require("../assets/product_images/Mountain_Bike.png"),
  },
  {
    id: "5",
    name: "CERVELO - R5",
    price: 5999.99,
    category: "Road Bike",
    imageUrl: require("../assets/product_images/PEUGEOT_LR01.png"),
  },
  {
    id: "6",
    name: "GIRO - Aether",
    price: 300.0,
    category: "Mountain Helmet",
    imageUrl: require("../assets/product_images/SMITH_Trade.png"),
  },
];
