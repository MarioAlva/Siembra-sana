'use client'
import { useState } from 'react'

export default function Faq(props : {title: string, description: string}) {
	const [open, setOpen] = useState(false)
	return (
		<div className='flex flex-col items-center'>
			<section className='flex w-full flex-col items-center'>
				<div className={(open && "shadow-inner") + "  border-t border-b border-green-800 shadow-black/50 w-full h-12 bg-green-600 flex justify-center cursor-pointer [&>div>h2]:hover:text-amber-400"} onClick={() => setOpen(!open)}>
					<div className="w-[1200px] max-w-full px-12 flex items-center">
						<div className="w-9 h-9 bg-green-500 rounded-full flex justify-center items-center mr-2">
							<div className={"w-2 h-2 border-t-2 border-r-2 border-green-600 transition-transform " + (open ? "rotate-[135deg]" : "rotate-45")}></div>
						</div>
						<h2 className="text-white font-bold md:text-xl text-base transition-colors">{props.title}</h2>
					</div>
				</div>
				<div className={(!open ? 'h-0' : 'h-auto') + ' w-[1200px] max-w-full text-justify px-3 md:px-12 overflow-hidden transition-transform my-3'}>
					{props.description.split('\n').map((paragraph, index) => (
						<p key={index} className=" text-neutral-600 text-base font-bold">{paragraph}</p>
					))}
				</div>
			</section>
		</div>
  	)
}