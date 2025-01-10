"use client";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function NavBar() {
    const [showNav, setShowNav] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY && currentScrollY > 50) {
                setShowNav(false);
            } else {
                setShowNav(true);
            }
            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <nav
            className={cn(
                "fixed top-0 h-16 z-50 left-0 w-full transition-transform duration-300",
                showNav ? "translate-y-0" : "-translate-y-full",
                "bg-slate-700 text-white shadow-md "
            )}
        >
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
                <div className="text-xl m-auto font-playfairDisplay">
                    <Link href="/" className="mr-2">
                        Home
                    </Link>
                    <Link href="/classes" className="mr-2">Classes</Link>
                    <Link href="/pricing">Pricing</Link>
                    <Link href="/contact-us" className="ml-2">
                        Contact Us
                    </Link>
                </div>
            </div>
        </nav>
    );
}
