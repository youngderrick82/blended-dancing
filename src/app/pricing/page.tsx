import { Button } from "@/components/ui/button"




export default function Pricing() {



    return (
        <div >
            <h1 className="text-5xl font-playfairDisplay text-center">Pricing</h1>
            <div className="pricing-container">
                <Button className="border-2 border-black">
                    Click here for pricing
                </Button>
                <p className="text-center">Opens in new Window</p>
            </div>
            <div className="discount-container"></div>
        </div>
    )
}