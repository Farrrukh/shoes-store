import React from 'react'
import MuiImageSlider from 'mui-image-slider';
import './Slider.css'

const images = [
   {img:require('../Component/Images/shoes1.jpeg')},
   {img:require('../Component/Images/shoes2.jpeg')},
   {img:require('../Component/Images/shoes3.jpeg')},
   {img:require('../Component/Images/shoes4.jpeg')},
   {img:require('../Component/Images/shoes5.jpeg')},
   {img:require('../Component/Images/shoes6.jpeg')},
   {img:require('../Component/Images/shoes7.jpeg')},
   {img:require('../Component/Images/shoes8.jpeg')}

];



const Slider = (props) => {
    const imgs=images.map(item=>item.img)
    return (
        <div>
            <MuiImageSlider images={imgs}/>
            
        </div>
    )
}

export default Slider
