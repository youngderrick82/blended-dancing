import * as motion from "motion/react-client";
import VideoHeader from "@/components/homepage/video-header";
import { Button } from "@/components/ui/button";
import Image from "next/image";


export default function Home() {
    return (
        <div>
            <VideoHeader />
            <div className="about-us-section font-poppins">
                <motion.div initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, easing: "ease-out" }}>
                <h2 className="font-playfairDisplay text-4xl m-4">About Us</h2>
                </motion.div>
                <motion.div initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, easing: "ease-out" }}>
                <p className="w-3/4 m-auto ">
                    Our mission is to create a welcoming dance community that
                    inspires joy, equality, and self- expression for all ages.
                    We are dedicated to fostering a sense of family, love, and
                    growth by celebrating diversity, encouraging creativity, and
                    nurturing the unique potential in every individual.
                    Together, we build a supportive space where passion and
                    unity flourish through the art of dance.
                </p>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, easing: "ease-out" }}>
                <ul className="list-disc w-3/5 m-auto mt-4 italic">
                    <li>Inclusive for all ages and skill levels</li>
                    <li>
                        Wide range of styles: Ballet, Hip-Hop, Latin Fusion,
                        etc...
                    </li>
                    <li>State-of-the-art facility</li>
                </ul>
                </motion.div>
            </div>

            <div className="featured-class font-poppins bg-[#fffcfc]">
                <h2 className="font-playfairDisplay text-4xl text-right m-4">
                    Featured Class
                </h2>
                <h3 className="font-playfairDisplay text-3xl m-4 italic text-center">
                    Latin Fusion Level 1
                </h3>
                <div className="relative">
                    <Image
                        src="/images/dance-in-studio.jpg"
                        width={400}
                        height={400}
                        alt="latin fusion class image"
                        className="m-auto"
                    />
                </div>
                <p className="w-3/4 m-auto my-4 text-center">
                    An energetic introduction to Latin Fusion dance, blending
                    vibrant Latin rhythms with modern moves for beginners
                </p>
                <div className="flex justify-between">
                    <Button className="m-auto mb-4 border-2 border-black bg-pink-500 hover:bg-pink-700 text-white transition-transform transform hover:scale-110">
                        Learn More
                    </Button>
                </div>
            </div>

            <div className="upcoming-events-section border-black border-2 h-[200px] hidden">
                <h2 className="font-playfairDisplay text-4xl m-4">
                    Upcoming Events
                </h2>
            </div>
            <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, easing: "ease-out" }}>
            <div className="bg-[url('/images/bg-image.png')] h-[250px] p-2 bg-auto flex flex-col items-center justify-center">
                <h3 className="bg-slate-700/90 rounded font-playfairDisplay text-4xl text-[#fad9d5] text-center flex items-center justify-center mt-8 sm:w-2/4 h-2/4 align-baseline motion-safe:animate-pulse">
                    Your Dance Journey Starts Here!
                </h3>
                <div className="flex justify-between m-8">
                    <Button className="m-auto border-2 border-black bg-pink-500 hover:bg-pink-700 text-white transition-transform transform hover:scale-110">
                        Get Started Today
                    </Button>
                </div>
            </div>
            </motion.div>
        </div>
    );
}
