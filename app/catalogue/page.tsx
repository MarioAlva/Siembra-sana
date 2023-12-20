'use client'
import Image from 'next/image';
import Link from 'next/link';
import filter from '@img/filter.svg';
import products from '@info/products';
import { useState, useEffect } from 'react';
import healthyMe from '@img/healthyMe.png';
import granel from '@img/granel.png';
import productsGranel from '../assets/productsGranel';
import descriptionGranel from '@img/listaGranel/descriptionGranel.png';
import warning from '@img/warning.png';

export default function Catalogue() {
	const [showGranel, setShowGranel] = useState(false);
	const [showFilter, setShowFilter] = useState(false);
	const [filteredGranel, setFilteredGranel] = useState(productsGranel);
	const [filter, setFilter] = useState('');
	const filteredProducts = products;
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
	return (
		<div>
			<main id='main_content' className="flex justify-center w-[1700px] max-w-full relative left-[50%] translate-x-[-50%] pb-12">
				<div className='w-[1700px] max-w-full relative'>
					<div className='w-full md:h-40 h-24 flex'>
						<div  onClick={() => setShowGranel(false)} className={'w-1/2 h-full flex justify-center items-center md:hover:bg-neutral-200 cursor-pointer ' + (!showGranel && 'bg-green-100')}>
							<Image 
								src={healthyMe}
								className='md:h-28 h-auto w-auto max-w-[66%]'
								alt="healthyMe"
							/>
						</div>
						<div onClick={() => setShowGranel(true)} className={'w-1/2 h-full flex flex-col justify-center items-center md:hover:bg-neutral-200 cursor-pointer ' + (showGranel && 'bg-green-100')}>
							<Image 
								src={granel}
								className='md:h-24 h-16 w-auto max-w-[66%]'
								alt="Granel"
							/>
							<h2 className='font-bold md:text-xl text-sm'>BIO GRANEL</h2>
						</div>
					</div>
					{showGranel ?
					<div className='pt-6 px-2 flex flex-col items-center h-full'>
						<h4 className='font-bold md:text-4xl md:mb-4 text-xl'>Lista de productos Bio Granel</h4>
						<div className='flex items-center'>
							<Image
								src={warning}
								alt='Warning'
								className='h-6 w-6 object-cover -mt-2 mr-1'
							/>
							<h6 className='mb-2 md:text-lg text-sm text-center font-bold'>Actualizado en Noviembre de 2023 (El precio de los productos puede variar)</h6>
							<Image
								src={warning}
								alt='Warning'
								className='h-6 w-6 object-cover -mt-2 ml-1'
							/>
						</div>
						<div className='flex md:hidden justify-start w-full px-3 relative'>
							<span className='flex px-4 bg-green-200 rounded cursor-pointer mb-2 font-bold' onClick={() => setShowFilter(!showFilter)}>Filter</span>
							<span className=' justify-between text-xs flex px-3 ml-2 bg-neutral-300 rounded-full items-center h-6 max-w-full overflow-hidden text-ellipsis flex-nowrap'>
								{filter || 'Todos'}
								{filter && <div onClick={() => setFilter('')} className='ml-2 text-white w-4 h-4 justify-center items-center flex cursor-pointer bg-neutral-600 rounded-full'>x</div>}
							</span>
							{showFilter &&
								<div className='absolute top-6 z-10 w-[96%] bg-white'>
									<div className='w-full bg-green-200 border-r-green-600 border'>
									{productsGranel.map((product : any, index : number) => (
										<div onClick={() => changeFilter(product.name)} key={index} className={' cursor-pointer w-full flex justify-center items-center border-b border-green-600 ' + (filter.includes(product.name) && 'bg-green-400')}>
											<h4 className='font-bold text-sm h-6'>{product.name}</h4>
										</div>
									))}
									</div>
								</div>}
						</div>
						<div className='flex w-full relative md:min-h-[824px]'>
							<div className='md:flex hidden w-[30%] max-w-full h-6 bg-green-600 rounded-sm' onClick={() => setShowFilter(!showFilter)}>
								<div className='w-full bg-green-200 border-r-green-600 border'>
									{productsGranel.map((product : any, index : number) => (
										<div onClick={() => changeFilter(product.name)} key={index} className={' cursor-pointer w-full flex justify-center items-center border-b border-green-600 hover:bg-green-400 ' + (filter.includes(product.name) && 'bg-green-400')}>
											<h4 className='font-bold text-sm h-6'>{product.name}</h4>
										</div>
									))}
								</div>
							</div>
							<div className='md:w-[70%] w-full px-2 flex flex-col items-center'>
							<Image
								src={descriptionGranel}
								alt='Description'
							/>
										
							{filteredGranel.map((product : any, index : number) => (
								product.img.map((img : any, index2 : number) => (
									<Image key={index2} src={img} alt={product.name + index2}/>
								))
							))}
							</div>
						</div>
					</div>
					:
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
											<h3 className='md:text-xl text-base font-bold text-center md:leading-5 leading-4 p-3 my-auto transition-colors'>{product.name}</h3>
										</Link>
									))}
								</div>
							</div>
						</div>
					</section>
					}
				</div>
			</main>
		</div>
	)
}