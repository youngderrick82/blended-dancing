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
                <div className=" m-auto sm:top-40 sm:w-4/5 z-10">
                    <Image
                        src="/blended-studio-logo-rose.png"
                        alt="blended studio logo"
                        width={800}
                        height={800}
                        className=""
                    />
                </div>
                <div className="relative right-0 top-0 z-10 text-white text-center">
                    <h1 className="text-5xl font-bold font-playfairDisplay text-[#fad9d5]">
                        DANCERS EVOLVE TOGETHER
                    </h1>
                </div>

                <div className="w-1/3 m-auto flex justify-center items-center">
                    <Button className="mx-auto mt-36 font-montserrat text-xl p-6">
                        Join Us Today
                    </Button>
                </div>
            </div>
        </div>
    );
}
