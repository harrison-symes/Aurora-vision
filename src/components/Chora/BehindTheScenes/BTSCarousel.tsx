import { Splide, SplideSlide } from "@splidejs/react-splide";

import bts1 from "../../../assets/images/chora/bts/bts-1.png";
import bts2 from "../../../assets/images/chora/bts/bts-2.png";
import bts3 from "../../../assets/images/chora/bts/bts-3.png";
import bts4 from "../../../assets/images/chora/bts/bts-4.png";
import bts5 from "../../../assets/images/chora/bts/bts-5.png";
import bts6 from "../../../assets/images/chora/bts/bts-6.png";
import bts7 from "../../../assets/images/chora/bts/bts-7.png";
import bts8 from "../../../assets/images/chora/bts/bts-8.png";
import bts9 from "../../../assets/images/chora/bts/bts-9.png";
import bts10 from "../../../assets/images/chora/bts/bts-10.png";

const BTSCarousel = () => {
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
  ];
  return (
    <div>
      <div className="bts-header bts-header--purple">BEHIND THE SCENES OF <span className="chora-pink">MOMENTUM</span></div>
      <div className="carousel__container">
        <Splide
          aria-label="Behind the scenes images"
          options={{
            autoplay: true,
            autoWidth: true,
            autoHeight: true,
            wheel: false,
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

export default BTSCarousel;
