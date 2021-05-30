import { Table,Collapse } from 'antd';
import React from 'react'
import styles from './BSC.module.css';
import {PlusOutlined} from '@ant-design/icons';
import Link from 'next/link';
const {Panel} = Collapse
const BSC = () => {
    const eighthsemdata =[
        {
            coursecode:'CSC 461',
            subject:'Advanced database',
        },
        {
            coursecode:'CSC 462',
            subject:'Internship',
        },
        {
            coursecode:'',
            subject:'Elective IV',
        },
        {
            coursecode:'',
            subject:'Elective V',
        },
    ]
    const eighthsemcolumns = [
        {
            title:'Eighth Semester:',
            dataIndex:'coursecode',
            key:'coursecode',
        },
        {
            title:'',
            dataIndex:'subject',
            key:'subject',
        }
    ]
    const seventhsemdata =[
        {
            coursecode:'CSC 409',
            subject:'Advanced Java Programming',
        },
        {
            coursecode:'CSC 410',
            subject:'Data Warehousing and Data Mining',
        },
        {
            coursecode:'CSC 411',
            subject:'Principles of Management',
        },
        {
            coursecode:'CSC 412',
            subject:'Project Work',
        },
        {
            coursecode:'',
            subject:'Elective III',
        },
    ]
    const seventhsemcolumns = [
        {
            title:'Seventh Semester:',
            dataIndex:'coursecode',
            key:'coursecode',
        },
        {
            title:'',
            dataIndex:'subject',
            key:'subject',
        }
    ]
    const sixthsemdata =[
        {
            coursecode:'CSC 364',
            subject:' Software Engineering',
        },
        {
            coursecode:'CSC 365',
            subject:' Compiler Design and Construction',
        },
        {
            coursecode:'CSC 366',
            subject:' E-Governance',
        },
        {
            coursecode:'CSC 367',
            subject:' NET Centric Computing',
        },
        {
            coursecode:'CSC 368',
            subject:' Technical Writing',
        },
        {
            coursecode:'',
            subject:'Elective II',
        },
    ]
    const sixthsemcolumns = [
        {
            title:'Sixth Semester:',
            dataIndex:'coursecode',
            key:'coursecode',
        },
        {
            title:'',
            dataIndex:'subject',
            key:'subject',
        }
    ]
    const fifthsemdata =[
        {
            coursecode:'CSC 314',
            subject:'Design and Analysis of Algorithms',
        },
        {
            coursecode:'CSC 315',
            subject:'System Analysis and Design',
        },
        {
            coursecode:'CSC 316',
            subject:'Cryptography',
        },
        {
            coursecode:'CSC 317',
            subject:'Simulation and Modeling',
        },
        {
            coursecode:'CSC 318',
            subject:'Web Technology',
        },
        {
            coursecode:'',
            subject:'Elective I',
        },
    ]
    const fifthsemcolumns = [
        {
            title:'Fifth Semester:',
            dataIndex:'coursecode',
            key:'coursecode',
        },
        {
            title:'',
            dataIndex:'subject',
            key:'subject',
        }
    ]
    const fourthsemdata =[
        {
            coursecode:'CSC 257',
            subject:'Theory of Computation',
        },
        {
            coursecode:'CSC 258',
            subject:'Computer Networks',
        },
        {
            coursecode:'CSC 259',
            subject:'Operating System',
        },
        {
            coursecode:'CSC 260',
            subject:'Database Management System',
        },
        {
            coursecode:'CSC 261',
            subject:'Artificial Intelligence',
        },
    ]
    const fourthsemcolumns = [
        {
            title:'Fourth Semester:',
            dataIndex:'coursecode',
            key:'coursecode',
        },
        {
            title:'',
            dataIndex:'subject',
            key:'subject',
        }
    ]
    const thirdsemdata =[
        {
            coursecode:'CSC 206',
            subject:'Data Structure and Algorithm',
        },
        {
            coursecode:'CSC 207',
            subject:'Numerical Method',
        },
        {
            coursecode:'CSC 208',
            subject:'Computer Architecture',
        },
        {
            coursecode:'CSC 209',
            subject:'Computer Graphics',
        },
        {
            coursecode:'STA 210',
            subject:'Statistics II',
        },
    ]
    const thirdsemcolumns = [
        {
            title:'Third Semester:',
            dataIndex:'coursecode',
            key:'coursecode',
        },
        {
            title:'',
            dataIndex:'subject',
            key:'subject',
        }
    ]
    const seconsemdata =[
        {
            coursecode:'CSC 160',
            subject:'Discrete Structure',
        },
        {
            coursecode:'CSC 161',
            subject:'Object Oriented Programming',
        },
        {
            coursecode:'CSC 162',
            subject:'Microprocessor',
        },
        {
            coursecode:'MTH 163',
            subject:'Mathematics II',
        },
        {
            coursecode:'STA 164',
            subject:' Statistics I',
        },
    ]
    const secondsemcolumns = [
        {
            title:'Second Semester:',
            dataIndex:'coursecode',
            key:'coursecode',
        },
        {
            title:'',
            dataIndex:'subject',
            key:'subject',
        }
    ]
    const firstsemdata =[
        {
            coursecode:'CSC 109',
            subject:'Introduction to Information Technology',
        },
        {
            coursecode:'CSC 110',
            subject:'C Programming',
        },
        {
            coursecode:'CSC 111',
            subject:'Digital Logic',
        },
        {
            coursecode:'MTH 112',
            subject:'Mathematics I',
        },
        {
            coursecode:'PHY 113',
            subject:'Physics',
        },
    ]
    const firstsemcolumns = [
        {
            title:'First Semester:',
            dataIndex:'coursecode',
            key:'coursecode',
        },
        {
            title:'',
            dataIndex:'subject',
            key:'subject',
        }
    ]
    const gradingdata =[
        {
            division:'Pass Division',
            percentage:'40%',
        },
        {
            division:'Second Division',
            percentage:'55%',
        },
        {
            division:'First Division',
            percentage:'70%',
        },
        {
            division:'First Division With Distinction',
            percentage:'80% or Above',
        },
    ]
    const gradingcolumns = [
        {
            title:'Grading System Percentage:',
            dataIndex:'division',
            key:'division',
        },
        {
            title:'',
            dataIndex:'percentage',
            key:'percentage',
        }
    ]
    const creditdata = [
        {
            course:'Computer science core courses',
            credit:'75 credit hours',
        },
        {
            course:'Natural science elective courses',
            credit:'6 credit hours',
        },
        {
            course:'Mathematics courses',
            credit:'12 credit hours',
        },
        {
            course:'English courses',
            credit:'3 credit hours',
        },
        {
            course:'Social science and management courses',
            credit:'6 credit hours',
        },
        {
            course:'Computer science elective courses',
            credit:'15 credit hours',
        },
        {
            course:'Internship/Project',
            credit:'9 credit hours',
        },
        {
            course:'Total Credit hours',
            credit:'126 credit hours',
        },
     ]
    const creditcolumns = [
        {
            title:'Course Structure:',
            dataIndex:'course',
            key:'course',
        },
        {
            title:'',
            dataIndex:'credit',
            key:'credit',
        }
    ]
    const csit = [
        {
            title:'Why B.Sc.CSIT Course in Nepal?',
            description:[
                'This Bsc.CSIT course has been developed for the students, who have completed their high school (+ 2 levels).',
                'and A-levels and now want to pursue a computing major like Bachelor’s in Computer Application (BCA), Bachelor’s in Information Technology (BIT), Bachelor’s in Software Engineering (B.E. Software), Bachelor’s in Computer Engineering (B.E. Computer), Bachelor’s in Information Management (BIM), Bachelor’s in Computer Science, Bachelor’s of Science in Information Technology (BSc.IT), Bachelor’s in Information Systems (BIS), Bachelor’s in Computer Information Systems (BCIS) and some other similar degrees.'
             ]
        },
        {
            title:'Why study BSc.CSIT in compare to IT BCA BE BIT BIS?',
            description:[
                'It is more advanced Latest and Standardize course and is much more practical based and have more credit hours-',
                'It is a course designed in such a way that it compromises all the essential subjects required to be an excellent IT Professional.',
                'The BSCCSIT program not only gives theoretical and practical knowledge to students but also enables them to solve the complicated problems in the technology sector.',
                'It is semester System which means a timely examination, Result, and Course Completion.',
                'It is up to date and most feature and advances course which includes software development, computer networking, software testing, software engineering, Artificial Intelligence,  web design, databases, programming and computer systems.',
                'It is affiliated to TU University which is largest and most reputed university and has global recognition so graduate can fit into global industries and also continue Master degree courses anywhere without any difficulty.',
                'CSIT course program of Tribhuvan University mission is to connect students and people with up-to-date information, Technology, Events.',
            ]
        },
        {
            title:'Why study BSc.CSIT at ORCHID?',
            description:[
                'Orchid College provides its students with a combination of leading-edge theory and technical knowledge plus hands-on practical experience to prepare our students for a successful career as an IT professional in Nepal and around the world.',
                'Besides curricula designed by the University, orchid Int’l college will also teach students soft skills, problem-solving skills, critical thinking, and industry relevant additional IT courses.',
                'As one of the top BSc IT Colleges in Nepal, the college provides an innovative and practical approach to teaching and learning by providing well-equipped laboratories, learning materials, resourceful library, etc.',
                'The college, in fact, is committed to helping students develop skills, knowledge, and attitudes that help them pursue opportunities in IT and Computing.',
                'The orchid college organizes a variety of workshops and seminars to upgrade students’ know-how about Computer Science with a special focus on IT.',
                'Orchid provides students with ample opportunities to integrate their coursework knowledge with professional applications through project work & research.',
             ]
        },
    ]
    return (
        <div className={styles.bscWrapper}>
            <div className={styles.headingTitle}>
                <strong>
            Bachelors of Science in Computer Science and Information Technology (B.Sc.CSIT)
            </strong>
            <p>
            Affiliated Under Tribhuvan University (T.U) Kritipur
            </p>
            </div>
            <div className={styles.bscImage}>
                <img src='/csit.jpg' height='400px'/>
            </div>
            <div className={styles.bscInfo}>
                <p>
                BSc CSIT (Bachelors in Computer Science and Information Technology) is a
                 four years Eight Semesters Undergraduate Degree affiliated to Tribhuvan 
                 University (TU) which is designed to provide the student with all sorts
                  of knowledge in the field of Information Technology, Networking, Artificial 
                  Intelligence, Computing, Database, Programming, Software Development, Data Structure
                   & Algorithm. Orchid International College is running a CSIT course since 2010 AD.
                </p>
                <p>
                Orchid International college one of the top IT college in Kathmandu which is preferred by
                 students searching for affordable best BSc.CSIT College in Nepal. It is the college not only 
                 having the professional team of teachers but also facilitates for the students that encourage
                  students to study and aims for the bright future. The college focus on standard Qualitative Education.
                   The BSc.CSIT degree of Orchid International college is famous globally due to the teachers who give the
                    theoretical and practical knowledge required by a CSIT student and could sustain worth in the professional 
                    world thus making the college one of the top BSc CSIT Colleges in KTM Nepal.
                </p>
            </div>
            {
                csit.map((orchid,index)=>
                <div>
                    <div className={styles.bscTitle}>
                        {orchid.title}
                        </div>
                        <div className={styles.bscPoints}>
                            {orchid.description.map((item,index)=>
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
                 <div className={styles.eligibilityInfo}>
                     <strong>Eligibility & Admission process for CSIT</strong>
                     <p>
                     <span>CSIT Eligibility Criteria :</span>
                     </p>
                     <p>
                     The candidate applying for BSc CSIT program must have:
                     <ol>
                         <li>
                         Successfully completed 10+2 or equivalent with Physics, Chemistry and Mathematics..
                         </li>
                         <li>
                         Secured a minimum grade C in each subject.
                         </li>
                     </ol>
                         <span>Note:</span> Regarding A Level, students should have secured minimum grade D in Physics, Chemistry and Mathematics.
                         </p>
                         <p>
                             <span>CSIT ADMISSION PROCESS:</span>
                             <p>
                             In order to get admission in the CSIT program, a student should fill up the Entrance 
                             Application Form from any of the Affiliated or Constituent Colleges offering CSIT course
                              and should pass the Entrance Examination conducted by Institute of Science and Technology
                               (IOST), TU and then can get the admission at the respective colleges.
                             </p>
                             <span>Note:</span>  TU Entrance Examination Application forms are available at all colleges that offer BSc CSIT.
                         </p>
                 </div>
                 <div className={styles.creditHours}>
                     <strong>BSc CSIT CREDITS HOURS:</strong>
                     <p>There are eight semesters with 126 credit hours. This program comprises of the following courses:</p>
                  <Table columns={creditcolumns} dataSource={creditdata} pagination={false} bordered={false}/>
                 </div>
                 <div className={styles.gradingSystem}>
                     <strong>BSc.CSIT GRADING SYSTEM :</strong>
                     <Table columns={gradingcolumns} dataSource={gradingdata} pagination={false} bordered={false}/>
                      </div>
                 <div className={styles.courseStructure}>
                     <strong>BSc.CSIT COURSE STRUCTURE & SYLLABUS:</strong>
                     <div className={styles.syllabus}>
                     <span>Syllabus  Revised  Notice:</span>
                     <p>
                     Tribhuvan University - Institute of Science and Technology (IOST) has revised the syllabus for
                      its BSc CSIT (Bachelors in Computer Science and Information Technology) Course effective from 
                      the 2074/75 Batch.
                     </p>
                     </div>
                     <div className={styles.newCourseStructure}>
                         <strong>BSc CSIT NEW (074/75) SYLLABUS COURSE STRUCTURE</strong>
                     <Collapse expandIcon={()=><PlusOutlined />}>
                     <Panel header='First Semester'>
                     <Table columns={firstsemcolumns} dataSource={firstsemdata} pagination={false} bordered={false}/>
                     </Panel>
                     <Panel header='Second Semester'>
                     <Table columns={secondsemcolumns} dataSource={seconsemdata} pagination={false} bordered={false}/>
                     </Panel>
                     <Panel header='Third Semester'>
                     <Table columns={thirdsemcolumns} dataSource={thirdsemdata} pagination={false} bordered={false}/>
                     </Panel>
                     <Panel header='Fourth Semester'>
                     <Table columns={fourthsemcolumns} dataSource={fourthsemdata} pagination={false} bordered={false}/>
                     </Panel>
                     <Panel header='Fifth Semester'>
                     <Table columns={fifthsemcolumns} dataSource={fifthsemdata} pagination={false} bordered={false}/>
                     <div className={styles.elective}>
                         <strong>List of Electives:</strong>
                         <p>
                             <ol>
                                 <li>Multimedia Computing (CSC 319)</li>
                                 <li>Wireless Networking (CSC 320)</li>
                                 <li>Image Processing (CSC 321)</li>
                                 <li>Knowledge Management (CSC 322)</li>
                                 <li>Society and Ethics in Information Technology (CSC 323)</li>
                                 <li>Microprocessor Based Design (CSC 324)</li>
                             </ol>
                         </p>
                     </div>
                     </Panel>
                     <Panel header='Sixth Semester'>
                     <Table columns={sixthsemcolumns} dataSource={sixthsemdata} pagination={false} bordered={false}/>
                     <div className={styles.elective}>
                         <strong>List of Electives:</strong>
                         <p>
                             <ol>
                                 <li>Applied Logic (CSC 369)</li>
                                 <li>E-Commerce (CSC 370)</li>
                                 <li>Automation and Robotics (CSC 371)</li>
                                 <li>Neural Networks (CSC  372)</li>
                                 <li>Computer Hardware Design (CSC 373)</li>
                                 <li>Cognitive Science (CSC 374)</li>
                             </ol>
                         </p>
                     </div>
                     </Panel>
                     <Panel header='Seventh Semester'>
                     <Table columns={seventhsemcolumns} dataSource={seventhsemdata} pagination={false} bordered={false}/>
                     <div className={styles.elective}>
                         <strong>List of Electives:</strong>
                         <p>
                             <ol>
                                 <li>Information Retrival (CSC 413)</li>
                                 <li>Database Administration (CSC 414)</li>
                                 <li>Software Project Management (CSC 415)</li>
                                 <li>Network Security (CSC 416)</li>
                                 <li>Digital System Design (CSC 417)</li>
                                 <li>International Marketing (MGT 418)</li>
                             </ol>
                         </p>
                     </div>
                     </Panel>
                     <Panel header='Eighth Semester'>
                     <Table columns={eighthsemcolumns} dataSource={eighthsemdata} pagination={false} bordered={false}/>
                     <div className={styles.elective}>
                         <strong>List of Electives:</strong>
                         <p>
                             <ol>
                                 <li>Advanced Networking with IPV6 (CSC463)</li>
                                 <li>Distributed Networking (CSC464)</li>
                                 <li>Game Technology (CSC465)</li>
                                 <li>Distributed and Object Oriented Database (CSC466)</li>
                                 <li>Introduction to Cloud Computing (CSC467)</li>
                                 <li>Geographical Information System (CSC468)</li>
                                 <li>Decision Support System and Expert System (CSC469)</li>
                                 <li>Mobile Application Development (CSC470)</li>
                                 <li>Real Time Systems (CSC471)</li>
                                 <li>Network and System Administration (CSC472)</li>
                                 <li>Embedded Systems Programming (CSC473)</li>
                                 <li>International Business Management (MGT474)</li>
                             </ol>
                         </p>
                     </div>
                     </Panel>
                     </Collapse>
                     </div>
                 </div>
                 <div className={styles.futureScope}>
                     <strong>Future Job Scope After Completing BSc CSIT :</strong>
                     <ul>
                         <li>Cloud Architect</li>
                         <li>Web Designer</li>
                         <li>Network Administrator</li>
                         <li>Technical Support Engineer</li>
                         <li>Application Developer</li>
                         <li>Network Architect</li>
                         <li>Software Engineers</li>
                         <li>Java Developer</li>
                         <li>Data Quality Manager</li>
                         <li>Web Developer</li>
                         <li>Network Administrator</li>
                         <li>Database Administrator</li>
                         <li>Technical Specialist</li>
                         <li>Help Desk Technician</li>
                         <li>.NET Developer</li>
                         <li>IT Engineers</li>
                         <li>Cryptographers</li>
                         <li>Project Managers</li>
                         <li>Application Developer</li>
                         <li>Computer System Analyst</li>
                         <li>IT Managers</li>
                         <li>SEO Specialist</li>
                         <li>many more…</li>

                     </ul>
                 </div>
                 <div className={styles.refernce}>
                     <strong>Reference</strong>
                     <Link href='https://cdcsit.edu.np/'>
                     <a target='_blank'>
                     <p>Centeral Department Of Computer Science & Information Technology</p>
                     </a>
                     </Link>
                     <Link href='https://www.tuiost.edu.np/'>
                     <a target='_blank'>
                     <p>Institute Of Science & Technology</p>
                     </a>
                     </Link>
                     <Link href='https://en.wikipedia.org/wiki/Bachelor_of_Science_in_Information_Technology'>
                     <a target='_blank'>
                     <p>BSc.CSIT Wikipedia</p>
                     </a>
                     </Link>
                     <Link href='https://www.tuiost.edu.np/college/affiliated'>
                     <a target='_blank'>
                     <p>CSIT Affiliated College in Nepal</p>
                     </a>
                     </Link>

                 </div>
           
            </div>
            
    )
}

export default BSC
