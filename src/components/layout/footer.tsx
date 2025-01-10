import Link from "next/link";

export default function Footer() {
    return (
        <footer className="font-poppins bg-slate-700 border-t-2 mt-4 shadow-xl min-h-[300px] text-white text-center">
            <div className="flex flex-col md:flex-row justify-evenly w-full h-[280px] md:h-auto">

                <div className="pages hidden md:flex md:flex-col *:m-2 *:border-white *:border-[1px] *:bg-slate-600 *:p-1">
                    <Link href="/">Home</Link>
                    <Link href="/classes">Classes</Link>
                    <Link href="/pricing">Pricing</Link>
                    <Link href="/contact-us">Contact Us</Link>
                </div>

                <div className="contact-info flex flex-col *:m-2">
                    <Link href="tel:14058735048" className="basis-full">Call:<br/>(405) 873-5048</Link>
                    <Link href="mailto:info@blendedstudios.onmicrosoft.com" className="basis-full">
                        Email:<br/>info@blendedstudios.onmicrosoft.com
                    </Link>
                </div>

                <div className="socials flex md:flex-col justify-evenly *:p-1 *:bg-slate-600 *:border-white *:border-[1px]">
                    <Link href="https://www.facebook.com/profile.php?id=61568409165617">
                        Facebook
                    </Link>
                    <Link href="https://www.instagram.com/_blendedstudios/">
                        Instagram
                    </Link>
                    <Link href="https://www.tiktok.com/@blended.dance.stu">
                        Tik Tok
                    </Link>
                </div>

                <div className="pages md:hidden flex justify-evenly *:shadow-2xl *:shadow-white *:bg-slate-600 *:p-1 *:border-white *:border-[1px]">
                    <Link href="/">Home</Link>
                    <Link href="/classes">Classes</Link>
                    <Link href="/pricing">Pricing</Link>
                    <Link href="/contact-us">Contact Us</Link>
                </div>

            </div>
            <p className="">&copy; 2025 Blended Studios. All rights reserved.</p>
        </footer>
    );
}
