import { Splide, SplideSlide } from "@splidejs/react-splide";

import bts1 from "../../assets/images/things/bts/bts-1.webp";
import bts2 from "../../assets/images/things/bts/bts-2.webp";
import bts3 from "../../assets/images/things/bts/bts-3.webp";
import bts4 from "../../assets/images/things/bts/bts-4.webp";
import bts5 from "../../assets/images/things/bts/bts-5.webp";
import bts6 from "../../assets/images/things/bts/bts-6.webp";
import bts7 from "../../assets/images/things/bts/bts-7.webp";
import bts8 from "../../assets/images/things/bts/bts-8.webp";
import bts9 from "../../assets/images/things/bts/bts-9.webp";
import bts10 from "../../assets/images/things/bts/bts-10.webp";
import bts11 from "../../assets/images/things/bts/bts-11.webp";
import bts12 from "../../assets/images/things/bts/bts-12.webp";

// import "./thing-carousel.scss";

const ThingsCarousel = () => {
  const carouselImages: string[] = [
    bts1,
    bts2,
    bts3,
    bts4,
    bts5,
    bts6,
    bts7,
    bts8,
    bts9,
    bts10,
    bts11,
    bts12,
  ];
  return (
    <div>
      <div className="bts-header">BEHIND THE SCENES PHOTOS</div>
      <div className="carousel__container">
        <Splide
          aria-label="Behind the scenes images"
          options={{
            autoplay: true,
            autoWidth: true,
            autoHeight: true,
            wheel: true,
            breakpoints: {
              640: {
                autoplay: false,
                // fixedHeight: "100px",
                // heiht: "100px",
                width: "100%",
                perPage: 1,
              },
            },
          }}
        >
          {carouselImages.map((image, index) => (
            <SplideSlide key={`carousel-image-${index}`}>
              <img
                className="carousel__image"
                src={image}
                alt={`bts-${index + 1}`}
              />
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};

export default ThingsCarousel;
