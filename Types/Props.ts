import { StaticImageData } from "next/image";

export type ProductCardProps = {
  orientation?: string;
  title: string;
  description: string;
  plants: Array<{
    image: string | StaticImageData;
    price: string;
    plantTitle: string;
  }>;
};
export type AboutCardsProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

export type CategoryCardProps = {
  title: string;
  image: string | StaticImageData;
  offset: boolean
};

export type ReviewProps = {
  name: string;
  rating: boolean | number | string;
  work: string;
  review: string;
}