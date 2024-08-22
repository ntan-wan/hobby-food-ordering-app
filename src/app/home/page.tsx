import { CustomInput } from "@/components/ui/CustomInput";
import { CustomTabs, CustomTabContent } from "@/components/ui/CustomTabs";
import { ProductCard } from "@/components/product/ProductCard";
import { CustomDropdown } from "@/components/ui/CustomDropdown";
import { ProductSidebar } from "@/components/product/ProductSidebar";

export default function HomePage() {

	const modeOfServices = [
		{ id: '1', label: 'Dine In' },
		{ id: '2', label: 'Take Away' },
		{ id: '3', label: 'Delivery' },
	]

    return (
        <div className="pt-6">
            {/* Header */}
            <div className="flex items-center justify-between pb-6">
                <div>
                    <h1>Jaegar Resto</h1>
                    <p className="text-cgray-lighter">Tuesday, 2 Feb 2021</p>
                </div>
                <div>
                    <CustomInput placeholder="Search" />
                </div>
            </div>

            {/* Orders */}
            <div>
                <CustomTabs>
                    <CustomTabContent value="tab1">
						<div className="flex items-center justify-between mb-[calc(60px+24px)]">
							<h2>Choose Dishes</h2>
							<div><CustomDropdown title="Mode of Service" options={modeOfServices}></CustomDropdown></div>
						</div>

						<div className="grid grid-cols-3 gap-x-[28px] gap-y-[calc(58px+24px)] grid-cols">
							<div><ProductCard /></div>
							<div><ProductCard /></div>
							<div><ProductCard /></div>
							<div><ProductCard /></div>
						</div>
                    </CustomTabContent>
                    <CustomTabContent value="tab2">test2</CustomTabContent>
                </CustomTabs>
            </div>
			
        </div>
    );
}
