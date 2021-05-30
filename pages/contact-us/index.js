import React,{useState} from 'react';
import { TopComponent } from '../../components/top';
import styles from './ContactUs.module.css';
import {Form,Input,Button,notification,} from 'antd';
import {PhoneFilled,MailFilled,FacebookFilled,CompassFilled} from '@ant-design/icons';
import Link from 'next/link';


const { TextArea } = Input;
const ContactUs = () => {
    const [loading,setLoading]= useState(false)
    const contactFormHandler = () => {setLoading(true)
        setTimeout(()=>{
            notification.success({message:'Form submitted Successfully',description:'Thank You For Contacting Us'})
            setLoading(false)

        },3000)
    
    }
    const contact = [
        {
            icon:<PhoneFilled className={styles.detailIcon}/>,
            title:'01-4479744',
        },
        {
            icon:<PhoneFilled  className={styles.detailIcon} />,
            title:'01-4479745',
        },
        {
            icon:<MailFilled  className={styles.detailIcon} />,
            title:'info@oic.edu.np',
        },
        {
            icon:<FacebookFilled  className={styles.detailIcon} />,
            title:'facebook',
            link:'https://www.facebook.com/Orchid-International-College-197982470220692/'
        },
        {
            icon:<CompassFilled  className={styles.detailIcon} />,
            title:'Bijayachowk-Gaushala,Kathmandu,NP',
        },
        
    ]

    return (
        <>

        <div className={styles.contactUsWrapper}>
            <div className={styles.contactUsConatiner}>
                <strong>Contact Us</strong>
                <p>
                Orchid International College is here to provide you with more information, answer any inquiry. For any inquiries, 
                please complete the form below and we will endeavor to respond as quickly as possible.
                </p>
            </div>
            <div className={styles.contactUsImageBox}> 
                <img src='/about.png' height='445px'/>
            </div>
             </div>
             <div className={styles.contactDetailMain}>
             <div className={styles.contactForm}>
             <Form layout='vertical' onFinish={contactFormHandler}>
                <Form.Item required label={ <strong>Full Name</strong>}>
                    <Input size='large'/>

                </Form.Item>
                <Form.Item required label={ <strong>Email</strong>}>
                    <Input type='email' size='large'/>

                </Form.Item>
                <Form.Item required label={ <strong>Subject</strong>}>
                    <Input size='large'/>

                </Form.Item>
                <Form.Item required label={ <strong>Message</strong>}>
                    <TextArea rows={4}/>

                </Form.Item>
                <Form.Item>
                <Button className={styles.sendMessageButton} size='large' htmlType='submit' type='primary' loading={loading}>
                    Send Message
                </Button>

                </Form.Item>
                
                 
             </Form>
            
             </div>
             <div className={styles.contactDetails}>
                 <strong>Contact Details</strong>
             
             {
                 contact.map((detail,index)=>
                 <div className={styles.detailMain}>
                     <div className={styles.iconBox}>
                         {detail.icon}
                     </div>
                     <div className={styles.detailInfo}>
                        { detail?.link?<Link href={detail.link}>
                         <a target='_blank'>
                         {detail.title}
                         </a>
                         </Link>:<strong>{detail.title}</strong>}
                     </div>
                 </div>
                 )
             }
             </div>
             </div>
        </>
    )
}

export default ContactUs
