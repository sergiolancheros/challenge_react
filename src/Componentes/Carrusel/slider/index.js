import React from "react";
import Slider from "react-slick";
import "./slider.css"
import Categorias from "../../Titulos";


const MultipleSlider = (props) => {
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
      }; 
    
    const { video1, video2, video3, equipo } = props.datos
    const { categorias } = props
    console.log(props)
    
    return (
      <div className="slider" >
        <Slider {...settings}>
            <div>
            <img src={video1} alt="Videocard1" className="Videocard" />
            </div>
            <div>
            <img src={video2} alt="Videocard2" className="Videocard" />
            </div>
            <div>
            <img src={video3} alt="Videocard3" className="Videocard" />
            </div>
        </Slider>
      </div>
    );
}

export default MultipleSlider