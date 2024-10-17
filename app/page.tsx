import Image from "next/image";
import Hero from "./components/Hero/Hero";
import BestSelling from "./components/HeroProducts/BestSelling";
import About from "./components/About/About";
import Products from "./components/HeroProducts/Products";
import Categories from "./components/Categories/Categories";

export default function Home() {
  return (
    <div>
      <Hero/>
      <Products/>
      <Categories/>
      <About/>
    </div>
  );
}
