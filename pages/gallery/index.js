import React from 'react';
import { NewsCard } from '../../components/atom/card';
import Styles from './Gallery.module.css';

const GalleryPart = () => {
    return (
        <>
        <div className={Styles.galleryPhotos}>
            {
                Array.from(Array(5)).map((item,index)=><NewsCard 
                title={`Lorem ipsum dolor sit amet.`} 
                image={`/galleryphotos/${index+1}.jpg`}
                date={`2078-0${index+1}-${index+3}`}
                link={index} />)
            }
            
        </div>
        </>
    )
    
}

export default GalleryPart
