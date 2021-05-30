import React from 'react'
import styles from './About.module.css';


const About = () => {
    return (
        <div className={styles.aboutWrapper}>
            <div className={styles.aboutImageBox}>
                <img src='/where.jpg' height='540px' />
            </div>
            <div className={styles.aboutInfo}>
               <strong>
                    Orchid International College (OIC) affiliated to Tribhuvan University,
                    </strong>
                    <p>
                    {' '}was established in 2010 AD and promoted by a group of experienced and dedicated
                     academicians, computer engineers, management professionals and reputed software
                      company of Nepal. The goal of the college is to provide a high-quality education 
                      that will enable the students to embrace the challenges of the modern world and establish
                       the foundation for a successful future. The college focuses much on management and information 
                       technology in its academic voyage along with the main essentials of capacity building such as 
                       experimental and experiential learning; rigorous need-based training, practicum and case diagnosis.
                       </p>
                       </div>
                       <div className={styles.aboutInfo}>
                       <p>
                       The heart of OIC’s educational excellence is the strong network of IT
                        expert, reputed management professionals, collaboration with branded
                         business houses, highly qualified and experienced faculty members and
                          caring administrative staff.
                       </p>
                       </div>
                      <div className={styles.aboutInfo}>
                           <strong>Mission</strong>
                           <p>
                           {' '}Orchid International College has as its highest priority on student learning and achievement.
                            As Orchid International College prepares world-class citizens of the twenty-first century, 
                            we recognize that the aim of education is the development of the whole person, 
                            who is prepared to be an active citizen and to participate in a global community.
                       </p>
                       </div>
                       <div className={styles.aboutInfo}>
                       <p>
                       Students are focused to think critically and creatively and learn to develop effective communication and argumentation skills. 
                       Passions are ignited and they learn to draw new connections, share experiences, and become responsible citizens.
                       </p>
                       </div>
                
           
            <div className={styles.aboutImageBox}>
                <img src='/location.jpg' width='940px' height='250px'/>
            </div>
            
        </div>
    )
}

export default About
