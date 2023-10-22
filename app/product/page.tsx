'use client'
import { useState, useEffect, useMemo } from 'react';
import products from '@info/products';
import Image, { StaticImageData } from 'next/image';

export default function Product() {
	const valores = window.location.search;
	const urlParams = useMemo(() => new URLSearchParams(valores), [valores]);
	const [product, setProduct] = useState(products[0]);
	const [selectedImage, setSelectedImage] = useState(product?.img[0]);
	const [compareHeight, setCompareHeight] = useState(false);
	const [showMore, setShowMore] = useState(true);
	const [loaded, setLoaded] = useState(false);
	useEffect(() => {
		setProduct(products.filter((product : any) => urlParams.get('id') === product.productCode)[0]);
		if(!loaded)
		setSelectedImage(product?.img[0]);
		document.querySelector('#description_container')?.clientHeight! < document.querySelector('#description')?.clientHeight! ? setCompareHeight(true) : setCompareHeight(false);
	} ,[product, urlParams, selectedImage, loaded])
	if (!product) return <div></div>
	return (
		<main id='main_content' className="flex justify-center w-[1700px] max-w-full relative left-[50%] translate-x-[-50%]">
			<div className="w-[1500px] max-w-full flex flex-col items-center px-12 mb-12">
				<section className="flex w-full [&>div]:flex [&>div]:flex-col [&>div]:w-1/2 justify-around mt-12">
					<div className="flex w-[30vw] max-w-[400px] flex-col">
						<div className='w-full h-[30vw] max-h-[400px]'>
							<Image 
							className='h-full w-full object-contain'
								src={selectedImage}
								alt="product"
							/>
						</div>
						<div className='flex w-full h-40'>
							{product.name && product.img.map((img : StaticImageData, index : number) => (
								<div key={index} className='w-1/4 p-2 md:h-24 h-16 cursor-pointer' onClick={() => {setSelectedImage(img); setLoaded(true)}}>
									<Image 
										className='h-full w-full object-contain'
										src={img}
										alt="product"
									/>
								</div>
							))}
						</div>
					</div>
					<div className='justify-between'>
						<div>
							<h1 className='md:text-5xl text-xl font-bold'>{product.name}</h1>
							<div className='flex items-center md:text-xl text-xs md:mt-2 md-1'>
								<span className='text-neutral-500'>Peso unidad: </span>
								<span className='text-neutral-700'>&nbsp;{product.weight}g</span>
							</div>
							<div className='flex items-center md:text-xl text-xs'>
								<span className='text-neutral-700'>{product.packing}</span>
							</div>
						</div>
						<div>
							<div className='flex items-baseline justify-center'>
								<span className='md:text-3xl text-base font-bold'>{product.price}€</span>
								<span className='text-[8px] md:text-sm ml-1 text-neutral-500'>IVA incluido</span>
							</div>
						</div>
						<div className='flex flex-col items-end'>
							<div className='flex items-center md:text-base text-[10px]'>
								<span className='text-neutral-500'>Categoría: </span>
								<span className='text-neutral-700'>&nbsp;{product.genre.map((genre : string, index : number) => (
									<span key={index}>{genre}{index !== product.genre.length - 1 ? ', ' : ''}</span>
								))}</span>
							</div>
							<div className='flex items-center md:text-base text-[10px]'>
								<span className='text-neutral-500'>Código de producto: </span>
								<span className='text-neutral-700'>&nbsp;{product.productCode}</span>
							</div>
						</div>
					</div>
				</section>
				<section className='flex w-full flex-col items-center md:mt-12 mt-1 '>
					<h1 className='font-bold md:text-2xl text-base md:mb-3 mb-1'>Descripción</h1>
					<div id="description_container" className={(showMore && 'overflow-hidden md:max-h-[400px] max-h-[250px]') + ' md:pt-10 pt-3 md:px-5 px-2 relative border-t border-neutral-400'}>
						<div id='description'>
							{product.description.split('\n').map((paragraph : string, index : number) => (
								<p key={index} className='md:text-lg text-[10px] my-1'>{paragraph}</p>
							))}
						</div>
						{compareHeight && 
							<div className={'absolute h-8 ' + (showMore ? 'bottom-0' : 'bottom-[-20px]') + ' w-full bg-transparent-white-gradient flex justify-center items-center'} onClick={() => setShowMore(!showMore)}>
								<span className='cursor-pointer text-sky-600 font-semibold underline hover:text-sky-700 md:text-base text-[10px]'>
									{showMore ? 'Ver más' : 'Ver menos'}
								</span>
							</div>
						}
					</div>
				</section>
			</div>
		</main>
	)
}