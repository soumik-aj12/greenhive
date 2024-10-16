import { Button } from "@/components/ui/button";
import { BestSellingPlantProps } from "@/Props/Props";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import React from "react";



const BestPlants = ({ImageSrc,  Title, Price}:BestSellingPlantProps) => {

  return (
    <div className="flex flex-col items-center gap-1 cursor-pointer rounded-md shadow-sm transition-all hover:translate-x-1 hover:-translate-y-1">
        <Image
          src={ImageSrc}
          alt="Test"
          className="h-44 w-36 md:h-fit md:w-[300px] rounded-lg"
        />
        <div className="font-bold mt-3">{Title}</div>
        <div className="text-gray-600">₹ {Price}</div>
        <Button className="mb-2 flex gap-1">Add to cart<ShoppingCart/></Button>
    </div>
  );
};

export default BestPlants;
