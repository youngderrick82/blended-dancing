import { Button } from "@/components/ui/button"




export default function Pricing() {



    return (
        <div >
            <h1 className="text-5xl font-playfairDisplay text-center mb-20">Pricing</h1>
            <div className="pricing-container">
                <div className="flex justify-between">
                <Button className="border-2 border-black m-auto">
                    Click here for pricing
                </Button>
                </div>
                <p className="text-center">Opens in new Window</p>

                <div className="flex justify-between mt-8">
                <Button className="border-2 border-black m-auto">
                    Click here for Discounts
                </Button>
                </div>
                <p className="text-center">Opens in new Window</p>
            </div>
            <div className="discount-container"></div>
        </div>
    )
}