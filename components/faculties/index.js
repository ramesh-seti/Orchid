import React from 'react'
import styles from './Faculties.module.css';

function Faculty() {
    const programs = [
        {
            image:'/bsc-csit.png',
         title:'BSc. CSIT',
          description:'Your chance to be a trending expert in IT industries and make a successful career after completion of our courses.',
          link:'/',
        },
        {
            image:'/bim.png',
         title:'BIM',
         link:'/',
          description:' Lean forward to a career in almost any industry with a wide range of job opportunities and career paths.' 
        },
        {
            image:'/bsw.png',
         title:'BSW',
         link:'/',
          description:' Promote social change, problem solving in human relationships and liberation of people to enhance well-being.' 
        },
        {
            image:'/bca.png',
         title:'BCA',
         link:'/',
          description:'Prepares students for a career in the field of computer applications  and software development.' 
        },
        {
            image:'/bbm.png',
         title:'BBM',
         link:'/',
          description:' Provide the student with the skills necessary to perform leadership roles in the business and corporate world.' 
        },
        {
            image:'/bbs.png',
         title:'BBS',
         link:'/',
          description:'Incorporates management concepts & reality-based skills integrating them with the latest changes in the business environment.' 
        },
    ]
    return (
        <div className={styles.mainFacultyWrapper}>
            {
               programs.map((faculty,index)=>
               <div className={styles.facultiesBox}>
                                      <div className={styles.facultiesImageBox1}>
                    <img src={faculty.image} width='85px' height='85px'/>
                     </div>
                     <div className={styles.facultiesInfoText}>
                        <strong> {faculty.title} </strong>
                        <p>
                       {faculty.description}
                        </p>
                     </div>
                     </div>
               ) 
            }
            
        </div>
    )
}

export {Faculty}