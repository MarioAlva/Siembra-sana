import Image from 'next/image'
import afiche from '@img/press/afiche.webp'
import Carrousel from '@components/Carrousel'
import bebasNeue from '@fonts/bebasNeue'
import press from '@info/press'
import PressSection from '@components/pressSection'
import chiaAfiche from '@img/press/chiaAfiche.webp'

export default function Press() {
	return (
		<main className="w-screen flex justify-center">
			<div className="w-[1400px] max-w-full flex flex-col items-center">
				{press.map((press : any, index : number) => (
					<section key={index} className='flex flex-col items-center mb-12 w-[1000px] max-w-[95%] max-h-[800px]'>
						<h4 className={'text-4xl mb-3 ' + bebasNeue.className}>{press.title}</h4>
						<PressSection
							img={press.pages}
							index={index}
						/>
					</section>
				))}
				<section className='w-[1400px] max-w-full flex flex-col items-center'>
					<span className={'text-4xl tracking-wider ' + bebasNeue.className}>Trípticos</span>
					<Carrousel />
				</section>
				<section className='mb-10 mt-6 flex flex-col items-center'>
					<span className={'mb-7 text-center text-4xl tracking-wider ' + bebasNeue.className}>Chía, la semilla de la vida</span>
					<Image 
						src={chiaAfiche}
						alt="afiche"
						className='w-[95%] h-full object-contain'
					/>
				</section>
				<section className='w-full md:h-[700px] h-auto mt-8 flex flex-col items-center'>
					<span className={'mb-4 text-4xl tracking-wider ' + bebasNeue.className}>Poster</span>
					<Image 
						src={afiche}
						alt="afiche"
						className='w-[95%] h-full object-contain'
					/>
				</section>
			</div>
		</main>
	)
}