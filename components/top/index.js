import styles from '../molecule/header/Header.module.css';
import React,{useState} from 'react'
import Image from 'next/image';
import {BellOutlined,DownloadOutlined,GlobalOutlined,DownOutlined,DownSquareOutlined,MenuOutlined} from '@ant-design/icons'
import { ButtonComponent as Button } from '../atom/button';
import Link from 'next/link';
import {useRouter} from 'next/router';
import { Menu, Dropdown,Button as StyledButton  } from 'antd'; 
import { Drawers } from '../drawer';
const{SubMenu} = Menu;
const TopComponent = () => {
    const router = useRouter()
    const [visible,setVisible] = useState(false)
    const aboutMenu = (
        <Menu>
            <Menu.Item key="0">
            <Link href='/about-us'>
                <a className={styles.menuItem}>About Us </a>
                </Link>
            </Menu.Item>
            <Menu.Item key="1">
            <Link href='/faculty-members'>
                <a className={styles.menuItem}>Faculty Members </a>
                </Link>
            </Menu.Item>
        </Menu>
         );
         
    const programMenu = (
         <Menu>
             <SubMenu  title={<strong className={styles.subMenuTitle}>Bachelor Level</strong>}>
             <Menu.Item key="0">
            <Link href='/bsc-csit'>
                <a className={styles.menuItem}> Bsc CSIT </a>
                </Link>
            </Menu.Item>
             </SubMenu>
         </Menu>
    );
    const admissionMenu = (
        <Menu>
            <Menu.Item>
            <Link href='/admission-procedure'>
                <a className={styles.menuItem}> Admission Procedure </a>
                </Link>
            </Menu.Item>
            <Menu.Item>
            <Link href='/apply-online'>
                <a className={styles.menuItem}> Apply Online </a>
                </Link>
            </Menu.Item>
        </Menu>
    );
    return (
        <div>
             <div className={styles.buttonContainer}>
            <div className={styles.buttonWrapper}>
     <Button label='Notice' icon={<BellOutlined className={styles.buttonIcon} />}/>
      <Button label='Download' onClick={()=>{console.log('click1')}} icon={<DownloadOutlined className={styles.buttonIcon} />}/>
          <Button onClick={()=>router.push('/map')} label='View College Map' icon={<GlobalOutlined className={styles.buttonIcon} />}/>
             
    </div>
            </div>
            <div className={styles.wrapper}>
            <div className={styles.imageBox}>
                <Link href='/home' passHref>
                <Image src='/logo.png' height='67px' width='241px' quality={100}/>
                </Link>
                
            </div>
            <div className={styles.information}>
                <div className={styles.callSupport}>
                    <div className={styles.icon}>
                    <Image src='/phone.png' width='32px' height='32px' quality={100}/>
                    </div>
                    <div className={styles.subInfo}>
                        <strong className={styles.title}>Call Support</strong>
                        <strong className={styles.number}>01-4479744 | 01-4479745</strong>
                    </div>
                </div>
                <div className={styles.location}>
                <div className={styles.icon}>
                    <Link href='/map' passHref>
                    <img style={{cursor:'pointer'}}  src='/location.png' width='32px' height='32px'/>
                    </Link>
                   
                    </div>
                    <div className={styles.subInfo}>
                        <Link href='/map' passHref>
                        <strong style={{cursor:'pointer'}}  className={styles.title}>Location</strong>
                        </Link>
                        
                        <strong className={styles.number}>Behind Maiti Nepal - Bijay Chowk, Gaushala, Kathmandu</strong>
                    </div>
                </div>
            </div>
            
            
        </div>
        <div className={styles.navWrapper}>
        <div className={styles.navLogo}>
                <Link href='/home' passHref>
                <Image src='/logo.png' height='67px' width='241px' quality={100}/>
                </Link>
                
            </div>
            <div className={styles.navContainer}>
                <Link href='/home'>
                <a className={styles.navItem}>Home</a>
                </Link>
                <Dropdown overlay={aboutMenu} trigger={['hover']}>
                 <strong className={styles.navItem}>About <DownOutlined className={styles.navIcon} /></strong>
                </Dropdown>
                <Dropdown overlay={programMenu} trigger={['hover']}>
                <strong className={styles.navItem}>Programs <DownOutlined className={styles.navIcon} /></strong>
                </Dropdown>
                
                <Link href='/news-events'>
                <a className={styles.navItem}>News & Events</a>
                </Link>
                <Link href='/gallery'>
                <a className={styles.navItem}>Gallery</a>
                </Link>
                <Dropdown overlay={admissionMenu} trigger={['hover']}>
                <strong className={styles.navItem}>Admission <DownOutlined className={styles.navIcon} /></strong>
                </Dropdown>
                
                <Link href='/contact-us'>
                <a className={styles.navItem}>Contact Us</a>
                </Link>
            </div>
            <div className={styles.menuIcon}>
            <MenuOutlined onClick={()=>setVisible(!visible)} />

            </div>
        </div>
        <Drawers visible={visible} onClose={()=>setVisible(false)}/>
        
            
        </div>
    )
}

export {TopComponent}
