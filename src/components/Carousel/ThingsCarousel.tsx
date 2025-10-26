import { Splide, SplideSlide } from "@splidejs/react-splide";

// import "./thing-carousel.scss";

const ThingsCarousel = () => {
  const carouselImages: string[] = [
    "bts-1.jpg",
    "bts-2.JPG",
    "bts-3.JPG",
    "bts-4.JPG",
    "bts-5.JPG",
    "bts-6.JPG",
    "bts-7.JPG",
    "bts-8.JPG",
    "bts-9.JPG",
    "bts-10.JPG",
    "bts-11.png",
    "bts-12.png",
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
          {carouselImages.map((image) => (
            <SplideSlide>
              <img
                className="carousel__image"
                src={`/images/things/bts/${image}`}
                alt={image}
              />
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};

export default ThingsCarousel;
