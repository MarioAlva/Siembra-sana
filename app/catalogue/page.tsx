'use client'
import Image from 'next/image';
import Link from 'next/link';
import filter from '@img/filter.svg';
import products from '@info/products';
import { useState } from 'react';
import healthyMe from '@img/healthyMe.png';
import granel from '@img/granel.png';
import listaGranel1 from '@img//listaGranel/listaGranel1.png';
import listaGranel2e from '@img//listaGranel/listaGranel2-5.png';
import listaGranel2 from '@img//listaGranel/listaGranel2.png';
import listaGranel3 from '@img//listaGranel/listaGranel3.png';
import listaGranel4 from '@img//listaGranel/listaGranel4.png';
import listaGranel5 from '@img//listaGranel/listaGranel5.png';
import listaGranel6 from '@img//listaGranel/listaGranel6.png';
import listaGranel7 from '@img//listaGranel/listaGranel7.png';
import listaGranel8 from '@img//listaGranel/listaGranel8.png';
import listaGranel9 from '@img//listaGranel/listaGranel9.png';
import listaGranel10 from '@img//listaGranel/listaGranel10.png';
import listaGranel11 from '@img//listaGranel/listaGranel11.png';
import listaGranel12 from '@img//listaGranel/listaGranel12.png';
import listaGranel13 from '@img//listaGranel/listaGranel13.png';
import listaGranel14 from '@img//listaGranel/listaGranel14.png';
import listaGranel15 from '@img//listaGranel/listaGranel15.png';
import listaGranel16 from '@img//listaGranel/listaGranel16.png';
import listaGranel17 from '@img//listaGranel/listaGranel17.png';
import listaGranel18 from '@img//listaGranel/listaGranel18.png';
import listaGranel19 from '@img//listaGranel/listaGranel19.png';
import listaGranel20 from '@img//listaGranel/listaGranel20.png';
import listaGranel21 from '@img//listaGranel/listaGranel21.png';

export default function Catalogue() {
	const [showGranel, setShowGranel] = useState(false);
	const filteredProducts = products;
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
						<div onClick={() => setShowGranel(true)} className={'w-1/2 h-full flex justify-center items-center md:hover:bg-neutral-200 cursor-pointer ' + (showGranel && 'bg-green-100')}>
							<Image 
								src={granel}
								className='md:h-28 h-20 w-auto max-w-[66%]'
								alt="Granel"
							/>
						</div>
					</div>
					{showGranel ?
					<div className='flex flex-col items-center pt-6 px-2'>
						<h4 className='font-bold md:text-4xl md:mb-4 text-xl mb-2'>Lista de productos Bio Granel</h4>
						<Image src={listaGranel1} alt='listaGranel1'/>
						<Image src={listaGranel2} alt='listaGranel2'/>
						<Image src={listaGranel2e} alt='listaGranel2-5'/>
						<Image src={listaGranel3} alt='listaGranel3'/>
						<Image src={listaGranel4} alt='listaGranel4'/>
						<Image src={listaGranel5} alt='listaGranel5'/>
						<Image src={listaGranel6} alt='listaGranel6'/>
						<Image src={listaGranel7} alt='listaGranel7'/>
						<Image src={listaGranel8} alt='listaGranel8'/>
						<Image src={listaGranel9} alt='listaGranel9'/>
						<Image src={listaGranel10} alt='listaGranel10'/>
						<Image src={listaGranel11} alt='listaGranel11'/>
						<Image src={listaGranel12} alt='listaGranel12'/>
						<Image src={listaGranel13} alt='listaGranel13'/>
						<Image src={listaGranel14} alt='listaGranel14'/>
						<Image src={listaGranel15} alt='listaGranel15'/>
						<Image src={listaGranel16} alt='listaGranel16'/>
						<Image src={listaGranel17} alt='listaGranel17'/>
						<Image src={listaGranel18} alt='listaGranel18'/>
						<Image src={listaGranel19} alt='listaGranel19'/>
						<Image src={listaGranel20} alt='listaGranel20'/>
						<Image src={listaGranel21} alt='listaGranel21'/>
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