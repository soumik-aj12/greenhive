import { AboutCardsProps, ReviewProps } from "@/Props/Props";
import { Box, Flower2, PhoneOutgoing } from "lucide-react";

const style = "h-14 w-14";

export const AboutStuff: AboutCardsProps[] = [
  {
    title: "Large Assortment",
    description:
      "we offer many different types of products with fewer variations in each category.",
    icon: <Flower2 className={`${style}`} />,
  },
  {
    title: "Fast & Free Shipping",
    description:
      "4-day or less delivery time, free shipping and an expedited delivery option.",
    icon: <Box className={`${style}`} />,
  },
  {
    title: "24/7 Support",
    description:
      "answers to any business related inquiry 24/7 and in real-time.",
    icon: <PhoneOutgoing className={`${style}`} />,
  },
];

export const CustomerReviews:ReviewProps[] = [
  {
    name: "John Doe",
    rating: 5,
    work: "Youtuber",
    review:
      "Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    
  },
  {
    name: "John Doe",
    rating: 5,
    work: "Youtuber",
    review:
      "Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    
  },
  {
    name: "John Doe",
    rating: 5,
    work: "Youtuber",
    review:
      "Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    
  },
  {
    name: "John Doe",
    rating: 5,
    work: "Youtuber",
    review:
      "Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    
  },
  {
    name: "Candice Lerae",
    rating: 4.8,
    work: "Youtuber",
    review: "Very nice!"   
  },
  {
    name: "Who is she!",
    rating: 4.9,
    work: "Youtuber",
    review:
      "Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    
  },
];
