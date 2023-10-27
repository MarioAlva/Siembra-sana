import { StaticImageData } from "next/image";

//make me a typescript model for a product
export default interface Product {
	name: string;
	price: string;
	weight: number,
	packing: string;
	productCode: string;
	description: string;
	img: StaticImageData[];
	genre: string[];
}