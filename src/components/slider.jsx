import React, { Children, Component } from "react";
import Slider from "react-slick";
import { ReactComponent as NextArrow } from '../svgs/caret-right.svg'
import { ReactComponent as PrevArrow } from '../svgs/caret-left.svg'

function SampleNextArrow(props) {
  const { onClick, classname } = props;
  return (
    <NextArrow onClick={onClick} className={"caret-icon next-arrow " + classname} />
  );
}

function SamplePrevArrow(props) {
  const { onClick, classname } = props;
  return (
      <PrevArrow onClick={onClick} className={'caret-icon prev-arrow ' + classname} style={{ zIndex: '2000' }} />
  );
}

const SimpleSlider = (props) => {
  const settings = {
    slide: 'button',
    className: props.classname || "",
    autoplay: props.autoplay,
    autoplaySpeed: 2500,
    dots: props.dots || true,
    infinite: true,
    speed: 700,
    slidesToShow: props.slidestoshow,
    slidesToScroll: props.slidestoscroll,
    nextArrow: <SampleNextArrow classname={props.nextarrowclass}/>,
    prevArrow: <SamplePrevArrow classname={props.prevarrowclass}/>,
    appendDots: dots => (
      <div
      >
        <ul className={props.ulclass || ''} > {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div
      className={props.dotsclass}

      >

      </div>
    ),
    responsive: props.responsive,
  }

  return (
    <Slider {...settings} >
      {props.children}
    </Slider>
  )
}

export default SimpleSlider