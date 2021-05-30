import React from 'react'
import styles from './Success.module.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function SuccessStories() {
    const stories =[
        {
            image:'/prabesh.jpg',
            title:' Prabesh Adhikari (BIM 2069 Batch)',
            job: '(Business Development Officer at NMB Bank Limited)',
            description:` "No matter how brilliant you were in high school, but it matters how you challenge
             the shock that you get in course of your degree at college. You can’t expect an easy ride through
              your college degree; endless deadlines and constant study sessions rather you needed to do more 
              work continuously for the succinct achievement. Thus, Orchid International College (OIC) stood as
               a whole package for degree that did not only taught me to score grades but also a skill, personality,  
               attitude, motivation and career development. Furthermore, OIC helped me
                  to use my time and build patience in addressing obstacles that may be 
                  faced in the future." `,
        },
        {
            image:'/PRAMITA.jpg',
            title:'PARAMITA KANDEL ',
            job:'Marketing Officer @ AP1 TV',
            description:` "I was lucky enough to be student at Orchid Int’l College. Among
            thousands of reasons I admire about Orchid, supportive faculty, great learning atmosphere, countless 
            opportunities and impeccable facilities were something that has helped me be who I am today. Thank 
            you Orchid for helping me explore and sharpen my potentialities." `, 
        },
        {
            image:'/tika.jpg',
            title:'TIKA POKHREL ',
            job:'Software Engineer @  Capital and Financial Service, USA',
            description:`"Currently, I’m working as ‘Software Engineer’ in Capital One Financial Services. 
            Capital One Financial Corporation is a bank holding company specializing in credit cards,
             auto loans, banking and savings products. I’m developing and supporting the 2/3 banking application 
             (developing the application by using JAVA). So far, I’m doing good. Here, it’s really hallenging to 
             work in IT sector. But I’m doing my job pretty good because the knowledge, discipline, experience, 
             and environment that I learned/got from the Orchid International college. Thank you so much to College for
              everything."`,
        },
        {
            image:'/prem.jpg',
            title:'Prem Krishna Nakarmi (BIM 2067 Batch)',
            job:'(Software Engineer at Creospan Inc. (Cyberbridge International, USA)',
            description:`" Being a part of orchid family, I have acquired distinctive skills and expertise which helped me
             to achieve a success in implementing diversified fields of studies. Currently, I am pursuing Masters in Computer
              Science and working as a Software designer at Creospan Inc. (Cyberbridge International, USA) The support and help
               I received from qualified team of Orchid has helped me to present myself as competent lecturer and software developer
                for an ambitious person like me in IT field."`,
        },
    ]
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 2
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return (
        <div className={styles.storiesWrapper}>
            <Carousel
            responsive={responsive}
            showDots
            arrows={false}
            infinite
            customTransition='all .10'
            autoPlay={true}
            draggable
            swipeable
            >
           { 
           stories.map((story,index)=>
           <div className={styles.storiesBox}>
                <div className={styles.storiesText}>
                    <p>
                        {story.description}				
                    </p>
                    </div>
                <div className={styles.storiesImageBox}>
                    <img src={story.image} width='83px' height='83px'/>
                    <div className={styles.info}>
                    <strong>
                    {story.title}
                    </strong>
                    <span>
                      {story.job}
                    </span>
                    </div>
                     </div>

            </div>
            )
            }
            </Carousel>
            
        </div>
    )
}

export {SuccessStories}
