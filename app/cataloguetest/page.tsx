'use client'
import Image from 'next/image';
import Link from 'next/link';
import filter from '@img/filter.svg';
import { useState, useEffect } from 'react';
import healthyMe from '@img/healthyMe.png';
import granel from '@img/granel.png';
import productsGranel from '../assets/productsGranel';
import descriptionGranel from '@img/listaGranel/descriptionGranel.png';

export default function Catalogue() {
	const [products, setProducts] = useState([]);
	const [showGranel, setShowGranel] = useState(false);
	const [showFilter, setShowFilter] = useState(false);
	const [filteredGranel, setFilteredGranel] = useState(productsGranel);
	const [filter, setFilter] = useState('');
	const filteredProducts = products;
	
	const getProducts = () => {
		fetch('https://siembrasanaapi-dev-ghhz.2.ie-1.fl0.io/products')
			.then(res => res.json())
			.then(res => {
				setProducts(res);
			});
	}
	useEffect(() => {
		getProducts();
	}, [])
	useEffect(() => {
		if(filter === '')
			setFilteredGranel(productsGranel);
		else
			setFilteredGranel(productsGranel.filter((product : any) => filter.includes(product.name)));
	}, [filter]);

	const changeFilter = (name : string) => {
		if(filter.includes(name)) {
			setFilter(filter.replace("," + name, ''));
		}else{
			setFilter(filter + "," + name);
		}
	}
	const setFilters = () => {
		let filters;

	}
	return (
		<div>
			<main id='main_content' className="flex justify-center w-[1700px] max-w-full relative left-[50%] translate-x-[-50%] pb-12">
				<div className='w-[1700px] max-w-full relative'>
					<section className='w-full flex justify-center'>
						<div className='w-[300px] bg-slate-200 border-r border-neutral-300'>

						</div>
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
								</div>
							</div>
							<p className='md:hidden block mt-2 text-neutral-500 ml-2'>{filteredProducts.length === 0 ? "No hay ningún resultado" : filteredProducts.length === 1 ? "Mostrando 1 resultado" : "Mostrando todos los " + filteredProducts.length +  " resultados"}</p>
							<div className='mt-3 flex justify-center'>
								<div className='flex flex-wrap justify-center'>
									{filteredProducts.map((product : any, index : number) => (
										<Link key={index} href={"/producttest?id=" + product.id} className='w-[165px] h-[250px] md:w-[300px] md:h-[400px] border-2 [&>h3]:hover:text-yellow-600 hover:border-green-600 border-green-600 flex flex-col items-center md:m-2 m-[2px] transition-all'>
											<div className='border-green-600 h-2/3 w-full flex justify-center p-2 transition-all'>
												<Image
													className='h-full w-auto max-w-full p-2 '
													src={product.img[0]}
													width={300}
													height={300}
													alt="product"
												/>
											</div>
											<h3 className='md:text-xl text-base font-bold text-center md:leading-5 leading-4 p-3 my-auto transition-colors'>{product.name}</h3>
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