import React,{useState} from 'react'
import styles from './Header.module.css';
import Image from 'next/image';
import {BellOutlined,DownloadOutlined,GlobalOutlined,DownOutlined,DownSquareOutlined} from '@ant-design/icons'
import { ButtonComponent as Button } from '../../atom/button';
import {CarouselImages as Carousel} from '../../carousel';
import Link from 'next/link';
import { Menu, Dropdown,Button as StyledButton  } from 'antd';
import { ModalVideo } from '../../modal';
import {Faculty} from '../../faculties'
import { Feature } from '../../features';
import {SuccessStories} from '../../success';
import { Footer } from '../footer';
import {FundFilled,EnvironmentFilled,MailFilled,PhoneFilled} from '@ant-design/icons'; 
import {TopComponent} from '../../top'




function Header() {
    const[isVisible,setIsVisible]=useState(false);
    const cancelHandler=() => {
        setIsVisible(false)
    }
    
    return (
        <div className={styles.mainWrapper}>
           
           
    
        <div className={styles.homeInfo}>
        <div className={styles.collegeName}>
            <strong>Orchid International College</strong>
            <p>
            Orchid International College (OIC) affiliated to Tribhuvan University (TU), 
            was established in 2010 AD and promoted by a group of
            experienced and dedicated academicians, computer engineers,
            management professionals and reputed software company of Nepal.
            The goal of the college is to provide a high-quality education that will
            enable the students to embrace the challenges of the modern world
            and establish the foundation for a successful future.
            </p>
            <div className={styles.knowMoreWrapper}>
                <Link href='/about-us'>
        <StyledButton className={styles.knowMoreButton}>Know More</StyledButton>
        </Link>
        </div>
        </div>
        <div className={styles.studentImageBox}>
            <Image src='/student.png' height='440px' width='550px' quality={100}/>
        </div>
        </div>
        <div className={styles.mainConatiner}>
        <div className={styles.whyOrchidWrapper}>
             <div className={styles.whyOrchidContainer}>
                 <strong> Why  </strong>
                 <span> Orchid ? </span>
            </div>
            <div>
           <Carousel/>
            </div>
            <div className={styles.rightContainer}>
            <div className={styles.widgetText}>
        <p>
            We are young and we are curious.We are constantly scanning what’s happening  in the world and 
            translating this into challenging, realistic and highly practical courses that prepare students 
            for the future.
            </p>
        </div>
        </div>
        </div>
        <div className={styles.rightContainer}>
              <div className={styles.widgetText1}>
            <p>
            Our teaching pedagogy is developed in consultation with industry groups and we focus on our graduates’
            employability skills. Practicums and networking events are integral to most of our courses and students
            can be offered paid internships as part of their studies.
            </p>
            </div>
            </div>
            </div>
            <div>
                <div className={styles.welcomeVideoWrapper}>
                    <strong> Welcome </strong>
                    <span> Video </span>
                </div>
                <div className={styles.welcomeImageBox}>
                    <div>
                    <img onClick={()=>setIsVisible(true)} style={{cursor:'pointer'}} src='/welcomevideo1.jpg' width='100%' height='100%' quality={100}/>
                    </div>
                    <div className={styles.rightSideBox}>
                    <img onClick={()=>setIsVisible(true)} style={{cursor:'pointer'}} src='/welcomevideo2.jpg' width='100%' height='100%' quality={100}/>
                    </div>
                     </div>
                <div className={styles.welcomeInfoWrapper}>
                    <div className={styles.background}>
                    <div className={styles.modernWrapper}>
                        <div className={styles.welcomeInfoImage}>
                        <Link href='/location' passHref>
                    <img style={{cursor:'pointer'}}  src='/modern.svg' width='142px' height='105px'/>
                    </Link>
                        </div>
                        <div className={styles.welcomeInfoText}>
                        <Link href='/loaction' passHref>
                        <strong style={{cursor:'pointer'}}>Modern Learning Technique</strong>
                        </Link>
                        <p>
                        We enlight our students with learning Technique which is trending Globally. 
                        We actively focus on online and distance learning as well.
                        </p>
                        </div>
                    </div>
                    </div>
                    <div className={styles.modernWrapper}>
                        <div className={styles.welcomeInfoImage}>
                        <Link href='/location' passHref>
                    <img style={{cursor:'pointer'}}  src='/scholarship.svg' width='142px' height='105px'/>
                    </Link>
                     </div>
                     <div className={styles.welcomeInfoText}>
                     <Link href='/loaction' passHref>
                        <strong style={{cursor:'pointer'}}>Scholarships For Deserving</strong>
                        </Link>
                        <p>
                        Students with sound academic performance are 100% rewarded with scholarships.
                        </p>
                         </div>
                          </div>
                          <div className={styles.modernWrapper}>
                              <div className={styles.welcomeInfoImage}>
                              <Link href='/location' passHref>
                    <img style={{cursor:'pointer'}}  src='/research.svg' width='142px' height='105px'/>
                    </Link>
                    </div>
                    <div className={styles.welcomeInfoText}>
                    <Link href='/loaction' passHref>
                        <strong style={{cursor:'pointer'}}>Research Based Studies</strong>
                        </Link>
                        <p>
                        We help & encourage our students for market research analysis and developing skill abilities.
                        </p>
                        </div>
                        </div>
                        </div>
                         </div>
                         <ModalVideo isVisible={isVisible} onCancel={cancelHandler}/>
                         <div>
                         <div className={styles.offeredProgramsWrapper}>
                             <strong> Offered </strong>
                             <span> Programs </span>
                              </div>
                              <div className={styles.offeredProgramsImageBox}>
                                  <img src='/students6.jpg' width='100%' height='350px' />
                              </div>
                              </div>
                              <div className={styles.facultiesWrapper}>
                              <div className={styles.facultiesImageBox}>
                              <Image src='/faculties.svg' width='272px' height='525px' quality={100}/>
                                  </div>
                                   <div>
                                  <Faculty/>
                                  </div>
                                  </div>
                             
                      
                       <div className={styles.tuWrapper}>
                           <div className={styles.tuText}>
                               <p>
                               " All programs offered here in Orchid International College
                                are affiliated under Tribhuvan University."
                               </p>
                           </div>
                           <div>
                               <Image src='/Tribhuvan-University.png' width='140px' height='155px' quality={100}/>
                           </div>
                       </div>
                       <div>
                           <div className={styles.featuresWrapper}>
                               <strong> Features & </strong>
                               <span> Facilities </span>
                           </div>
                        
                             <Feature/>
                              </div>
                              <div className={styles.studentsMainWrapper}>
                                  <div className={styles.studentsStoriesWrapper}>
                                      <strong> Students </strong>
                                      <span> Success Stories</span>
                                  </div>
                                  <SuccessStories/>
                              </div>
                             

                        </div>
    )
}

export {Header}
