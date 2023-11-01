'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image';
import "../css/Carrousel.css";
import CarrouselCard from './CarrouselCard';
import Arrow from '@img/arrow.png';
import tri1 from '@img/press/tri1.webp'
import tri2 from '@img/press/tri2.webp'
import tri3 from '@img/press/tri3.webp'
import tri4 from '@img/press/tri4.webp'
import tri5 from '@img/press/tri5.webp'


export default function Carrousel() {
		const [arrowActive, setArrowActive] = useState(false);
		const [reload, setReload] = useState(false);
		const dragCarrousel = (event : any) => {
			//make carrousel dragable
			let carrousel = document.getElementsByClassName('carrousel-card-container')[0];
			let carrouselSize = document.getElementsByClassName('carrouselCard-container').length;
			let firstCard = document.getElementsByClassName('carrouselCard-container')[0];
			let lastCard = document.getElementsByClassName('carrouselCard-container')[carrouselSize - 1];
			let x = event.clientX;
			let y = event.clientY;
			console.log(x, y);
			carrousel.classList.add('carrousel-drag');
			carrousel.addEventListener('mousemove', (event : any) => {
				let x2 = event.clientX;
				let y2 = event.clientY;
				let xDiff = x2 - x;
				let yDiff = y2 - y;
				if(Math.abs(xDiff) > Math.abs(yDiff)){
					// carrousel.setAttribute('style', 'left: ' + xDiff + 'px !important;')
					carrousel.style.left = xDiff + 'px';
				}
			})
			carrousel.addEventListener('mouseup', () => {
				if(parseInt(carrousel.style.left) > 100){
					prevCarrousel();
				}
				else if(parseInt(carrousel.style.left) < -100){
					nextCarrousel();
				}
				else{
					carrousel.style.left = 0 + 'px';
				}
				carrousel.classList.remove('carrousel-drag');
			})
		}
		const nextCarrousel = () => {
			if(arrowActive) return;
			else{
				let carrousel = document.getElementsByClassName('carrousel-card-container')[0];
				let carrouselSize = document.getElementsByClassName('carrouselCard-container').length;
				let firstCard = document.getElementsByClassName('carrouselCard-container')[0];
				let lastCard = document.getElementsByClassName('carrouselCard-container')[carrouselSize - 1];
				carrousel.classList.add('carrousel-transition1');
				setArrowActive(true);
				setTimeout(() => {
					if(carrousel.classList.contains('carrousel-transition1')){
						carrousel.classList.remove('carrousel-transition1');
						carrousel.insertAdjacentElement('beforeend', firstCard);
						setArrowActive(false);
					}
				}, 500);
			}
		}
		const prevCarrousel = () => {
			if(arrowActive) return;
			else{
				let carrousel = document.getElementsByClassName('carrousel-card-container')[0];
				let carrouselSize = document.getElementsByClassName('carrouselCard-container').length;
				let firstCard = document.getElementsByClassName('carrouselCard-container')[0];
				let lastCard = document.getElementsByClassName('carrouselCard-container')[carrouselSize - 1];
				carrousel.insertBefore(lastCard, firstCard);
				carrousel.classList.add('carrousel-transition2');
				setArrowActive(true);
				setTimeout(() => {
					if(carrousel.classList.contains('carrousel-transition2')){
						carrousel.classList.remove('carrousel-transition2');
						setArrowActive(false);
					}
				}, 500);
			}
		}
		return(
			<div>
				<div className='carrousel-container'>
					<div className='carrousel-arrow hidden md:flex' style={{transform: "rotate(90deg)"}}>
						<div onClick={() => prevCarrousel()} className='carrousel-arrow-container'>
							<Image
								src={Arrow}
								width={30}
								height={30}
								alt="backArrow"
							/>
						</div>
					</div>
					<div className='carrousel-items'>
						<div className='carrousel-card-container' onDragStart={(e) => dragCarrousel(e)}>
							{/* <CarrouselCard className='carrousel-card' /> */}
							<CarrouselCard
								img={tri1}
							/>
							<CarrouselCard
								img={tri2}
							/>
							<CarrouselCard
								img={tri3}
							/>
							<CarrouselCard
								img={tri4}
							/>
							<CarrouselCard
								img={tri5}
							/>
						</div>
					</div>
					<div className='carrousel-arrow hidden md:flex' style={{transform: "rotate(-90deg)"}}>
						<div onClick={() => nextCarrousel()} className='carrousel-arrow-container'>
							<Image
								src={Arrow}
								width={30}
								height={30}
								alt="backArrow"
							/>
						</div>
					</div>
				</div>
			</div>
		)
}