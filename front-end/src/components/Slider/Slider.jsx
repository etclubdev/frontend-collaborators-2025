import React, { useState } from "react";
import { Heading } from "../Typography";
import { sliderPrev, sliderNext } from "../../assets/images/vectors";
import "./Slider.css";

export const Slider = ({ data, activeSlide = 0 }) => {
  const [current, setCurrent] = useState(activeSlide);
  const [dragStart, setDragStart] = useState(null);

  const next = () => setCurrent(prev => (prev + 1) % data.length);
  const prev = () => setCurrent(prev => (prev - 1 + data.length) % data.length);

  const handleDragStart = (e) => {
    setDragStart(e.type.includes('mouse') ? e.clientX : e.touches[0].clientX);
  };

  const handleDragEnd = (e) => {
    if (dragStart === null) return;
    const dragEnd = e.type.includes('mouse') ? e.clientX : e.changedTouches[0].clientX;
    const diff = dragEnd - dragStart;
    if (diff > 50) prev();
    else if (diff < -50) next();
    setDragStart(null);
  };

  const getStyles = (index) => {
    if (current === index) return { opacity: 1, transform: "translateX(0px) translateZ(0px) rotateY(0deg)", zIndex: 10 };
    if (current - 1 === index || (current === 0 && index === data.length - 1)) return { opacity: 1, transform: "translateX(-240px) translateZ(-400px) rotateY(35deg)", zIndex: 9 };
    if (current + 1 === index || (current === data.length - 1 && index === 0)) return { opacity: 1, transform: "translateX(240px) translateZ(-400px) rotateY(-35deg)", zIndex: 9 };
    if (current - 2 === index || (current === 1 && index === data.length - 1) || (current === 0 && index === data.length - 2)) return { opacity: 1, transform: "translateX(-480px) translateZ(-500px) rotateY(35deg)", zIndex: 8 };
    if (current + 2 === index || (current === data.length - 2 && index === 0) || (current === data.length - 1 && index === 1)) return { opacity: 1, transform: "translateX(480px) translateZ(-500px) rotateY(-35deg)", zIndex: 8 };
    if (index < current - 2 || (current <= 1 && index > current + 2)) return { opacity: 0, transform: "translateX(-480px) translateZ(-500px) rotateY(35deg)", zIndex: 7 };
    if (index > current + 2 || (current >= data.length - 2 && index < current - 2)) return { opacity: 0, transform: "translateX(480px) translateZ(-500px) rotateY(-35deg)", zIndex: 7 };
  };

  return (
    <div className="slider-section">
      <Heading className="slider-heading" level={1}>GIA NHẬP ĐỘI NGŨ CỦA ET CLUB</Heading>
      <div
        className="sliderWrapper"
        onMouseDown={handleDragStart}
        onMouseUp={handleDragEnd}
        onTouchStart={handleDragStart}
        onTouchEnd={handleDragEnd}
        style={{ cursor: 'grab' }}
      >
        <div className="slideC">
          {data.map((item, i) => (
            <React.Fragment key={`card-${item.id}`}>
              <div
                className="slide"
                style={{
                  background: item.bgColor,
                  boxShadow: `0 5px 20px ${item.bgColor}30`,
                  ...getStyles(i),
                }}
              >
                <SliderContent {...item} />
              </div>
              <div
                className="reflection"
                style={{
                  background: `linear-gradient(to bottom, ${item.bgColor}40, transparent)`,
                  ...getStyles(i),
                }}
              />
            </React.Fragment>
          ))}
        </div>
        <div className="btns">
          <img className="btn" onClick={prev} src={sliderPrev} />
          <img className="btn" onClick={next} src={sliderNext} />
        </div>
      </div>
    </div>
  );
};

const SliderContent = ({ id, department_name, desc, link, image }) => {
  return (
    <div className="sliderContent">
      <div className="slider-modal">
        <b className="modal-name">{department_name.toUpperCase()}</b>
        <p className="desc">{desc}</p>
        <a className="link" href={link}>Tìm hiểu thêm</a>
      </div>
      <div className="name">{department_name.toUpperCase()}</div>
      <img loading="lazy" src={image} alt="" />
    </div>
  );
};
