import Faq from '@components/faq'
import faqs from '@info/faqs'

export default function About() {
  return (
	<main className="flex justify-center md:w-auto w-screen">
		<div id='main_content' className="flex flex-col items-center w-[1700px] max-w-full relative">
			<section>
				A continuación, os mostramos una lista de preguntas frecuentes que nos hacen nuestros clientes. Si no encuentras la respuesta a tu pregunta, no dudes en contactarnos.
			</section>
			<section className="flex w-full flex-col">
				{faqs.map((faq, index) => (
					<Faq key={index} title={faq.question} description={faq.answer} />
				))}
			</section>
		</div>
	</main>
  )
}