'use client'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../img/logo.png'
import { useState } from 'react'

export default function Header() {
	const [showMenu, setShowMenu] = useState(false)
	return (
		<header className="w-screen h-24 flex justify-center z-50">
			<div className='md:w-[1700px] w-full max-w-full md:px-12 px-5 flex justify-between items-center h-full z-[101]'>
				<Link href="/">
					<Image 
						src={logo}
						width={200}
						alt={'logo'}
						priority={true}
					/>
				</Link>
				<div className='h-full flex items-center'>
					<div className='md:flex hidden justify-end items-center h-full'>
						<ul className='flex [&>li>*]:flex [&>*]:px-5 [&>*]:h-full h-full [&>li>*]:items-center'>
							<li className='hover:bg-neutral-100'>
								<Link href="/" className='w-full h-full'>
									Inicio
								</Link>
							</li>
							<li className='hover:bg-neutral-100'>
								<Link href="/catalogue" className='w-full h-full'>
									Catálogo
								</Link>
							</li>
							<li className='hover:bg-neutral-100'>
								<Link href="/about" className='w-full h-full'>
									Nosotros
								</Link>
							</li>
							<li className='hover:bg-neutral-100'>
								<Link href="/contact" className='w-full h-full'>
									Contacto
								</Link>
							</li>
							<li className='hover:bg-neutral-100'>
								<Link href="/press" className='w-full h-full'>
									Prensa
								</Link>
							</li>
						</ul>
					</div>
					<div className='flex md:hidden w-12 h-12 bg-green-600 rounded-full items-center justify-center z-[110]' onClick={() => setShowMenu(!showMenu)}>
						<div className=' flex-wrap flex w-7 h-7 items-center justify-center'>
							<div className={'border-white rounded border w-3 transition-all ' + (showMenu ? 'h-0 rotate-45 mx-0 -mb-2 -mr-1' : 'h-3 mx-[1px]')}></div>
							<div className={'border-white rounded border w-3 transition-all ' + (showMenu ? 'h-0 -rotate-45 mx-0 -mb-2' : 'h-3 mx-[1px]')}></div>
							<div className={'border-white rounded border w-3 transition-all ' + (showMenu ? 'h-0 -rotate-45 mx-0 -mt-1' : 'h-3 mx-[1px]')}></div>
							<div className={'border-white rounded border w-3 transition-all ' + (showMenu ? 'h-0 rotate-45 mx-0 -mt-1 -ml-1' : 'h-3 mx-[1px]')}></div>
						</div>
					</div>
				</div>
				<div className={'fixed w-screen h-screen top-0 left-0 ' + (showMenu ? 'flex md:hidden' : 'hidden')} onClick={() => setShowMenu(false)}>
				</div>
				<div className={'fixed z-[100] md:-z-[1] h-48 w-screen left-0 bg-white border-b border-neutral-500 shadow-lg transition-all duration-300 ' + (showMenu ? 'top-0' : '-top-full')}>
					<ul className='flex flex-col [&>li>*]:flex [&>li>*]:px-5 [&>*]:h-full h-full [&>li>*]:items-center [&>li>*]:justify-center'>
						<li className='hover:bg-neutral-100 border-b border-neutral-500'>
							<Link href="/" className='w-full h-full'>
								Inicio
							</Link>
						</li>
						<li className='hover:bg-neutral-100 border-b border-neutral-500'>
							<Link href="/catalogue" className='w-full h-full'>
								Catálogo
							</Link>
						</li>
						<li className='hover:bg-neutral-100 border-b border-neutral-500'>
							<Link href="/about" className='w-full h-full'>
								Nosotros
							</Link>
						</li>
						<li className='hover:bg-neutral-100 border-b border-neutral-500'>
							<Link href="/contact" className='w-full h-full'>
								Contacto
							</Link>
						</li>
						<li className='hover:bg-neutral-100 border-b border-neutral-500'>
							<Link href="/press" className='w-full h-full'>
								Prensa
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</header>
	)
}