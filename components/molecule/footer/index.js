import React from 'react';
import styles from './Footer.module.css';
import {FundFilled,EnvironmentFilled} from '@ant-design/icons'; 
import Link from 'next/link';
function Footer (props) {
    const {contact,links}= props
     console.log(links);
    const footerInfo=(
        <div style={{paddingTop:20}}>
            <strong style={{color:'#FFF',fontSize:24,textAlign:'center',marginLeft:5}}>
                Quick Links
            </strong>
            {
                contact.map((item,index)=>
                <Link href='/bsc-csit'>
                <a>

               
                <div style={{padding:'5px'}}>
                    <FundFilled className={styles.icon} /> <span className={styles.item}>{item}</span>
                    </div>
                    </a>
                    </Link>
                )
            }
        </div>
    )
    const linkInfo=(
        <div style={{paddingTop:20}}>
            <strong style={{color:'#FFF',fontSize:24,textAlign:'center',marginLeft:5}}>
                Contact Us
            </strong>
            {
                links.map((item,index)=>
                <Link href='/bsc-csit'>
                <a>
                <div style={{padding:'5px'}}>
                   {item.icon}
                   <span className={styles.item}>{item.text}</span>
                    </div>
                    </a>
                    </Link>
                )
            }
        </div>
    )
    return (
        <div className={styles.footerWrapper}>
            <div className={styles.imageDiv}>
                <Link href='/'>
                <a>
                <img className={styles.footerImage} src='https://www.oic.edu.np/wp-content/uploads/2020/05/orchid-college-prospectus-download.jpg' width='250' height='200'/>
                </a>
                </Link>
                <p style={{color:'#FFF',fontSize:'18px',padding:'10px 20px',fontStyle:'italic'}}>
                “High-Quality Educations, Shaping minds, moulding dreams, building careers. “
                </p>
            </div>
            {
                footerInfo
            }
            {
                linkInfo
            }
        </div>
    )
}

export {Footer}
