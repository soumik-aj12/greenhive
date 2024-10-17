import React from "react";
import ProductCard from "./ProductCard";
import Test_Orchid from "@/public/assets/images/test_orchid.jpg";

const BestSellingPlants = [
  {
    plantTitle: "Best Plant 1",
    price: "1235",
    image: Test_Orchid,
  },
  {
    plantTitle: "Best Plant 2",
    price: "5000",
    image: Test_Orchid,
  },
  {
    plantTitle: "Best Plant 3",
    price: "2023",
    image: Test_Orchid,
  },
];
const BestSelling = () => {
  return (
    <ProductCard
      title="Best Selling Plants"
      description="Easiest way to healthy life by buying your favorite plants"
      plants={BestSellingPlants}
    />
  );
};

export default BestSelling;
