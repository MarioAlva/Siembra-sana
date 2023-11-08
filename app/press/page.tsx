import PressTag from '@components/pressTag'
import Image from 'next/image'
import pageLeft from '@img/press/pageLeft.webp'
import pageRight from '@img/press/pageRight.webp'
import pressTag from '@info/press'
import afiche from '@img/press/afiche.webp'
import Carrousel from '@components/Carrousel'
import bebasNeue from '@fonts/bebasNeue'

export default function Press() {
	return (
		<main className="w-screen flex justify-center">
			<div className="w-[1700px] max-w-full flex flex-col items-center">
				<section className="relative flex flex-col w-[1100px] max-w-full mb-12 md:mt-12 md:flex-row justify-center items-center">
					<div className='md:w-1/2 w-full md:h-full flex flex-col'>
						<Image
							className='object-contain w-full h-full relative'
							src={pageLeft}
							alt="veritas"
							priority={true}
						/>
					</div>
					<div className="md:w-1/2 w-full md:h-full flex flex-col">
						<Image
							className='object-contain w-full h-full relative'
							src={pageRight}
							alt="veritas"
							priority={true}
						/>
					</div>
					<span className='absolute bottom-0 md:text-sm text-xs text-neutral-700'>Siembra sana aparece en revista</span>
				</section>
				{pressTag.map((press, index) => (
					<PressTag key={index} title={press.title} description={press.description} index={index} img={press.img} imgFooter={press.imgFooter} alt={press.alt}/>
				))}
				<section className='w-[1400px] max-w-full flex flex-col items-center h-screen md:max-h-[700px] max-h-[400px]'>
					<span className={'my-10 text-2xl md:text-4xl font-bold tracking-wider ' + bebasNeue.className}>Folletos</span>
					<Carrousel />
				</section>
				<section className='w-full md:h-[700px] h-auto md:mt-60 mt-12'>
					<Image 
						src={afiche}
						alt="afiche"
						className='w-full h-full object-contain'
					/>
				</section>
			</div>
		</main>
	)
}