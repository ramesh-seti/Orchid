import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Image from 'next/image';
import Styles from './Carousel.module.css';

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 768 },
      items: 2
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

function CarouselImages() {
    const images = [
        {image:'students1.jpg'},
        {image:'students2.jpg'},
        {image:'students3.jpg'},
        {image:'students4.jpg'},
        {image:'students5.jpeg'},
    ]
    return (
        <div className={Styles.imageWrapper}>
            <Carousel 
            responsive={responsive}
            swipeable={true}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={2000}
             >
 {
     images.map((key,index)=>(
         <div className={Styles.imageContainer}>
             <img src={`/${key.image}`} height='100%' width='100%'/>
         </div>
     ))
 }
</Carousel>;
            
        </div>
    )
}

export  {CarouselImages}
