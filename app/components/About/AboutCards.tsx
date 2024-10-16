import { AboutCardsProps } from "@/Props/Props";
import React from "react";

const AboutCards = ({title, description, icon}:AboutCardsProps) => {
  return (
    <div className="md:w-[80%] flex flex-col items-center gap-3">
      <div className="h-16 w-16 bg-[#C1DCDC] rounded-full flex justify-center items-center">{icon}</div>
      <div className="font-bold">{title}</div>
      <div className="text-center text-gray-600">{description}</div>
    </div>
  );
};

export default AboutCards;
