"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

interface IPropsTabContent {
    value: string;
    children: React.ReactNode;
}

interface IPropsTabs {
    children: React.ReactNode;
    className?: string;
}

export function CustomTabContent({ value, children }: IPropsTabContent) {
    return <TabsContent value={value}>{children}</TabsContent>;
}


function CustomHighlight({className, style}: {className?: string, style?: React.CSSProperties}) {
	
	const variants = {
		base: 'absolute h-full bg-primary rounded-lg transition-all',
		active: 'w-[4%]'
	}

	return (<span className={cn(variants.base, variants.active, className)} style={style}></span>)
};
function CustomLine({itemIndex} : {itemIndex: number}) {
	
	const variants = {
		base: 'relative h-[3px] bg-cgray-dark',
	}

	return (<div className={cn(variants.base)}>
		<CustomHighlight style={{left: `${itemIndex * 5}%`}}/>
	</div>)
}

export function CustomTabs({ children, className, ...props }: IPropsTabs) {
    const variants = {
        base: "bg-transparent gap-8",
    };
    const tabsTriggerVariants = {
        base: "data-[state=active]:text-primary p-0",
    };

	const [activeTab, setActiveTab] = useState(0);

    return (
        <Tabs  defaultValue="tab1" className={cn(className)}>
            <TabsList className={cn(variants.base)}>
                <TabsTrigger value="tab1" className={cn(tabsTriggerVariants.base)} onClick={() => setActiveTab(0)}>
                    Tab 1
                </TabsTrigger>
                <TabsTrigger value="tab2" className={cn(tabsTriggerVariants.base)} onClick={() => setActiveTab(1)}>
                    Tab 2
                </TabsTrigger>
            </TabsList>

			<CustomLine itemIndex={activeTab}></CustomLine>
			
            {children}
        </Tabs>
    );
}
