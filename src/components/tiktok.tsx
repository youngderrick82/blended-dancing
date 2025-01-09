import Image from "next/image";

type TiktokProps = {
    className?: string;
};

export default function Tiktok({ className }: TiktokProps) {
    return (
        <Image
            height={30}
            width={30}
            alt="tiktok logo"
            src="/images/tik-tok.png"
            className={className}
        />
    );
}
