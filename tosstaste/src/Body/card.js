import React from "react";
import { ReactDOM } from "react";
import "./card.css"

const Card = () => {
    return(
        <div className="card">
		<div className="header">
			<div className="image">
				<img src="" className="theImg" alt="foodImeg"/>
			</div>
			<div className="date">
				<span>Distance</span>
			</div>
		</div>
		<div className="info">
			<h3>R name</h3>
            <p>Tags</p>
			<p className="description">Ratings <span id="prize">Prize :</span></p>
		</div>
	</div>

    );
}

export default Card;