import { AboutCardsProps } from "@/Props/Props";
import { Box, Flower2, PhoneOutgoing } from "lucide-react";

const style = "h-14 w-14"

export const AboutStuff: AboutCardsProps[] = [
    {
        "title": "Large Assortment",
        "description": "we offer many different types of products with fewer variations in each category.",
        "icon": <Flower2 className={`${style}`}/>
    },
    {
        "title": "Fast & Free Shipping",
        "description": "4-day or less delivery time, free shipping and an expedited delivery option.",
        "icon": <Box className={`${style}`}/>
    },
    {
        "title": "24/7 Support",
        "description": "answers to any business related inquiry 24/7 and in real-time.",
        "icon": <PhoneOutgoing className={`${style}`}/>
    }
]