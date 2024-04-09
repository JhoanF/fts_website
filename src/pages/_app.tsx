import "@/css/tailwind.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {

  const navigation = [
    { link: "/services", text: "Services" },
    { link: "/about", text: "About" },
    { link: "/portfolio", text: "Portfolio" },
    { link: "/contact", text: "Contact" },
  ];

  const router = useRouter();
  const isSouthwestGames = router.pathname.includes("southwestgames");


  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      {!isSouthwestGames &&
        <Navbar navigation={navigation} />
      }
      <Component {...pageProps} />
      {!isSouthwestGames &&
        <Footer navigation={navigation} />
      }
    </ThemeProvider>
  )
}
