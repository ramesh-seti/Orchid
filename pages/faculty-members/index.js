import React from 'react'
import styles from './Faculty.module.css';

const Faculty = () => {
    return (
        <div className={styles.facultyWrapper}>
             <div className={styles.aboutImageBox}>
                <img src='/where.jpg' height='540px' />
            </div>
            <div className={styles.facultyInfo}>
                <p>
                The key to the success of any academic institution is its teaching faculty. 
                To maintain excellence, the management is committed to have eminent teaching 
                faculties from the stream of specialization.
                </p>
            </div>
            <div className={styles.facultyText}>
                <strong>Teaching Faculty</strong>
                <ol>
                <li>Prof. Dr. Prem Raj Pant</li>
                <li>Prof. Dr Kundan Dutta Koirala</li>
                <li>Prof. Dr. Purusottam Sharma</li>
                <li>Prof. Dr. Kamal Deep Dhakal</li>
                <li>Prof. Dr. Dilli Raj Sharma</li>
                <li>Prof. Dr. Mahananda Chalise</li>
                <li>Prof. Dr. Bindu Pokhrel</li>
                <li>Asso. Prof. Ratnaman Dangol</li>
                <li>Dr. Dhruba Pokhrel</li>
                <li>Dr. Gauri Shrestha</li>
                 </ol>
            </div>
            <div className={styles.facultyText} >
                <strong>Visiting Faculty</strong>
                <ol>
                <li> Prof Dr. Dharanidhar Sharma –  Mathematics</li>
                <li> Prof Dr. Santosh Raj Poudyal –  Management</li>
                <li> Prof Dr. Manohar Krishna Shrestha –  Finance</li>
                <li> Prof Kundan Datta Koirala –  Marketing</li>
                <li> Prof Puskar Kumar Sharma –  Statistics</li>
                <li> Dr. Reeta Shrestha –  Psychology</li>
                <li> Asst. Prof. Geeta Malla –  Accounts</li>
                <li>Asst. Prof. Ratna Man Dangol –  Accountancy</li>
                <li>Rajesh Kumar Shakya –  Information Management</li>
                 </ol>
            </div>
            <div className={styles.facultyText}>
                <strong>Research and Development Team</strong>
                <ol>
                <li> Amresh Kumar Jha –  Computer Engineer, Nepal Electricity Authority</li>
                <li> Bikash Bhattarai –  Dristi Tech (P) LTD.</li>
                <li> Bipin Malla –  Computer Officer, Ministry of Finance</li>
                <li> Gandhi Chhetri –  DGM Sujal Food (P). LTD</li>
                <li> Krishna Raj Bhandari –  Dristi Tech (P) LTD.</li>
                <li> Kshitiz Baskota –  IT Officer, NMB Bank</li>
                <li> Rajesh Shakya –  IT consultant, World Bank</li>
                <li> Roshan Neupane –  Computer Engineer, Nepal Electricity Authority</li>
                <li> Sishir Adhikari –  IT Officer, Nepal SBI Bank</li>
                <li> Subash Khadka –  System Engineer (Manager). Karmachari Sanchayakosh</li>
                 </ol>
            </div>
        </div>
    )
}

export default Faculty
