import React, { useState } from "react";
import { CarouselItem } from "./CarouselItem.jsx";





export const Carousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const items = [
    {
        title: "Empresa/Cliente",
        titles:"Testimonio",
        description:
        "Baseball is a bat-and-ball sport played between two teams of nine players each, taking turns batting and fielding. The game occurs over the course of several plays, with each play generally beginning when a player on the fielding team, called the pitcher.",
        
    },
    {
        title: "Empresa/Cliente",
        titles:"Testimonio",
        description:
        "Walking (also known as ambulation) is one of the main gaits of terrestrial locomotion among legged animals. Walking is typically slower than running and other gaits. ",
        
    },
    {
        title: "Empresa/Cliente",
        titles:"Testimonio",
        description:
        "Weightlifting generally refers to activities in which people lift weights, often in the form of dumbbells or barbells. People lift various kinds of weights for a variety of different reasons.",
    },
    ];
    const updateIndex = (newIndex) => {
    if (newIndex < 0) {
        newIndex = 0;
    } else if (newIndex >= items.length) {
        newIndex = items.length - 1;
    }

    setActiveIndex(newIndex);
    };
    return (
        
    <div className="carousel">
        <div
        className="inner"
        style={{ transform: `translate(-${activeIndex * 100}%)`
        }}
        >
        {items.map((item) => {
            return <CarouselItem item={item} width={"100%"} />;
        })}
        </div>

        <div className="carousel-buttons">
        <button
            className="button-arrow"
            onClick={() => {
            updateIndex(activeIndex - 1);
            }}
        >
        </button>
        <div className="indicators">
            {items.map((item, index) => {
            return (
                <button
                className="indicator-buttons"
                onClick={() => {
                    updateIndex(index);
                }}
                >
                <span
                    className={`material-symbols-outlined ${
                    index === activeIndex
                        ? "indicator-symbol-active"
                        : "indicator-symbol"
                    }`}
                >
                    radio_button_unchecked
                </span>
                </button>
            );
            })}
        </div>
        <button
            className="button-arrow"
            onClick={() => {
            updateIndex(activeIndex + 1);
            }}
        >
        </button>
        </div>
    </div>
    );
};