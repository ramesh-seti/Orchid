import '../styles/globals.css'
import 'antd/dist/antd.css';
import {Footer} from '../components/molecule/footer'
import {FundFilled,EnvironmentFilled,MailFilled,PhoneFilled} from '@ant-design/icons'; 
import styles from '../components/molecule/header/Header.module.css'
import {TopComponent} from '../components/top'

function MyApp({ Component, pageProps }) {
  return<><TopComponent/> <Component {...pageProps} />
   <Footer contact={[
                                  'BBM course in Kathmandu',
                                  'BBS course in Kathmandu',
                                  'BSW course in Kathmandu',
                                  'BCA course in Kathmandu',
                                  'CSIT course in Kathmandu',
                                  ]}
                                  links={[
                                      {icon:<EnvironmentFilled className={styles.link} />,
                                        text:'Bijaychwok, Gaushala, Kathmandu'
                                    },
                                    {icon:<MailFilled className={styles.link}/>,
                                        text:'info @ oic.edu.np'
                                    },
                                    {icon:<PhoneFilled className={styles.link} />,
                                        text:'01-4479744'
                                    },
                                    {icon:<PhoneFilled className={styles.link} />,
                                        text:' 01-4479745'
                                    },
                                 ]}
                                  
                                  />

  </>
  

}

export default MyApp
