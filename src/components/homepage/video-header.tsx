import Image from "next/image";
import { Button } from "../ui/button";

export default function VideoHeader() {
    return (
        <div>
            <div className="relative h-screen overflow-hidden">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute top-0 left-0 h-full w-full object-cover -z-50"
                >
                    <source
                        src="/dance_header_placeholder.mp4"
                        type="video/mp4"
                        className=""
                    />
                    Your browser does not support the video tag.
                </video>
                <div className="absolute top-0 left-0 w-full h-full bg-black/80 -z-40"></div>
                <div className="m-auto sm:top-40 sm:w-4/5 z-10">
                    <Image
                        src="/images/blended-studio-logo-rose.png"
                        alt="blended studio logo"
                        width={700}
                        height={700}
                        className="md:hidden"
                    />
                    <Image
                        src="/images/blended-studio-logo-white.png"
                        alt="blended studio logo"
                        width={300}
                        height={300}
                        className="hidden md:block m-auto"
                    />
                    <p className="text-lg text-gray-300 mt-2 absolute top-0 hidden">Empowering dancers to evolve together through creativity and passion.</p>
                </div>
                
                <div className="relative right-0 top-0 md:mt-48 z-10 text-white text-center">
                    <h1 className="text-5xl font-bold font-playfairDisplay drop-shadow-lg text-white">
                        DANCERS EVOLVE TOGETHER
                    </h1>
                </div>

                <div className="w-1/3 m-auto flex justify-center items-center">
                    <Button className="mx-auto mt-36 md:hidden font-montserrat text-xl p-6 border-2 border-black bg-pink-500 hover:bg-pink-700 text-white transition-transform transform hover:scale-110">
                        Join Us Today
                        <span>&#8594;</span>
                    </Button>
                    <div className="w-1/3 m-auto flex justify-center items-center">
                    <Button className="mx-auto mt-8 hidden md:flex font-montserrat text-xl p-6 border-2 border-black bg-pink-500 hover:bg-pink-700 text-white transition-transform transform hover:scale-110">
                        Join Us Today
                        <span>&#8594;</span>
                    </Button>
                </div>
                </div>
            </div>
        </div>
    );
}
