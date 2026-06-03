import { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

import "./Carousel.css";

type CarouselItem = {
  src: string;
  alt: string;
  type?: string;
};

export const Carousel : React.FC<{ data: CarouselItem[] }> = ({ data }) => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };

  return (
    <div className="carousel">
      <BsArrowLeftCircleFill onClick={prevSlide} className="arrow arrow-left" />
      {data.map((item, idx) => {
        const isActive = slide === idx;
        const slideClass = isActive ? "slide slide-active" : "slide slide-hidden";
        
        return (
          <div
            key={idx}
            className={slideClass}
          >
            {item.type === "video" ? (
              <iframe
                src={item.src}
                title={item.alt}
                className="slide-video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            ) : (
              <img
                src={item.src}
                alt={item.alt}
                className="slide-img"
              />
            )}
          </div>
        );
      })}
      <BsArrowRightCircleFill
        onClick={nextSlide}
        className="arrow arrow-right"
      />
      <span className="indicators">
        {data.map((_, idx) => {
          return (
            <button
              key={idx}
              className={
                slide === idx ? "indicator" : "indicator indicator-inactive"
              }
              onClick={() => setSlide(idx)}
            ></button>
          );
        })}
      </span>
    </div>
  );
};