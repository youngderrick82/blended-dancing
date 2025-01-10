import RenderSocials from "@/components/render-socials";
import socials from "@/data/social";
import Image from "next/image";



export default function ContactUs() {
    return (
        <div className="font-poppins ">
            <h1 className="font-playfairDisplay text-5xl text-center">
                CONTACT US!!!
            </h1>
            <div className="mb-12">
                <p className="w-2/3 text-center m-auto mt-8">
                    Swing by our studio in person during office hours!
                </p>
                <p className="w-2/3 text-center m-auto mt-8 font-bold">Office Hours:</p>
                <p className="w-2/3 text-center m-auto">
                    Monday - Friday
                </p>
                <p className="w-2/3 text-center m-auto">
                    11am - 2pm
                </p>

                <p className="w-2/3 text-center m-auto font-bold mt-4">Address:</p>
                <p className="w-2/3 text-center m-auto">4604 NW 10th st,</p>
                <p className="w-2/3 text-center m-auto">Oklahoma City,</p>
                <p className="w-2/3 text-center m-auto">Oklahoma</p>
                <p className="w-2/3 text-center m-auto">73127</p>

                <p className="w-2/3 text-center m-auto mt-8 mb-8">
                    We can&apos;t wait to see your smiling face!
                </p>

                <div className="socials-container mt-12 bg-white p-2 mb-4 lg:w-2/5 lg:m-auto ">
                    {Object.entries(socials).map(([key, social]) => (
                        <RenderSocials key={key} social={social} />
                    ))}
                </div>
                </div>

                <div className="text-center border-2 border-stone-900 lg:w-1/2 lg:m-auto text-slate-700">
                    <h2 className="font-playfairDisplay text-4xl text-center text-[#fadad6] font-bold bg-slate-700 p-8">Additional Services</h2>
                    <div>
                        <h3 className="font-playfairDisplay text-3xl text-center font-bold mt-4">Space Rental</h3>
                        <p className="w-2/3 m-auto">Looking for a venue for your event? Our studio can accommodate up to 50 people, perfect for small gatherings, celebrations, or workshops.</p>
                        <Image
                            height={200}
                            width={250}
                            alt="Picture of studio"
                            src="/images/studio1.jpg"
                            className="m-auto my-2"
                        />
                        <Image
                            height={200}
                            width={250}
                            alt="Picture of studio"
                            src="/images/studio2.jpg"
                            className="m-auto"
                        />
                    </div>
                    <div className="bg-slate-700 text-[#fadad6]">
                        <h3 className="font-playfairDisplay text-3xl text-center font-bold mt-4">Private Lessons</h3>
                        <p className="w-2/3 m-auto">Elevate your skills with personalized one-on-one dance instruction tailored to your goals.</p>
                    </div>
                    <div>
                        <h3 className="font-playfairDisplay text-3xl text-center font-bold mt-4">Events</h3>
                        <p className="w-2/3 m-auto">Host your next event in a vibrant and spacious setting, whether it&apos;s a quinceañera, birthday party, or corporate event.</p>
                    </div>
                    <div className="bg-slate-700 text-[#fadad6]">
                        <h3 className="font-playfairDisplay text-3xl text-center font-bold mt-4">Choreography</h3>
                        <p className="w-2/3 m-auto">Planning a wedding, quinceañera, or special event? Our professional choreographers can create custom routines to make your event unforgettable.</p>
                    </div>
                </div>
                
            
        </div>
    );
}
