'use client'
import { useState, useEffect } from 'react'
import Image, { StaticImageData } from 'next/image'

export default function PressSection(props : {img: StaticImageData[], index: number}) {
	const [actualPage, setActualPage] = useState(0);
	const nextCarrousel = (number : number) => {
		if(actualPage >= props.img.length - 2 && number === 1) return;
		else if(actualPage >= props.img.length - 1 && number === 2) return;
		else{
			const translateX = (actualPage + 1) * -50 * number;
			let carrousel = document.getElementsByClassName('carrouselContainer' + props.index)[0];
			carrousel.setAttribute('style', 'transform: translateX(' + translateX + '%);');
			setActualPage(actualPage + 1);

		}
	}
	const prevCarrousel = (number : number) => {
		if(actualPage <= 0) return;
		else{
			const translateX = (actualPage - 1) * -50 * number;
			let carrousel = document.getElementsByClassName('carrouselContainer' + props.index)[0];
			carrousel.setAttribute('style', 'transform: translateX(' + translateX + '%);');
			setActualPage(actualPage - 1);
		}
	}
	return(
		<div className='overflow-hidden h-full'>
			<div className={'flex w-full h-full relative ' + (props.img.length === 1 && "justify-center")}>
				{props.img.length > 1 && (
					<div className={(props.img.length === 2 && "md:hidden") + ' z-10 left-0 absolute h-full w-12 bg-neutral-900/25 hover:bg-neutral-900/75 cursor-pointer transition-colors'}>
						<div onClick={() => prevCarrousel(1)} className='hidden md:flex items-center justify-center w-full h-full'><div className='w-4 h-4 rotate-45 border-b-2 border-l-2 border-white'></div></div>
						<div onClick={() => prevCarrousel(2)} className='md:hidden flex items-center justify-center w-full h-full'><div className='w-4 h-4 rotate-45 border-b-2 border-l-2 border-white'></div></div>
					</div>
				)}
				<div className={'carrouselContainer' + props.index + ' transition-transform w-full h-full flex'}>
				{props.img.map((page : any, index : number) => (
					<div key={index} className='carrousel md:min-w-[50%] md:w-[50%] min-w-[100%] h-full flex flex-col items-center'>
						<div className='w-full h-full flex items-center'>
							<Image 
								src={page.img}
								alt={page.description}
								className='object-contain'
							/>
						</div>
						<p className='text-sm text-neutral-700 my-2'>{page.description}</p>
					</div>
				))}
				</div>
				{props.img.length > 1 && (
					<div className={(props.img.length === 2 && "md:hidden") + ' z-10 right-0 absolute h-full w-12 bg-neutral-900/25 hover:bg-neutral-900/75 cursor-pointer transition-colors'}>
						<div onClick={() => nextCarrousel(1)} className='md:flex hidden items-center justify-center w-full h-full'><div className='w-4 h-4 rotate-45 border-t-2 border-r-2 border-white'></div></div>
						<div onClick={() => nextCarrousel(2)} className='flex md:hidden items-center justify-center w-full h-full'><div className='w-4 h-4 rotate-45 border-t-2 border-r-2 border-white'></div></div>
					</div>
				)}
			</div>
		</div>
	)
}