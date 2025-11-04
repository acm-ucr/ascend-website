import "./globals.css";
import { Nunito_Sans, Playfair_Display } from "next/font/google";
import { ReactQueryClientProvider } from "@/utils/react-query";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";

const nunito = Nunito_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-nunito",
  preload: true,
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["italic", "normal"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
  preload: true,
});

export const metadata = {
  title: "Ascend @ UCR",
  description: "Ascend Student Chapter | UCR",
};

type LayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className={`font-nunito ${playfair.variable} ${nunito.variable}`}>
        <NavBar />
        <ReactQueryClientProvider>{children}</ReactQueryClientProvider>
        <Footer />
      </body>
    </html>
  );
}
