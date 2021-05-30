import React from 'react'
import styles from './Features.module.css';

function Feature() {
    const facility = [
        {
            image:'/computerlab.jpg',
            title:'Computer Lab',
             description:' The information technology infrastructure is a significant factor in providing quality education. To provide quality education focus should be given on practice based learning. To provide sufficient practice OIC is equipped with a state-of-the-art computer lab. Student can use computer at any time during college hour.',
            },
            {
                image:'/library.jpg',
                title:'Library',
                 description:' Library of OIC has excellent collections of books and journals on computer science, management, Social science, mathematics and other related subjects. Students can issue books from library as per their needs. The library also maintains collections of audiovisual resources, eBooks, dissertations, annual reports, case studies.',
                },
                {
                    image:'/digital.jpg',
                    title:'Digital Electronic Lab',
                     description:' For the purpose of practice in digital logic, the college has separate digital logic lab. This will enable students to acquire the essential knowledge of digital devices.  The main objective of this lab is to perform rigorous experiments to consolidate basic  knowledge in digital electronics.',
                    },
                    {
                        image:'/organizationtieup.jpg',
                        title:'Organizations Tie-ups',
                         description:' Organizational tie-ups with various software companies, banks,  IT consultancies, derivative companies and manufacturing industries in order to provide platform to conduct internship as well as option for job placement on those organizations after the completion of the degree.',
                        },
                        {
                            image:'/research-work.jpg',
                            title:'Workshops And Seminars',
                             description:' College regularly conducts presentations, conference, seminars & workshops in various disciplines like IT issues, Computer security, Cyber crime, e-governance, HR, Organizational Behavior, and Psychology etc. Where eminent personalities from the industry and academics are invited.',
                            },
                            {
                                image:'/students5.jpeg',
                                title:'Games & Extra Activities',
                                 description:' Orchid Int college actively focus on games and extra curriculum activities and our students are participating in different events time by time. The college has its own Futsal ground where you can play and practise cricket, football.',
                                },
        ]
    return (
        <div className={styles.mainFeatureWrapper}>
               <div className={styles.mainFeatureContainer}>
            {
                facility.map((feature,index)=>
                <div className={styles.featuresBox}>
                                   <div className={styles.featuresImageBox}>
                                       <img src={feature.image} width='330px' height='220px'/>
                                       <div className={styles.featureTitle}>
                                       {feature.title}
                                           </div> 
                                       <p>
                                       {feature.description}
                                           </p>
                                            </div>
                                            </div>

                )
            }
            
        </div>
        </div>
     
    )
}

export {Feature}
