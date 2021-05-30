import React from 'react';
import styles from './Card.module.css';
import { Card } from 'antd';
import {useRouter} from 'next/router';
const{Meta}= Card
function NewsCard({image,date,title,message,link}) {
    const router= useRouter()
    return (
        <div>
            <Card className={styles.newsCard}
            onClick={()=>router.push(`/news/${link}`)}
            hoverable={true}
            cover={<img src={image} width={400} height={300}/>}
            extra={<strong>{date}</strong>}
            >
                <Meta 
                title={title}
                 description={message}
                 

                 />
            </Card>


        </div>
    )
}

export {NewsCard}
