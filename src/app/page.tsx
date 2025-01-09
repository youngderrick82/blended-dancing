import VideoHeader from "@/components/homepage/video-header";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
    return (
        <div>
            <VideoHeader />
            <div className="about-us-section font-poppins">
                <h2 className="font-playfairDisplay text-4xl m-4">About Us</h2>
                <p className="w-3/4 m-auto ">
                    Our mission is to create a welcoming dance community that
                    inspires joy, equality, and self- expression for all ages.
                    We are dedicated to fostering a sense of family, love, and
                    growth by celebrating diversity, encouraging creativity, and
                    nurturing the unique potential in every individual.
                    Together, we build a supportive space where passion and
                    unity flourish through the art of dance.
                </p>
                <ul className="list-disc w-3/5 m-auto mt-4 italic">
                    <li>Inclusive for all ages and skill levels</li>
                    <li>
                        Wide range of styles: Ballet, Hip-Hop, Latin Fusion,
                        etc...
                    </li>
                    <li>State-of-the-art facility</li>
                </ul>
            </div>

            <div className="featured-class font-poppins bg-[#fffcfc]">
                <h2 className="font-playfairDisplay text-4xl text-right m-4">Featured Class</h2>
                <h3 className="font-playfairDisplay text-3xl m-4 italic text-center">Latin Fusion Level 1</h3>
                <div className="relative">
                <Image
                  src="/dance-in-studio.jpg"
                  width={400}
                  height={400}
                  alt="latin fusion class image" 
                  className="m-auto"
                  />
                  </div>
                <p className="w-3/4 m-auto my-4 text-center">
                An energetic introduction to Latin Fusion dance, blending vibrant Latin rhythms with modern moves for beginners
                </p>
                <div className="flex justify-between">
                <Button className="m-auto mb-4">Learn More</Button>
                </div>
            </div>

            <div className="upcoming-events-section border-black border-2 h-[200px]">
            <h2 className="font-playfairDisplay text-4xl m-4">Upcoming Events</h2>
            </div>

            <div className="bg-[url('/bg-image.png')] h-[250px] p-2 bg-auto">
                <h3 className="bg-black/90 rounded font-playfairDisplay text-4xl text-[#fad9d5] w-3/4 text-center m-auto mt-8">Your Dance Journey Starts Here!</h3>
                <div className="flex justify-between m-8">
                <Button className="m-auto border-2 border-black">Get Started Today</Button>
                </div>
                </div>
            <div className="h-[250px]"></div>
        </div>
    );
}
