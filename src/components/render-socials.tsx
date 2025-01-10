import { SocialType } from "@/types";
import Link from "next/link";

type RenderSocialsProps = {
    social: SocialType;
};

export default function RenderSocials({ social }: RenderSocialsProps) {
    return (
        <div className="m-auto hover:scale-95 transition-transform">
            <Link
                href={social.link}
                className="flex flex-row border-2 m-2 border-stone-900"
                target="_blank"
            >
                <div className="p-2">
                    <div className="">{social.image}</div>
                </div>
                <div className="m-auto w-fit">{social.text}</div>
            </Link>
        </div>
    );
}
