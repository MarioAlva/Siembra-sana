import landingImage from '@img/banner_round_bg.png'
import homeImg from '@img/home-img.png'
import homeMaca from '@img/homeMaca.png'
import baby from '@img/baby.png'
import brain from '@img/brain.png'
import science from '@img/science.png'
import health from '@img/health.png'
import Image from 'next/image'
import Link from 'next/link'

export default function Page() {
  return (
	<main className="flex justify-center">
    	<div className="w-[1700px] max-w-full relative flex flex-col items-center">
			<section className="w-full flex flex-col items-center">
				<h3 className="uppercase text-xs md:text-xl font-bold text-amber-500 tracking-widest">.. hazlo por ti ..</h3>
				<h1 className="uppercase text-center text-neutral-800 mt-2 mb-10 text-4xl leading-10 w-[350px] md:text-[80px] md:w-[710px] md:leading-[5.5rem] font-bebasNeue">EL BIENESTAR COMIENZA CON UNA BUENA ALIMENTACIÓN</h1>
				<div className='max-w-full flex justify-center relative'>
					<div className='absolute top-0'>
						<Link href="/catalogue">
						<button className='[&>div]:hover:h-[150%] [&>div]:hover:-bottom-3  overflow-hidden flex justify-center relative text-white font-extrabold bg-amber-500 px-12 py-5 rounded-full border-white border-4 -translate-y-1/2'>
							Ir al catálogo
							<div className='absolute -bottom-full w-[150%] h-0 rounded-[50%] bg-green-600 -z-10 transition-all duration-500'></div>
						</button>
						</Link>
					</div>
					<div className='w-[1124px] flex justify-center'>
						<Image 
							src={landingImage}
							alt="landing image"
							fill={false}
							className='overflow-hidden object-cover h-first-landing-section md:h-[559px] w-auto'
						/>
						<Image
							src={homeImg}
							alt="home image"
							fill={false}
							className='absolute top-0 md:h-[559px] h-[40vh] w-auto'
						/>
						<div className='w-full flex justify-center h-24 items-center my-12 md:hidden absolute bottom-2'>
							<div className='h-full flex justify-center relative 
											before:contents-[""] before:bg-contain before:-top-[60px] before:h-24 before:w-60 before:absolute before:bg-logo 
											after:contents-[""] after:bg-contain after:-bottom-[30px] after:h-24 after:w-[200px] after:absolute after:bg-healthyMe'>
								<span className='font-bold text-xl text-green-700'>X</span>
							</div>
						</div>
					</div>
				</div>
			</section>
			<div className='w-full hidden justify-center h-24 items-center my-12 md:flex'>
				<div className='h-full flex items-center relative 
								before:contents-[""] before:bg-contain before:top-0 before:h-24 before:w-60 before:absolute before:bg-logo before:-left-64 
								after:contents-[""] after:bg-contain after:top-0 after:h-24 after:w-[200px] after:absolute after:bg-healthyMe after:-right-[220px]'>
					<span className='font-bold text-3xl text-green-600'>X</span>
				</div>
			</div>
			<section className='w-full max-w-full flex flex-col items-center'>
				<h1 className=' font-bebasNeue md:text-6xl text-5xl mb-12 mt-10'>maca royale</h1>
				<div className='w-full bg-greenBg md:h-[704px] h-auto relative flex item-center justify-around 
					before:bg-green-bottom before:contents-[""] before:absolute before:w-full before:bg-cover before:-bottom-11 before:h-12 before:bg-repeat-x 
					after:bg-green-top after:contents-[""] after:absolute after:w-full after:bg-cover after:-top-11 after:h-12 after:bg-repeat-x'>
						<div className='flex justify-around md:w-[700px] w-full flex-wrap my-12 px-7 md:px-0 [&>div]:my-4'>
							<div className='flex flex-col md:w-64 w-full z-10'>
								<Image 
									src={baby}
									alt="home image"
									height={50}
								/>
								<h5 className='mt-4 font-bold uppercase text-white text-xl'>MEJORA EN LA FERTILIDAD Y LA LIBIDO</h5>
								<p className='text-white text-justify mt-2'>La maca se ha utilizado tradicionalmente para mejorar la fertilidad y la libido en ambos sexos.</p>
							</div>
							<div className='flex flex-col md:w-64 w-full z-10'>
								<Image 
									src={brain}
									alt="home image"
									height={50}
								/>
								<h5 className='mt-4 font-bold uppercase text-white text-xl'>MEJORA EN LA FUNCIÓN COGNITIVA</h5>
								<p className='text-white text-justify mt-2'>Algunos estudios han sugerido que la maca puede mejorar la memoria y la capacidad de aprendizaje en personas mayores.</p>
							</div>
							<div className='flex flex-col md:w-64 w-full z-10'>
								<Image 
									src={science}
									alt="home image"
									height={50}
								/>
								<h5 className='mt-4 font-bold uppercase text-white text-xl'>EFECTOS SOBRE EL SISTEMA ENDOCRINO</h5>
								<p className='text-white text-justify mt-2'>La maca se ha encontrado que puede ayudar a equilibrar los niveles hormonales, especialmente en las mujeres durante la menopausia y la menstruación.</p>
							</div>
							<div className='flex flex-col md:w-64 w-full z-10'>
								<Image 
									src={health}
									alt="home image"
									height={50}
								/>
								<h5 className='mt-4 font-bold uppercase text-white text-xl'>PROPIEDADES ANTIINFLAMATORIAS Y ANTIOXIDANTES</h5>
								<p className='text-white text-justify mt-2'>La maca contiene antioxidantes y compuestos antiinflamatorios, lo que podría ayudar a proteger el cuerpo contra el daño celular y mejorar la salud en general.</p>
							</div>
						</div>
						<div className='flex items-center justify-center w-full h-full md:w-auto lg:relative absolute'>
							<Image 
								src={homeMaca}
								alt="home image"
								className=' opacity-40 lg:opacity-100'
							/>
						</div>
				</div>
			</section>
		</div>
	</main>
  )
}
