import React from "react";

export const CarouselItem = ({ item, width }) => {
    return (
        <div className="carousel-item" style={{ width: width }}>
            <div className="carousel-item-title">
                <h3>{item.title}</h3>
            </div>
            <div className="carousel-item-text">
                <h3>{item.titles}</h3>
                <p>{item.description}</p>
            </div>
        </div>
);
};