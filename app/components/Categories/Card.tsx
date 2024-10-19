import { cn } from "@/lib/utils";
import { CategoryCardProps } from "@/Props/Props";
import Image from "next/image";
import React from "react";

const Card = ({ title, image, offset }: CategoryCardProps) => {
  return (
    <div
      className={cn(
        "flex flex-col items-center gap-2 cursor-pointer transition-all hover:translate-x-1",
        offset ? "-translate-y-20" : "translate-y-6"
      )}
    >
      <div className="relative">
        <Image
          src={image}
          alt={`${title}'s Image`}
          className="h-44 w-36 md:h-fit md:w-60 rounded-lg shadow-lg"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-transparent opacity-0 hover:opacity-50 transition-opacity duration-300 rounded-lg"></div>
      </div>
      <p className="font-medium">{title}</p>
    </div>
  );
};

export default Card;
