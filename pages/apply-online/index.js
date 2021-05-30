import React,{useState} from 'react'
import { TopComponent } from '../../components/top';
import styles from './Applyonline.module.css';
import {Form,Input,Button,notification,Select} from 'antd';
import {FieldBinaryOutlined,ReadFilled,LikeFilled} from '@ant-design/icons';

const {Option} = Select;
const { TextArea } = Input;
const ApplyOnline = () => {
    const [loading,setLoading]= useState(false)
    const contactFormHandler = () => {setLoading(true)
        setTimeout(()=>{
            notification.success({message:'Form submitted Successfully',description:'Thank You For Contacting Us'})
            setLoading(false)

        },3000)
    
    }
    const scholarship =[
        {
            icon:<FieldBinaryOutlined className={styles.scholarIcon} />,
            title:'First Come First Priority',
            description:'Priority is given to student who apply for admission early.',
        },
        {
            icon:<ReadFilled className={styles.scholarIcon} />,
            title:'Sound Academic Qualification',
            description:'We provide scholarship based upon the students with strong academic status.',
        },
        {
            icon:<LikeFilled className={styles.scholarIcon} />,
            title:'Best Performing Students',
            description:'Best Performer will always get reward from us.',
        },

    ]

    return (
        <>
       
        <div className={styles.applyWrapper}>
            <div className={styles.applyContainer}>
                <div className={styles.applyBox}>
                <strong>
                You could be next to get 100%
                </strong>
                <p>
                Anybody, who has successfully completed 10+2 or equivalent and is
                 interested in taking admission at Orchid International College can fill an online form.
                </p>
                </div>
                
                <div className={styles.applyImageBox}>
                    <img src='/scholarship1.svg' height='245px'/>

                </div>
                </div>
            
        </div>
        <div className={styles.scholarWrapper}>
        <div className={styles.scholarMain}>
                 <div className={styles.scholar}>
                     <strong>Scholarship</strong>
                     <span>is based upon</span>
                 </div>
                
                    {
                        scholarship.map((scholar,index)=>
                        <div className={styles.scholarInfo}>
                        <div>
                            {scholar.icon}
                        </div>
                        <div className={styles.scholarText}>
                            <strong>{scholar.title}</strong>
                            <p>{scholar.description}</p>
                        </div>
                        </div>
                        )
                    }
                 </div>
        <div className={styles.applyForm}>
            <strong>Admission is open for 2021 Sesssion </strong>
             <Form layout='vertical' onFinish={contactFormHandler}>
                <Form.Item required label={ <strong>Full Name</strong>}>
                    <Input size='large'/>

                </Form.Item>
                <Form.Item required label={ <strong>Select Program To Enroll </strong>}>
                   <Select onChange={(value)=>console.log(value)} size='large'>
                       <Option value='BSc.CSIT'>BSc.CSIT</Option>
                       <Option value='BIM'>BIM</Option>
                       <Option value='BSW'>BSW</Option>
                       <Option value='BBS'>BBS</Option>
                       <Option value='BBM'>BBM</Option>
                       <Option value='BCA'>BCA</Option>
                       <Option value='Plus 2 SCIENCE|MANAGEMENT'>Plus 2 SCIENCE|MANAGEMENT</Option>
                   </Select>

                </Form.Item>
                <Form.Item required label={ <strong>Mobile Number</strong>}>
                    <Input type='number' size='large'/>

                </Form.Item>
                <Form.Item required label={ <strong>Email </strong>}>
                    <Input type='email' size='large'/>

                </Form.Item>
                <Form.Item required label={ <strong>Previous College / School Name </strong>}>
                    <Input size='large'/>

                </Form.Item>
                <Form.Item label={ <strong>Message(optional)</strong>}>
                    <TextArea rows={4}/>

                </Form.Item>
                <Form.Item>
                <Button className={styles.applyButton} size='large' htmlType='submit' type='primary' loading={loading}>
                    Apply For Admission
                </Button>

                </Form.Item>
                
                 
             </Form>
            
             </div>
             </div>
             
        </>
    )
}

export default ApplyOnline
