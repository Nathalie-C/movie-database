export default function CarouselBanner({ popularMovies }) {
  // The carousel section is modified from https://github.com/dangvanthanh/carousel.sass?tab=readme-ov-file
  // console.log(popularMovies);
  //every 3 secs, force a click on input "carousel-dot"

  // const radioInputs = document.querySelectorAll(".carousel-dot");
  // const labels = document.querySelectorAll(".carousel__nav label");

  // const CAROUSEL_DELAY = 5000;

  // let activeCarouselIndex = 0;
  // let timeoutID;
  // setTimeout(autoShowSlides, CAROUSEL_DELAY);

  // function autoShowSlides() {
  //   activeCarouselIndex++;
  //   // console.log(activeCarouselIndex);
  //   radioInputs[activeCarouselIndex].click();

  //   if (activeCarouselIndex === radioInputs.length - 1) {
  //     activeCarouselIndex = -1;
  //   }

  //   // Change image every 3 seconds
  //   timeoutID = setTimeout(autoShowSlides, CAROUSEL_DELAY);
  // }

  // for (let i = 0; i < labels.length; i++) {
  //   labels[i].addEventListener("click", function () {
  //     clearTimeout(timeoutID);
  //     activeCarouselIndex = i;
  //     if (activeCarouselIndex === radioInputs.length - 1) {
  //       activeCarouselIndex = -1;
  //     }

  //     timeoutID = setTimeout(autoShowSlides, CAROUSEL_DELAY);
  //   });
  // }

  return (
    <div className="carousel">
      <input
        type="radio"
        id="carousel-1"
        className="carousel-dot"
        name="carousel[]"
        checked
      />
      <input
        type="radio"
        id="carousel-2"
        className="carousel-dot"
        name="carousel[]"
      />
      <input
        type="radio"
        id="carousel-3"
        className="carousel-dot"
        name="carousel[]"
      />

      <ul className="carousel__items">
        <li className="carousel__item">
          <img
            src="../images/header-slider-img-01.jpg"
            alt="Carousel background"
            className="carousel__img"
          />
        </li>
        <li className="carousel__item">
          <img
            src="../images/header-slider-img-02.jpg"
            alt="Carousel background"
            className="carousel__img"
          />
        </li>
        <li className="carousel__item">
          <img
            src="../images/header-slider-img-03.jpg"
            alt="Carousel background"
            className="carousel__img"
          />
        </li>
      </ul>

      <div className="carousel__prev">
        <label for="carousel-1"></label>
        <label for="carousel-2"></label>
        <label for="carousel-3"></label>
      </div>

      <div className="carousel__next">
        <label for="carousel-1"></label>
        <label for="carousel-2"></label>
        <label for="carousel-3"></label>
      </div>

      <div className="carousel__nav">
        <label for="carousel-1"></label>
        <label className="carousel-label" for="carousel-2"></label>
        <label for="carousel-3"></label>
      </div>
    </div>
  );
}
