import React from "react";
// import { ReactDOM } from "react";
import "./card.css"

const Card = ({prop}) => {
        // console.log(prop);
	
	
	// const {cloudinaryImageId, } = prop;
	// console.log(cloudinaryImageId,);

    return(
        <div className="card">
		<div className="header">
			<div className="image">
				<img src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/` + prop.cloudinaryImageId} className="theImg" alt="foodImeg"/>
			</div>
			<div className="date">
				<span>{prop.slaString} Away</span>
				<span id="rate">{prop?.avgRating
} &#9733;</span></div>
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