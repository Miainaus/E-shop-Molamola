import './slider.scss';
import { useState } from 'react';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import WestOutlinedIcon from '@mui/icons-material/WestOutlined';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    "https://images.pexels.com/photos/10679171/pexels-photo-10679171.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/896291/pexels-photo-896291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/1135531/pexels-photo-1135531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  ]
  
  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
    console.log(currentSlide);
  };
  const nextSlide = () => { 
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
  };

  return (
    <div className='slider'>
      <div className="container" style={{transform:`translateX(-${currentSlide*100}vw)`}} >
        <img src={data[0]} alt="" />
        <img src={data[1]} alt="" />
        <img src={data[2]} alt="" />
      </div>
      <div className="icons">
        <div className="icon" onClick={prevSlide}>
          <WestOutlinedIcon />
      </div>
        <div className="icon" onClick={nextSlide}>
          <EastOutlinedIcon />
        </div>
        </div>
    </div>
  );
}

export default Slider;
