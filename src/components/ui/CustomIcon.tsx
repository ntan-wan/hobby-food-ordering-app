// import { icons } from "lucide-react";

// interface IProps {
//     name: string; // eg: 'House'
// 	className?: string;
// }

// export function CustomIcon({ name, ...props }: IProps) {
//     const LucideIcon = icons[name as keyof typeof icons];

//     return <LucideIcon  {...props}/>;
// }

import dynamic from "next/dynamic";
import { LucideProps } from "lucide-react";
import dynamicIconImports from "lucide-react/dynamicIconImports";

interface IconProps extends LucideProps {
    name: keyof typeof dynamicIconImports;
}

export function CustomIcon({ name, ...props }: IconProps) {
    const LucideIcon = dynamic(dynamicIconImports[name]);

    return <LucideIcon {...props} />;
};