import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from './components/navbar'
import Footer from "./components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

interface iProps {
  children: React.ReactNode;
}

export default function RootLayout( {children}:iProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <>
          <Nav />
          {children}
          {/* <Footer /> */}
        </>
      </body>
    </html>
  );
}
