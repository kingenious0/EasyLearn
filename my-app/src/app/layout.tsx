import type {
    Metadata
}
from "next";
import {
    Plus_Jakarta_Sans, Instrument_Serif
}
from "next/font/google";
import Navbar from "../components/Navbar";
import "./globals.css";

const sans = Plus_Jakarta_Sans({ variable: "--font-sans", subsets: ["latin"], });

const serif = Instrument_Serif({ variable: "--font-serif", weight: "400", subsets: ["latin"], });

export const metadata:Metadata = {
    title: "EasyLearn | Master WASSCE & More",
    description: "The premium learning platform for SHS, Technical and Vocational students.", };

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; } > ) {
    return(<html lang="en">      <body className={`${sans.variable} ${serif.variable}`}>
        <Navbar />
        {children}
      </body> </html>);
}
