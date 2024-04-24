import React, {useState} from "react"; 
import Carousel from 'react-bootstrap/Carousel';

function ImageSlider({data}) {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect} >
         {data.map((slide, i) => {
          return (
            <Carousel.Item>        
          <img
            className="d-block w-100"
            src={slide.image}
            alt="slider image"
            width="380"
            // height="500"
          />
          <Carousel.Caption>
            <h3 className="tracking-in-contract">{slide.caption}</h3>
            <p>{slide.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
          )
        })}
        
      </Carousel>
  );
}

export default ImageSlider;
