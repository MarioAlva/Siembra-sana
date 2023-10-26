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
					/>
				</Link>
				<div className='h-full flex items-center'>
					<div className='md:flex hidden justify-end items-center h-full'>
						<ul className='flex [&>*]:flex [&>*]:px-5 [&>*]:h-full h-full [&>*]:items-center'>
							<Link href="/" className='hover:bg-neutral-100'>
								<li>Inicio</li>
							</Link>
							<Link href="/catalogue" className='hover:bg-neutral-100'>
								<li>Catálogo</li>
							</Link>
							<Link href="/about" className='hover:bg-neutral-100'>
								<li>Nosotros</li>
							</Link>
							<Link href="/contact" className='hover:bg-neutral-100'>
								<li>Contacto</li>
							</Link>
							<Link href="/" className='hover:bg-neutral-100'>
								<li>Prensa</li>
							</Link>
						</ul>
					</div>
					<div className='flex md:hidden w-16 h-16 bg-green-600 rounded-full items-center justify-center z-[110]' onClick={() => setShowMenu(!showMenu)}>
						<div className=' flex-wrap flex w-9 h-9 items-center justify-center [&>*]:mx-[1px]'>
							<div className='border-white rounded-md border-2 w-4 h-4'></div>
							<div className='border-white rounded-md border-2 w-4 h-4'></div>
							<div className='border-white rounded-md border-2 w-4 h-4'></div>
							<div className='border-white rounded-md border-2 w-4 h-4'></div>
						</div>
					</div>
				</div>
				<div className={'fixed w-full h-full top-0 left-0 ' + (showMenu ? 'flex md:hidden' : 'hidden')} onClick={() => setShowMenu(false)}>
				</div>
				<div className={'fixed z-[100] md:-z-[1] h-48 w-full left-0 bg-white border-b border-neutral-500 shadow-lg transition-all duration-300 ' + (showMenu ? 'top-0' : '-top-full')}>
					<ul className='flex flex-col [&>*]:flex [&>*]:px-5 [&>*]:h-full h-full [&>*]:items-center [&>*]:justify-center'>
						<Link href="/" className='hover:bg-neutral-100 border-b border-neutral-500' onClick={() => setShowMenu(false)}>
							<li>Inicio</li>
						</Link>
						<Link href="/catalogue" className='hover:bg-neutral-100 border-b border-neutral-500' onClick={() => setShowMenu(false)}>
							<li>Catálogo</li>
						</Link>
						<Link href="/about" className='hover:bg-neutral-100 border-b border-neutral-500' onClick={() => setShowMenu(false)}>
							<li>Nosotros</li>
						</Link>
						<Link href="/contact" className='hover:bg-neutral-100 border-b border-neutral-500' onClick={() => setShowMenu(false)}>
							<li>Contacto</li>
						</Link>
						<Link href="/" className='hover:bg-neutral-100 border-b border-neutral-500' onClick={() => setShowMenu(false)}>
							<li>Prensa</li>
						</Link>
					</ul>
				</div>
			</div>
		</header>
	)
}