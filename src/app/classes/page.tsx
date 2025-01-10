import { Button } from "@/components/ui/button";




export default function Classes() {


    return (
        <div>
        <h1 className="text-5xl font-playfairDisplay text-center mb-20">Classes</h1>

        <div className="">
            <p className="font-poppins w-2/3 md:w-2/5  m-auto text-center p-8 border-2 border-black shadow-2xl rounded bg-white overflow-auto h-[400px]">
            Whether you&apos;re a complete beginner or an experienced dancer, there&apos;s something for everyone.<br /><br />From the graceful movements of ballet to the energetic beats of hip-hop, our classes are designed to inspire and challenge you.<br/><br/> Join us for salsa to spice up your week, or try a contemporary dance class to explore your creative side.<br/><br />Our talented instructors are passionate about helping you reach your full potential and ensuring you have fun along the way.<br/><br/>Don&apos;t miss out on the opportunity to express yourself through dance!
            </p>
        </div>

        <div className="flex m-4">
            <Button className="m-auto border-2 border-black bg-pink-500 hover:bg-pink-700 text-white transition-transform transform hover:scale-110">Class Schedule</Button>
        </div>
        </div>
    )
}