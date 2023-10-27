'use client'
import { useState, useEffect } from 'react';
import products from '@info/products';
import Image, { StaticImageData } from 'next/image';

export default function Product() {
	const setInitialProduct = () => {
		var valores = "";
		if (typeof window === "undefined") {
			console.log("Oops, `window` is not defined")
		} else {
			valores = window.location.search;
		}
		const urlParams = new URLSearchParams(valores);
		return urlParams.get('id');
	}
	const [product, setProduct] = useState(products.filter((product : any) => setInitialProduct() === product.productCode)[0]);
	const [selectedImage, setSelectedImage] = useState(product?.img[0]);
	const [compareHeight, setCompareHeight] = useState(false);
	const [showMore, setShowMore] = useState(true);
	const [loaded, setLoaded] = useState(false);
	const resizeListener = () => {
		addEventListener("resize", (event) => {
			document.querySelector('#description_container')?.clientHeight! < (document.querySelector('#description')?.clientHeight! + 10) ? setCompareHeight(true) : setCompareHeight(false);
		});
	}
	useEffect(() => {
		setProduct(products.filter((product : any) => setInitialProduct() === product.productCode)[0]);
		if(!loaded)
		setSelectedImage(product?.img[0]);
		resizeListener();
		document.querySelector('#description_container')?.clientHeight! < (document.querySelector('#description')?.clientHeight! + 10) ? setCompareHeight(true) : setCompareHeight(false);
	} ,[product, selectedImage, loaded])
	if (!product) return <main id='main_content' className="flex justify-center w-[1700px] max-w-full relative left-[50%] translate-x-[-50%]">
	<div className="w-[1500px] max-w-full flex flex-col items-center md:px-12 md:mb-12 mb-0 px-4 pb-4 h-[1000px]"></div></main>;
	return (
		<main id='main_content' className="flex justify-center w-[1700px] max-w-full relative left-[50%] translate-x-[-50%]">
			<div className="w-[1500px] max-w-full flex flex-col items-center md:px-12 md:mb-12 mb-0 px-4 pb-4">
				<h1 className='flex sm:hidden text-2xl font-bold -mb-10'>{product.name}</h1>
				<section className="flex w-full [&>div]:flex [&>div]:flex-col [&>div]:w-1/2 justify-around mt-12 h-auto">
					<div className="flex w-[30vw] max-w-[400px] flex-col mr-2">
						<div className='w-full md:h-[30vw] lg:h-[400px] h-[300px] border-2 border-green-600 mb-4 bg-neutral-200'>
							<Image 
							className='h-full w-full object-contain'
								src={selectedImage}
								alt="product"
							/>
						</div>
						<div className='flex w-full h-auto first:[&>div]:mx-0'>
							{product.name && product.img.map((img : StaticImageData, index : number) => (
								<div key={index} className='mx-[2px] sm:mx-2 md:mx-4 p-2 md:h-24 sm:h-16 h-12 md:w-24 sm:w-16 w-12 cursor-pointer border border-green-600 mb-4 bg-neutral-200' onClick={() => {setSelectedImage(img); setLoaded(true)}}>
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
							<h1 className='hidden sm:flex md:text-5xl sm:text-3xl font-bold'>{product.name}</h1>
							<div className='flex items-center md:text-xl sm:text-xs text-[10px] md:mt-2 md-1'>
								<span className='text-neutral-500'>Peso unidad: </span>
								<span className='text-neutral-700'>&nbsp;{product.weight}g</span>
							</div>
							<div className='flex items-center md:text-xl sm:text-xs text-[10px]'>
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
								<span className='text-neutral-500'>Código producto: </span>
								<span className='text-neutral-700'>&nbsp;{product.productCode}</span>
							</div>
						</div>
					</div>
				</section>
				<section className='flex w-full flex-col items-center md:mt-12 mt-5 '>
					<h1 className='font-bold md:text-2xl text-base md:mb-3 mb-1'>Descripción</h1>
					<div id="description_container" className={(showMore && 'overflow-hidden md:max-h-[410px] max-h-[250px]') + ' md:pt-10 pt-3 md:px-5 px-2 relative border-t border-neutral-400'}>
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