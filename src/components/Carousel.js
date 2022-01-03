import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";
import './Carousel.css'

export default function ImageCarousel({ images }) {
  const carousel = useRef();
  const settings = {
    infinite: true,
    dots: true,
    slidesToShow: 1,
    arrows: true,
    slidesToScroll: 1,
    fade: true,
    autoplay : true,
    speed : 500,
    autoplaySpeed: 700,
    cssEase: 'linear',
    centerMode : true,
    className : 'carrousel',
    useCSS: true,
  };
  return (
    <div>
      <Slider {...settings} ref={carousel}>
        {images.map((item) => (
          <div key={item.id}>
            <img src={item.src} alt={item.alt} />
          </div>
        ))}
      </Slider>
    </div>
  );
}
