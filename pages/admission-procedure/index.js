import React from 'react'
import styles from './Admission.module.css';

const Admisssion = () => {
    const admission = [
        {
            title:'BIM',
            points:[
                'Those students who have secured a minimum second division (45%) or minimum Grade 1.8 in each subject in 10+2 or equivalent are eligible to apply for admission.',
                'College will select the students for admission from the eligible applicant on the basis of interview.',
             ]
        },
        {
            title:'BBM',
            points:[
                'Those students who have secured a minimum second division (45%) or minimum Grade 1.8 in each subject in 10+2 or equivalent are eligible to apply for admission.',
                'College will select the students for admission from the eligible applicant on the basis of interview.',
            ]
        },
        {
            title:'BBS',
            points:[
                'Those students who have secured minimum grade D+ in each subject in 10+2 or equivalent are eligible to apply for admission.',
                    'College will select the students for admission from the eligible applicant on the basis of interview.',
                ]
             },
             {
                title:'BSc.CSIT',
                points:[
                    'Successfully completed 10+2 or equivalent with Physics, Chemistry and Mathematics.',
                    'Secured a minimum grade C in each subject.',
                ]
             },
             {
                title:'BSW',
                points:[
                    'Students who have completed +2 from any stream are eligible to study BSW.Interested eligible students have to apply for admission and have to appear in interview taken by college. ',
                    'Selected students will be notified for admission.',
                ]
             },
             {
                title:'BCA',
               points:[
                   'Successfully completed 10+2 or equivalent from any University, Board or Institution recognized by Tribhuwan University.',
                   'Secured a  minimum of second division(45%) or minimum C grade in all subjects in the twelve-year schooling or equivalent',
               ]
             },
            ]
   
            return (
        <div className={styles.admissionWrapper}>
            <strong>
            Students who fulfill the following criteria are eligible to study their respective courses:
            </strong>
            {
                admission.map((procedure,index)=>
                <div className={styles.facultyBox}>
                    <div className={styles.facultyTitle}>
                        {procedure.title}
                    </div>
                    <div className={styles.facultyDescription}>
                        {procedure.points.map((item,index)=>
                        <ul>
                        <li>
                    {item}
                    </li>
                    </ul>
                        )}
                        
                        </div>
                         </div>
                )
            }
            
        </div>
    )
}

export default Admisssion
