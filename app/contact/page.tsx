export default function Contact() {
	return (
		<div className="flex justify-center">
			<main id='main_content' className="flex justify-center w-[1700px] max-w-full relative">
				<div className="flex flex-col items-center w-[1700px] max-w-full relative">
					<section className="flex justify-center w-full">
						Si tiene cualquier duda contactenos
					</section>
					<section className="flex justify-center w-full">
						<form action="contact" className="flex flex-col w-[1200px] max-w-full px-12 mb-12">
							<label className="text-sm text-neutral-600 mt-2" htmlFor="name">Nombre</label>
							<input className="text-sm w-full py-1 px-2 border border-neutral-600 focus:outline-green-600 focus:outline" type="text" name="name" id="name" placeholder="Nombre" />
							<label className="text-sm text-neutral-600 mt-2" htmlFor="email">Email</label>
							<input className="text-sm w-full py-1 px-2 border border-neutral-600 focus:outline-green-600 focus:outline"  type="email" name="email" id="email" placeholder="Email"/>
							<label className="text-sm text-neutral-600 mt-2" htmlFor="message">Mensaje</label>
							<textarea className="text-sm w-full py-1 px-2 border border-neutral-600 focus:outline-green-600 focus:outline" name="message" id="message" cols={30} rows={10} placeholder="Mensaje"></textarea>
							<input className="cursor-pointer font-bold w-full bg-green-600 py-2 mt-4 rounded text-white focus:outline-2 focus:outline-green-800" type="submit" value="Enviar" />
						</form>
					</section>
				</div>
			</main>
		</div>
	)
}