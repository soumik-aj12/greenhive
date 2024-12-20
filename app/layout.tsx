import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Provider from "./provider";
import Header from "./components/Header/Header";
import { cn } from "@/lib/utils";

const pixel = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: [],
});
export const metadata: Metadata = {
  title: "GREENHIVE",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("mx-1 md:mx-24",`${pixel.className} antialiased`)}>
        <Provider>
          <Header/>
          {children}
          </Provider>
      </body>
    </html>
  );
}
