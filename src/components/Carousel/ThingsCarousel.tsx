import { Splide, SplideSlide } from "@splidejs/react-splide";

import bts1 from "../../assets/images/things/bts/bts-1.jpg";
import bts2 from "../../assets/images/things/bts/bts-2.JPG";
import bts3 from "../../assets/images/things/bts/bts-3.JPG";
import bts4 from "../../assets/images/things/bts/bts-4.JPG";
import bts5 from "../../assets/images/things/bts/bts-5.JPG";
import bts6 from "../../assets/images/things/bts/bts-6.JPG";
import bts7 from "../../assets/images/things/bts/bts-7.JPG";
import bts8 from "../../assets/images/things/bts/bts-8.JPG";
import bts9 from "../../assets/images/things/bts/bts-9.JPG";
import bts10 from "../../assets/images/things/bts/bts-10.JPG";
import bts11 from "../../assets/images/things/bts/bts-11.png";
import bts12 from "../../assets/images/things/bts/bts-12.png";

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
