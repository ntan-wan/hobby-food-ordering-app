import { ProductSidebar } from "@/components/product/ProductSidebar"

export default function SidebarPage() {
	const product = {
		img: '/imgs/dummy-food.png',
		title: 'test',
		price: 100,
		amount: 1,
	}

	return (
		<ProductSidebar  product={product}/>
	)
}