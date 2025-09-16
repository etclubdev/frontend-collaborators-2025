import React, { useState } from "react";
import { Heading } from "../Typography";
import { sliderPrev, sliderNext } from "../../assets/images/vectors";
import "./Slider.css";
import { images } from "../../mocks/images/department";

export const Slider = ({ data, activeSlide = 0 }) => {
  const [current, setCurrent] = useState(activeSlide);

  const next = () => setCurrent(prev => Math.min(prev + 1, data.length - 1));
  const prev = () => setCurrent(prev => Math.max(prev - 1, 0));

  const getStyles = (index) => {
    if (current === index) return { opacity: 1, transform: "translateX(0px) translateZ(0px) rotateY(0deg)", zIndex: 10 };
    if (current - 1 === index) return { opacity: 1, transform: "translateX(-240px) translateZ(-400px) rotateY(35deg)", zIndex: 9 };
    if (current + 1 === index) return { opacity: 1, transform: "translateX(240px) translateZ(-400px) rotateY(-35deg)", zIndex: 9 };
    if (current - 2 === index) return { opacity: 1, transform: "translateX(-480px) translateZ(-500px) rotateY(35deg)", zIndex: 8 };
    if (current + 2 === index) return { opacity: 1, transform: "translateX(480px) translateZ(-500px) rotateY(-35deg)", zIndex: 8 };
    if (index < current - 2) return { opacity: 0, transform: "translateX(-480px) translateZ(-500px) rotateY(35deg)", zIndex: 7 };
    if (index > current + 2) return { opacity: 0, transform: "translateX(480px) translateZ(-500px) rotateY(-35deg)", zIndex: 7 };
  };

  return (
    <div className="slider-section">
      <Heading className="slider-heading" level={1}>GIA NHẬP ĐỘI NGŨ CỦA ET CLUB</Heading>
      <div className="sliderWrapper">
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

const SliderContent = ({ id, department_name, desc, link, icon, title }) => {
  return (
    <div className="sliderContent">
      <div className="slider-modal">
        <b className="modal-name">{department_name.toUpperCase()}</b>
        <p className="desc">{desc}</p>
        <a className="link" href={link}>Tìm hiểu thêm</a>
      </div>
      <div className="name">{department_name.toUpperCase()}</div>
      <img src={images[id]} alt="" />
    </div>
  );
}
