import "@/css/tailwind.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function App({ Component, pageProps }: AppProps) {

  const navigation = [
    { link: "/services", text: "Services" },
    { link: "/about", text: "About" },
    { link: "/portfolio", text: "Portfolio" },
    { link: "/contact", text: "Contact" },
  ];



  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <Navbar navigation={navigation} />
      <Component {...pageProps} />
      <Footer navigation={navigation} />
    </ThemeProvider>
  )
}
