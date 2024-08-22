export interface IProduct {
    img: string;
    title: string;
    price: number;
    amount: number;
}

export interface IOption {
	id: string;
	label: string;
	value?: string;
	icon?: string;
}