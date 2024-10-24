import Image from "next/image";
import Hero from "./components/Hero/Hero";
import BestSelling from "./components/HeroProducts/BestSelling";
import About from "./components/About/About";
import Products from "./components/HeroProducts/Products";
import Categories from "./components/Categories/Categories";
import Customers from "./components/CustomerReviews/Customers";

export default function Home() {
  return (
    <div>
      <Hero/>
      <Products/>
      <Categories/>
      <About/>
      <Customers/>
    </div>
  );
}
