import React from 'react';
import { NewsCard } from '../../components/atom/card';
import Styles from './News-Events.module.css';

const NewsEvents = () => {
    return (
        <>
        <div className={Styles.newsEvents}>
            {
                Array.from(Array(5)).map((item,index)=><NewsCard 
                title={`Lorem ipsum dolor sit amet.`} 
                image={`/event/${index+1}.jpg`}
                date={`2078-0${index+1}-${index+3}`}
                message={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut gravida nunc nec mi gravida, vitae pellentesque dui vehicula. Praesent vestibulum aliquet mattis. Vestibulum a enim tincidunt tortor egestas dignissim eu in lacus. Nam ac urna at dolor porta mattis. Maecenas ut elit nibh. In ultrices varius faucibus. Nunc posuere ultricies felis, maximus viverra elit sagittis a. Mauris venenatis enim et urna congue vehicula. Mauris maximus felis lacus. Praesent nec ullamcorper lacus, eget ullamcorper massa.`}
                link={index} />)
            }
            
        </div>
        </>
    )
    
}

export default NewsEvents
