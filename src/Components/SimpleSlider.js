import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SimpleSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full h-full">
      <Slider {...settings}>
        <div>
          <img
            src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/14d5f677630559.5c8d3005a7c9c.png"
            alt="Slide 1"
            className="w-full h-auto object-cover"
          />
        </div>
        <div>
          <img
            src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/30db5277630559.5c8d3005a8572.png"
            alt="Slide 2"
            className="w-full h-auto object-cover"
          />
        </div>
        <div>
          <img
            src="https://img.freepik.com/premium-vector/best-season-sale-banner-design-template_2239-1175.jpg"
            alt="Slide 3"
            className="w-full h-auto object-cover"
          />
        </div>
        <div>
          <img
            src="https://img.freepik.com/premium-vector/modern-sale-banner-website-slider-template-design_54925-45.jpg"
            alt="Slide 4"
            className="w-full h-auto object-cover"
          />
        </div>
        <div>
          <img
            src="https://marketplace.canva.com/EAFED4mfw94/1/0/1600w/canva-yellow-white-modern-special-discount-banner-0J53SvmhoiY.jpg"
            alt="Slide 5"
            className="w-full h-auto object-cover"
          />
        </div>
        <div>
          <img
            src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/33234650700333.58d88a71f123e.png"
            alt="Slide 6"
            className="w-full h-auto object-cover"
          />
        </div>
      </Slider>
    </div>
  );
};

export default SimpleSlider;
