import landingImage from '@img/banner_round_bg.webp'
import homeImg from '@img/home-img.webp'
import Image from 'next/image'
import Link from 'next/link'
import bebasNeue from '@fonts/bebasNeue'

export default function Page() {
  return (
	<main className="flex justify-center">
    	<div className="w-[1700px] max-w-full relative flex flex-col items-center">
			<section className="w-full flex flex-col items-center">
				<h3 className="uppercase text-xs md:text-xl font-bold text-amber-500 tracking-widest">.. hazlo por ti ..</h3>
				<h1 className={"uppercase text-center text-neutral-800 mt-2 mb-10 text-4xl leading-10 w-[350px] md:text-[80px] md:w-[710px] md:leading-[5.5rem] " + bebasNeue.className}>EL BIENESTAR COMIENZA CON UNA BUENA ALIMENTACIÓN</h1>
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
							className='absolute top-0 md:h-[409px] md:mt-16 h-[30vh] mt-10 w-auto'
						/>
						<div className='w-full flex justify-center h-24 items-center my-12 md:hidden absolute bottom-2'>
							<div className='h-full flex justify-center relative 
											before:contents-[""] before:bg-contain before:-top-[60px] before:h-24 before:w-60 before:absolute before:bg-logo 
											after:contents-[""] after:bg-contain after:-bottom-[30px] after:h-24 after:w-[200px] after:absolute after:bg-healthyMe'>
							</div>
						</div>
					</div>
				</div>
			</section>
			<div className='w-full hidden justify-center h-24 items-center my-12 md:flex'>
				<div className='h-full flex items-center relative 
								before:contents-[""] before:bg-contain before:top-0 before:h-24 before:w-60 before:absolute before:bg-logo before:-left-64 
								after:contents-[""] after:bg-contain after:top-0 after:h-24 after:w-[200px] after:absolute after:bg-healthyMe after:-right-[220px]'>
				</div>
			</div>
		</div>
	</main>
  )
}
