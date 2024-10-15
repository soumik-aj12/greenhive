import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import OrchidHero from "@/public/assets/images/orchid_hero.jpg";
import { Search } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="bg-[#C1DCDC] mx-16 flex rounded-2xl justify-between p-9">
      <div className="flex flex-col gap-10">
        <div className="text-7xl font-extrabold">Buy your dream plants</div>
        <div className="text-4xl flex">
          <div>
            50+ <div>Plant Species</div>
          </div>
          <Separator orientation="vertical" className="mx-4 bg-black" />
          <div>
            1000+ <div>customers</div>
          </div>
        </div>
        <div className="flex w-[50%] max-w-sm items-center space-x-2 relative">
          <Input type="text" placeholder="Search for a plant" className="bg-white h-12" />
          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4 cursor-pointer" />

        </div>
      </div>
      <div>
        <Image
          src={OrchidHero}
          alt="Orchid Intro"
          className="rounded-s-full h-[350px] w-[250px]"
        />
      </div>
    </div>
  );
};

export default Hero;