import React, {useState} from "react"; 
import Carousel from 'react-bootstrap/Carousel';
// import './Banner.css'

const data = [
  {
   image: require('../../Images/img1.jpg'), 
   caption:"Aura Digitals",
   description:"Our premium Products"
  },
  {
    image: require('../../Images/img2.jpg'), 
    caption:"Aura Digitals",
    description:"Our premium Products"
   }, 
   {
    image: require('../../Images/img3.jpg'), 
    caption:"Aura Digitals",
    description:"Our premium Products"
   },
   {
     image: require('../../Images/img4.jpg'), 
     caption:"Aura Digitals",
     description:"Our premium Products"
    }
]

function Banner() {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
         {data.map((slide, i) => {
          return (
            <Carousel.Item>        
          <img
            className="d-block w-100"
            src={slide.image}
            alt="slider image"
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
  )
}

export default Banner


