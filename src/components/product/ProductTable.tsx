import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CustomInput } from "@/components/ui/CustomInput";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { IProduct } from "@/lib/types";
import { CustomButton } from "@/components/ui/CustomButton";
import { Trash } from "lucide-react";

interface IProps extends React.HTMLAttributes<HTMLTableElement> {
    product: IProduct;
    className?: string;
}

export function ProductTable({ product, ...props }: IProps) {
    return (
        <Table className={cn(props.className)}>
            <TableHeader>
                <TableRow className="hover:bg-transparent">
                    <TableHead className="font-semibold text-white">Item</TableHead>
                    <TableHead className="font-semibold text-white">Qty</TableHead>
                    <TableHead className="font-semibold text-white">Price</TableHead>
                </TableRow>
            </TableHeader>

            <TableBody>
                <TableRow className="hover:bg-transparent">
                    <TableCell>
                        <div className="flex gap-2">
                            <div><Image src={product.img} alt={"dummy"} width={50} height={50} /></div>
                            <div>
                                <p className="text-sm w-[188px] truncate">spicy seasoned seafood noodles</p>
                                <p className="text-xs text-cgray-light">RM {product.price}</p>
                            </div>
                        </div>
                        <CustomInput className="mt-[10px]" placeholder="Order Note..." />
                    </TableCell>
                    <TableCell>
                        <div className="mt-[56px] border rounded-md p-[14px] bg-background">2</div>
                    </TableCell>
                    <TableCell>
                        <span className="font-medium block">$2.58</span>
                        <div className="mt-[36px] border border-primary rounded-md p-[14px] flex justify-center cursor-pointer">
                            <Trash size={18} className="text-primary" />
                        </div>
                    </TableCell>
                </TableRow>
            </TableBody>
        </Table>
    );
}
