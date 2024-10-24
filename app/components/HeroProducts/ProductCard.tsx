import React from "react";
import { ArrowLeft, ArrowRight, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductCardProps } from "@/Props/Props";
import Image from "next/image";
import { cn } from "@/lib/utils";

const ProductCard = ({
  orientation,
  title,
  description,
  plants,
}: ProductCardProps) => {
  return (
    <div
      className={cn(
        "my-10 mx-3 flex flex-col gap-6",
        orientation === "reverse" ? "md:flex-row-reverse" : "md:flex-row"
      )}
    >
      <div
        className={cn(
          "w-full md:w-[30%] flex flex-col items-center",
          orientation === "reverse" ? "md:items-end" : "md:items-start"
        )}
      >
        <h2 className="mt-5 font-bold text-2xl">{title}</h2>
        <p className="text-sm my-2 text-center md:text-start">{description}</p>
        <Button variant="outline" className="w-[35%] bg-[#C1DCDC] flex gap-1">
          {orientation === "reverse" && <ArrowLeft className="w-5" />}
          <p>See more</p>
          {orientation !== "reverse" && <ArrowRight className="w-5" />}
        </Button>
      </div>
      {plants.map((plant, index) => {
        return (
          <div
            key={index}
            className="flex flex-col items-center gap-1 cursor-pointer"
          >
            <Image
              src={plant.image}
              alt="Test"
              className="h-44 w-36 md:h-fit md:w-60 rounded-lg shadow-lg transition-all hover:translate-x-1 hover:-translate-y-1"
            />
            <div className="font-bold mt-3">{plant.plantTitle}</div>
            <div className="text-gray-600">₹ {plant.price}</div>
            <Button className="mb-2 flex gap-1">
              Add to cart
              <ShoppingCart />
            </Button>
          </div>
        );
      })}
    </div>
  );
};

export default ProductCard;
