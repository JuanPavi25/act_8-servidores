import React from "react";

function Card({ title, content, image }) {
    return (
        <div className="card">
            <h3>{title}</h3>
            {image && <img src={image} alt={title} />}
            <p>{content}</p>
        </div>
    );
}

export default Card;