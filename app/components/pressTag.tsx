'use client'
import { useState, useEffect } from 'react'
import Image, { StaticImageData } from 'next/image'
import plant from '@img/plant.webp'
import bebasNeue from '../fonts/bebasNeue';

export default function PressTags(props : {title: string, description: string, index: number, img: StaticImageData, imgFooter: string, alt: string}) {
	const [compareHeight, setCompareHeight] = useState(false);
	const [showMore, setShowMore] = useState(true);
	useEffect(() => {
		document.querySelector('#content_container')?.clientHeight! < (document.querySelector('#content_press_' + props.index)?.clientHeight!) ? setCompareHeight(true) : setCompareHeight(false);
		addEventListener("resize", (event) => {
			document.querySelector('#content_container')?.clientHeight! < (document.querySelector('#content_press_' + props.index)?.clientHeight! + 10) ? setCompareHeight(true) : setCompareHeight(false);
		});
	}, [props.index])
	return (
		<section className={"flex flex-col w-[1200px] max-w-full md:h-[500px] mb-12 md:mt-12 " + (props.index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse')}>
			<div className={'md:w-1/2 w-full md:h-full md:max-h-full flex flex-col p-3 md:p-12 ' + (showMore ? 'max-h-[250px]' : 'h-auto')}>
				<h1 className={'md:text-6xl text-2xl font-bold tracking-wider uppercase ' + bebasNeue.className}>{props.title}</h1>
				<Image 
					className='object-contain md:w-28 md:h-3 w-16 h-2 relative my-2'
					src={plant}
					alt="plant"
				/>
				<div id='content_container' className={'h-full relative ' + (showMore ? 'overflow-hidden' : '')}>
					<span id={'content_press_' + props.index} className='md:text-base flex text-xs'>{props.description}</span>
					{compareHeight && 
						<div className={'absolute h-8 ' + (showMore ? 'bottom-0' : 'bottom-[-20px]') + ' w-full bg-transparent-white-gradient flex justify-center items-center'} onClick={() => setShowMore(!showMore)}>
							<span className='cursor-pointer text-sky-600 font-semibold underline hover:text-sky-700 md:text-base text-[10px]'>
								{showMore ? 'Ver más' : 'Ver menos'}
							</span>
						</div>
					}
				</div>
			</div>
			<div className="md:w-1/2 w-full md:h-full h-[200px] flex flex-col items-center">
				<Image
					className='object-contain w-full h-full relative'
					src={props.img}
					alt={props.alt}
				/>
				<span className='md:text-sm text-xs text-neutral-700'>{props.imgFooter}</span>
			</div>
		</section>
  	)
}