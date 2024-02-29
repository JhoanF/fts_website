import Image from "next/image";
import { Inter } from "next/font/google";
import config from "@/config";
import Hero from "@/components/hero";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Hero />
    </>
  );
}
