import React from "react";
// import { ReactDOM } from "react";
import "./card.css"
import { Cloud_Img } from "../utils/glob";


const Card = ({prop}) => {
        // console.log(prop);
	
	
	

    return(
        <div className="card">
		<div className="header">
			<div className="image">
				<img src={Cloud_Img + prop.cloudinaryImageId} className="theImg" alt="foodImeg"/>
			</div>
			<div className="date">
				<span>{prop.slaString} Away</span>
				<span id="rate">&#9733;{prop?.avgRating
} </span></div>
		</div>
		<div className="info">
			<h3>{prop.name}</h3>
			<p className="description">{prop.cuisines.join(",")}</p>
			<p className="description"><span id="aria">{prop?.lastMileTravelString}</span><span id="prize">{prop.costForTwoString}</span></p>
		</div>
	</div>

    );
}

export default Card;