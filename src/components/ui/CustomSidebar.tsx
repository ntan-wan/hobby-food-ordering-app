"use client";

import {useState} from 'react';
import { CustomIcon } from "@/components/ui/CustomIcon";
import Link from "next/link";
import { cn } from "@/lib/utils";
import dynamicIconImports from "lucide-react/dynamicIconImports";

export function CustomSidebar() {

	const [selectedIndex, setSelectedIndex] = useState(0);

    const menuItems = [
		{ id: "store", label: "Store", icon: "store", link: "/store" },
		{ id: "home", label: "Home", icon: "house", link: "/home" },
		{ id: "discount", label: "Discount", icon: "circle-percent", link: "/discount" },
		{ id: "report", label: "Report", icon: "table", link: "/report" },
		{ id: "mail", label: "Mail", icon: "mail", link: "/mail" },
		{ id: "notification", label: "Notification", icon: "bell", link: "/notification" },
		{ id: "settings", label: "Settings", icon: "settings", link: "/settings" },
		{ id: "logout", label: "Log Out", icon: "log-out", link: "/logout" },
	];

    return (
        <nav className="bg-secondary fixed h-full w-[104px] p-6 top-0 left-0">
            <ul className="flex flex-col justify-between h-full">
                {menuItems.map((item, index) => (
                    <li key={item.id} className="flex items-center justify-center">
                        <Link onClick={() => setSelectedIndex(index)} className={cn('cursor-pointer p-4 rounded-md c-btn-icon', index == selectedIndex && 'bg-primary')} href={item.link}>
                            <CustomIcon name={item.icon as keyof typeof dynamicIconImports} className={cn('text-primary', index == selectedIndex && 'text-white')}/>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
