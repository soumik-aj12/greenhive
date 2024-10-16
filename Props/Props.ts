import { StaticImageData } from "next/image"

export type BestSellingPlantProps = {
    ImageSrc: string | StaticImageData
    Title: string
    Price: string

}
export type AboutCardsProps = {
    title: string;
    description: string;
    icon: React.ReactNode
}
