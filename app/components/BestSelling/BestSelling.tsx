import React from "react";
import { Button } from "@/components/ui/button";
import Test_Orchid from "@/public/assets/images/test_orchid.jpg";
import { ArrowRight } from "lucide-react";
import BestPlants from "./BestPlants";
const BestSelling = () => {
  return (
    <div className="my-10 mx-3 flex flex-col md:flex-row gap-6">
      <div className="w-full md:w-[30%]">
        <h2 className="mt-5 font-bold text-2xl">Best Selling</h2>
        <p className="text-sm my-2">Easiest way to healthy life by buying your favorite plants </p>
        <Button variant="outline" className="bg-[#C1DCDC] flex gap-1">
          <p>See more</p>
          <ArrowRight className="w-5" />
        </Button>
      </div>
    <BestPlants ImageSrc={Test_Orchid} Title="Test Plant 1" Price="1000"/>
    <BestPlants ImageSrc={Test_Orchid} Title="Test Plant 2" Price="2000"/>
    <BestPlants ImageSrc={Test_Orchid} Title="Test Plant 3" Price="5000"/>
    </div>
  );
};

export default BestSelling;
