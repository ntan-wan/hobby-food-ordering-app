import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { IProduct } from "@/lib/types";
import { cn } from "@/lib/utils";

interface IProps {
    className?: string;
}

export function ProductCard({ ...props }: IProps) {
    const dummy: IProduct = {
        img: "/imgs/dummy-food.png",
        title: "Spicy seasoned seafood noodles",
        price: 2.29,
        amount: 20,
    };

    const variants = {
        base: "relative bg-secondary text-white rounded-2xl pt-[calc(76px+18px)] border-secondary",
    };

    return (
        <Card {...props} className={cn(variants.base)}>
            <Image className="absolute  w-[150px] h-[136px] object-contain  !left-[calc(50%-75px)] !top-[-60px]" width={150} height={136} src={dummy.img} alt="food" />
            <CardContent className="text-center">
                <p className="font-medium">{dummy.title}</p>
                <p className="mt-2">RM {dummy.price}</p>
                <p className="mt-2 text-cgray-light">{dummy.amount} bowls available</p>
            </CardContent>
        </Card>
    );
}
