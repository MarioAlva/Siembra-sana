import { StaticImageData } from "next/image";
import Image from "next/image";
import "../css/CarrouselCard.css";

export default function CarrouselCard (props : {img: StaticImageData}) {
		return(
			<div className='carrouselCard-container'>
				<div className='carrouselCard-image'>
					<Image 
					className=" object-contain"
						src={props.img}
						alt="carrouselCard"
						draggable={false}
					/>
				</div>
			</div>
		)
}