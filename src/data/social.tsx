import { SocialType } from "../types"
import { Phone, Mail, Facebook, Instagram,} from "lucide-react"
import Tiktok from "@/components/tiktok";

const socials: Record<string, SocialType> = {
    phone: {
        image: <Phone className="m-auto"/>,
        link: "tel:14058735048",
        text: "+1 (405) 873-5048",
    },
    email: {
        image: <Mail className="m-auto"/>,
        link: "mailto:info@blendedstudios.onmicrosoft.com",
        text: "info@blendedstudios.onmicrosoft.com",
    },
    facebook: {
        image: <Facebook className="m-auto"/> ,
        link: "https://www.facebook.com/profile.php?id=61568409165617",
        text: "FIND US ON FACEBOOK",
    },
    instagram: {
        image: <Instagram className="m-auto"/>,
        link: "https://www.instagram.com/_blendedstudios/",
        text: "FOLLOW US ON INSTAGRAM",
    },
    tiktok: {
        image: <Tiktok className="m-auto" />,
        link: "https://www.tiktok.com/@blended.dance.stu",
        text: "CATCH US ON TIK TOK"
    }
};

export default socials;