'use client'

import category from '@info/categories';
import Image from 'next/image';
import Link from 'next/link';
import filter from '@img/filter.svg';
import products from '@info/products';
import { useState } from 'react';

export default function Catalogue() {
	const [filteredProducts, setFilteredProducts] = useState(products);
	// const [isFiltered, setIsFiltered] = useState(false);
	// const filterProducts = (filter : string) => {
	// 	setFilteredProducts(products.filter((product : any) => product.genre.filter((genre : string) => genre === filter).length > 0));
	// }
	return (
		<div>
			{/* <div className="w-full h-full left-0 bg-slate-100 flex justify-center flex-wrap z-10">
				{category.map((category : string, index : number) => (
					<div key={index} className="h-full flex justify-center items-center hover:bg-white cursor-pointer" onClick={() => {filterProducts(category); setIsFiltered(true)}}>
						<span className="text-xs flex my-1 px-10 w-full border border-l-green-600 border-r-green-600 border-transparent uppercase">{category}</span>
					</div>
				))}
			</div> */}
			<main id='main_content' className="flex justify-center w-[1700px] max-w-full relative left-[50%] translate-x-[-50%] pb-12">
				<div className='w-[1700px] max-w-full relative'>
					{/* {!isFiltered &&
						<section className='md:px-12 lg:px-5 bg-plant-image bg-cover flex h-[400px] lg:h-[700px] lg:max-h-first-section lg:py-3 relative before:contents-[""] before:absolute before:w-full before:h-full before:bg-black-white-gradient before:top-0 before:left-0'>
							<div className='hidden lg:flex flex-col justify-between items-center z-10'>
								<div className='w-[300px] h-[300px] bg-green-600'></div>
								<div className='w-[300px] h-[300px] bg-green-600'></div>
							</div>
							<div className='w-full h-full bg-green-600 lg:mx-10 z-10'></div>
							<div className='hidden lg:flex flex-col justify-between items-center z-10'>
								<div className='w-[300px] h-[300px] bg-green-600'></div>
								<div className='w-[300px] h-[300px] bg-green-600'></div>
							</div>
						</section>
					} */}
					<section className='w-full flex justify-center'>
						<div className='hidden w-[300px] bg-slate-200 border-r border-neutral-300'></div>
						<div className='w-full'>
							<div className='w-full h-10 border-b border-neutral-300 flex justify-between items-center'>
								<div className='md:block hidden text-neutral-500 md:ml-12 ml-2'>{filteredProducts.length === 0 ? "No hay ningún resultado" : filteredProducts.length === 1 ? "Mostrando 1 resultado" : "Mostrando todos los " + filteredProducts.length +  " resultados"}</div>
								<div className='flex md:hidden items-center hover:bg-neutral-200 px-3 py-1 cursor-pointer'>
									<span className=' text-sky-600 font-bold'>Filter</span>
									<Image
										className='h-5 w-5 ml-2'
										src={filter}
										alt="filter"
									/>
								</div>
								<div className='flex'>
									<select className='mr-2 md:mr-12' name="filter" id="filter_select">
										<option value="default">Orden por defecto</option>
										<option value="popular">Orden por popularidad</option>
										<option value="rate">Orden por puntuación media</option>
										<option value="latest">Orden por los últimos</option>
										<option value="price_asc">Orden por precio: bajo a alto</option>
										<option value="price_desc">Orden por precio: alto a bajo</option>
									</select>
								</div>
							</div>
							<p className='md:hidden block mt-2 text-neutral-500 ml-2'>{filteredProducts.length === 0 ? "No hay ningún resultado" : filteredProducts.length === 1 ? "Mostrando 1 resultado" : "Mostrando todos los " + filteredProducts.length +  " resultados"}</p>
							<div className='mt-3 flex justify-center'>
								<div className='flex flex-wrap justify-center'>
									{filteredProducts.map((product : any, index : number) => (
										<Link key={index} href={"/product?id=" + product.productCode} className='w-[165px] h-[250px] md:w-[300px] md:h-[400px] border-2 [&>h3]:hover:text-yellow-600 hover:border-green-600 border-green-600 flex flex-col items-center md:m-2 m-[2px] transition-all'>
											<div className='border-green-600 h-2/3 w-full flex justify-center p-2 transition-all'>
												<Image
													className='h-full w-auto max-w-full p-2 '
													src={product.img[0]}
													alt="product"
												/>
											</div>
											<h3 className='md:text-xl text-lg font-bold text-center leading-5 p-3 my-auto transition-colors'>{product.name}</h3>
										</Link>
									))}
								</div>
							</div>
						</div>
					</section>
				</div>
			</main>
		</div>
	)
}