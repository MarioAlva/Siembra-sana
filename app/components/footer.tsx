import Image from "next/image"
import Link from "next/link"
import logoWhite from "@img/logoWhite.png"
import facebook from "@img/facebook.png"
import instagram from "@img/instagram.png"
import email from "@img/email.png"
import worldwide from "@img/worldWide.png"

export default function Footer(){
	return (
		<footer className='bg-plant-image w-full bg-cover md:h-[470px] h-auto bg-no-repeat relative flex justify-center pt-24 pb-12 md:mt-24 mt-3  
			before:contents-[""] before:w-full before:h-full before:absolute before:bg-black/80 before:z-[1] before:top-0 before:left-0'>
				<div className=" bg-white-top w-full absolute top-0 left-0 h-11 z-10"></div>
				<div className="w-[1400px] max-w-full px-5 flex md:flex-row flex-col [&>div]:flex [&>div]:flex-col z-10 justify-between">
					<div className="md:w-[300px] w-full mr-40 items-center md:items-start">
						<Image 
							src={logoWhite}
							alt="logo"
							fill={false}
							className='w-52'
						/>
						<p className= "text-neutral-400 font-semibold text-sm leading-6 my-3 text-center md:text-left">Elige una vida saludable con Siembra sana, aqui encontrarás el catálogo de alimentos orgánicos y naturales, suplementos y productos ecológicos. Envia un email solicitando el producto que quieras</p>
						<div className="flex [&>a]:mx-3">
							<Link href="https://www.facebook.com/SiembraSana.es/" target="_BLANK" className="w-10 h-10 flex justify-center items-center rounded-full bg-neutral-800 hover:bg-green-600 transition-colors">
								<Image 
									src={facebook}
									alt="facebook"
									fill={false}
									className='w-5'
								/>
							</Link>
							<Link href="https://www.instagram.com/siembrasana.bio/" target="_BLANK" className="w-10 h-10 flex justify-center items-center rounded-full bg-neutral-800 hover:bg-green-600 transition-colors">
								<Image 
									src={instagram}
									alt="instagram"
									fill={false}
									className='w-5'
								/>
							</Link>
						</div>
					</div>
					<div className="md:w-[20%] w-full items-center md:items-start">
						<h3 className="text-white font-bold uppercase md:h-20 h-8 mt-10 md:mt-0 flex items-center">SOBRE NOSOTROS</h3>
						<ul className="[&>li]:my-4">
							<li className="text-white text-sm hover:text-green-600 transition-colors text-center md:text-left"><Link href="/about">Acerca de la compañía</Link></li>
							<li className="text-white text-sm hover:text-green-600 transition-colors text-center md:text-left"><Link href="/catalogue">Productos</Link></li>
						</ul>
					</div>
					<div className="md:w-[20%] w-full items-center md:items-start">
						<h3 className="text-white font-bold uppercase md:h-20 h-8 mt-10 md:mt-0 0 flex items-center text-center md:text-left">ENLACES DE INTERÉS</h3>
						<ul className="[&>li]:my-4">
							<li className="text-white text-sm hover:text-green-600 transition-colors text-center md:text-left"><Link href="/catalogue">Catálogo</Link></li>
							<li className="text-white text-sm hover:text-green-600 transition-colors text-center md:text-left"><Link href="/about">FAQs</Link></li>
							<li className="text-white text-sm hover:text-green-600 transition-colors text-center md:text-left"><Link href="/contact">Contacto</Link></li>
						</ul>
					</div>
					<div className="md:w-[20%] w-full items-center md:items-start">
						<h3 className="text-white font-bold uppercase md:h-20 h-8 mt-10 md:mt-0 flex items-center">CONTACTOS</h3>
						<ul className="[&>li]:my-4">
							<li className="text-white text-sm transition-colors  text-center md:text-left">
								<a href="mailto:comercial@siembrasana.bio">
									<Image 
										src={email}
										alt="email"
										fill={false}
										className='w-5 inline-block mr-2'
									/>
									<span>comercial@siembrasana.bio</span>
								</a>
							</li>
							<li className="text-white text-sm transition-colors">
								<Image 
									src={worldwide}
									alt="worldwide"
									fill={false}
									className='w-5 inline-block mr-2'
								/>
								<span>www.siembrasana.bio</span>
							</li>
						</ul>
						<p className="text-sm text-neutral-300 mt-2 mb-28 md:mb-0">Barcelona, España</p>
					</div>
				</div>
				<div className="px-5 absolute bottom-0 w-full h-16 bg-black flex justify-center items-center z-10 border-t border-neutral-800">
					<div className="w-[1400px] max-w-full flex justify-around items-center flex-col-reverse md:flex-row">
						<p className="text-neutral-300 md:text-sm text-xs my-3">© 2024 Siembra Sana. Todos los derechos reservados.</p>
					</div>
				</div>
		</footer>
	)
}