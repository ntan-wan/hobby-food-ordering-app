"use client";

import { CustomButton } from "@/components/ui/CustomButton"
import { ProductTable } from "@/components/product/ProductTable"
import { IProduct } from "@/lib/types";

interface IProps {
	product: IProduct
}

export function ProductSidebar({product, ...props} : IProps) {

	return (<div className="min-h-screen flex flex-col bg-secondary p-6 fixed right-0">
		<h2>Orders #34562</h2>

		{/* selection */}
		<div className="mt-6 flex items-center gap-2">
			<CustomButton label="Dine In"/>
			<CustomButton label="To Go" variant="outline"/>
			<CustomButton label="Delivery" variant="outline"/>
		</div>

		{/* table */}
		<ProductTable className="mt-6" product={product}/>

		{/* total */}
		<div className="mt-auto">
			<div className="flex items-center justify-between">
				<span className="text-sm text-cgray-light">Discount</span>
				<p className="font-medium text-base">$0</p>
			</div>
			
			<div className="mt-4 flex items-center justify-between">
				<span className="text-sm text-cgray-light">Sub Total</span>
				<p className="font-medium text-base">$21.03</p>
			</div>
		
			<CustomButton label="Continue to payment" className="mt-[42px] w-full font-semibold"/>
		</div>
	</div>)
}