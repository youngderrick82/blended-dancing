import NavBar from "@/components/layout/nav";
import type { Metadata } from "next";
import {
    Cormorant_Garamond,
    Geist,
    Geist_Mono,
    Playfair_Display,
    Montserrat,
    Poppins,
} from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/footer";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
    variable: "--font-playfair-display",
    subsets: ["latin"],
});

const cormorantGaramond = Cormorant_Garamond({
    variable: "--font-cormorant-garamond",
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
});

const montserrat = Montserrat({
    variable: "--font-montserrat",
    subsets: ["latin"],
});

const poppins = Poppins({
    variable: "--font-poppins",
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
    title: "Blended Studios",
    description: "Blended Dance Studio",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${cormorantGaramond} ${geistMono.variable} ${playfairDisplay.variable} ${montserrat.variable} text-slate-700 ${poppins.variable} min-h-screen flex flex-col antialiased overflow-x-hidden`}
            >
                <NavBar />
                <main className="pt-16 flex-grow">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
