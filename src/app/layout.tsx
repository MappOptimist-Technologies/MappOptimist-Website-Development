import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import Script from "next/script";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import BootstrapProvider from "../components/Provider/BootstrapProvider";
import { AOSInit } from "@/components/aos";

const getUbuntu = Ubuntu({
  variable: "--font-ubuntu-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"], // Add appropriate weights as needed
});

export const metadata: Metadata = {
  title: "MappOptimist Technologies - Transforming Businesses with Innovation and Technology",
  description: "Transforming businesses with innovative IT solutions. Specializing in iOS, Android, Flutter app development, Web application development, OCR/ICR solutions.",
};

export default function RootLayout ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
          integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
          crossOrigin="anonymous"
        ></Script>
        <Script
          src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js"
          integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
          crossOrigin="anonymous"
        ></Script>
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js"
          integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
          crossOrigin="anonymous"
        ></Script>
      </head>
      <AOSInit />
      <body className={ `${getUbuntu.variable}` }>
        <BootstrapProvider />
        { children }
      </body>
    </html>
  );
}
