import { CategoryData } from "@/Data/categories";
import React from "react";
import Card from "./Card";
import { Separator } from "@/components/ui/separator";
const Categories = () => {
  return (
    <div className="mt-28 bg-[#C1DCDC] rounded-xl py-11 flex flex-col items-center">
      <div className="flex flex-col items-center">
      <p className="text-3xl font-bold">Categories</p>
      <div>Find out what you're looking for</div>
      <Separator className="my-3 bg-black w-[25%]"/>
      </div>
      <div className="flex w-full justify-evenly">{CategoryData.map((data, index) => {
        return <Card key={index} title={data.title} image={data.image} offset={data.offset}/>;
      })}</div>
    </div>
  );
};

export default Categories;
