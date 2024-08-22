import { Button, buttonVariants } from "@/components/ui/button";
import { type VariantProps } from "class-variance-authority";

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    label: string;
}
export function CustomButton({ label, ...props }: IProps) {
    return <Button {...props}>{label}</Button>;
}
