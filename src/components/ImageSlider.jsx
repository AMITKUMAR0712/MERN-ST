import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import SliderPIC2 from "../assets/images/SliderPIC2.jpeg";
import SliderPIC1 from "../assets/images/SliderPIC1.jpg";

const images = [SliderPIC2, SliderPIC1];
const styles = {
  container: {
    position: "relative",
    zIndex: -100,
  },
};

const ImageSlider = () => {
  return (
    <div style={styles.container}>
      <Carousel
        autoPlay={true}
        interval={1500}
        infiniteLoop={true}
        className="image-slider"
      >
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ImageSlider;
