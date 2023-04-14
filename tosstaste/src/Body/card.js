import React from "react";
import { ReactDOM } from "react";
import "./card.css"

const Card = (prop) => {
    // console.log(prop.p);
    return(
        <div className="card">
		<div className="header">
			<div className="image">
				<img src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/` + prop.cloudinaryImageId} className="theImg" alt="foodImeg"/>
			</div>
			<div className="date">
				<span>Distance</span>
			</div>
		</div>
		<div className="info">
			<h3>{prop.prop.name}</h3>
            <p>Tags</p>
			<p className="description">Ratings <span id="prize">Prize :</span></p>
		</div>
	</div>

    );
}

export default Card;