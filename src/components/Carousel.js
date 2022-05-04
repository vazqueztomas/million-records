import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";
import '../assets/css/Carousel.css'

export default function ImageCarousel({ images }) {
  const carousel = useRef();
  const settings = {
    infinite: true,
    dots: true,
    slidesToShow: 3,
    fade: true,
    autoplay : true,
    autoplaySpeed: 700,
    cssEase: 'linear',
    centerMode : true,
    centerPadding : '2rem',
    className : 'carrousel',
    useCSS: true,
    adaptiveHeight: true,
  };
  return (
    <div className="container-carousel">
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
