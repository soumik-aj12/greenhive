import Image from "next/image";
import Hero from "./components/Hero/Hero";
import BestSelling from "./components/BestSelling/BestSelling";
import About from "./components/About/About";

export default function Home() {
  return (
    <div>
      <Hero/>
      <BestSelling/>
      <About/>
    </div>
  );
}
