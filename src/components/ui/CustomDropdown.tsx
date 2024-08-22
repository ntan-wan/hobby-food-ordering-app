import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import {CustomIcon} from '@/components/ui/CustomIcon';
import { IOption } from "@/lib/types";
import { cn } from "@/lib/utils";

interface IProps {
	title: string;
	options: IOption[];
}

export function CustomDropdown({title = 'Dropdown', options = []}: IProps) {

	const variants = {
        base: "bg-secondary rounded-lg border border-cgray-dark p-3.5 flex items-center gap-2",
    };
	const contentVariants = {
		base: "w-[186px] bg-secondary text-white border-cgray-dark",
	}

    return (
        <DropdownMenu>
            <DropdownMenuTrigger className={cn(variants.base)}>
				<CustomIcon name="chevron-down"/>{title}
				</DropdownMenuTrigger>
            <DropdownMenuContent className={cn(contentVariants.base)}>
				{options.map((option) => (
					<DropdownMenuItem key={option.id}>{option.label}</DropdownMenuItem>
				))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
