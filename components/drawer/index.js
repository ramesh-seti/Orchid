import React, {useState} from 'react'
import { Drawer, Button, Menu } from 'antd';
import Link from 'next/link';
const {SubMenu} = Menu
const Drawers = ({visible,onClose}) => {

    return (
        <div>
      <Drawer
        placement="left"
        closable={true}
        visible={visible}
        onClose={onClose}
      >
        <Menu mode='inline'>
          <Menu.Item>
          <Link href='/home'><a>Home</a></Link>

          </Menu.Item>
          <Menu.Item>
          <Link href='/about-us'><a>About Us</a></Link>
          </Menu.Item>
          <SubMenu title='Program'>
            <Menu.Item>
            <Link href='/bsc-csit'><a>BSC-CSIT</a></Link>
            </Menu.Item>
          </SubMenu>
          <Menu.Item>

          <Link href='/gallery'><a>Gallery</a></Link>
          </Menu.Item>
          <Menu.Item>
          <Link href='/news-events'><a>News and Events</a></Link>
          </Menu.Item>
          <Menu.Item>
          <Link href='/contact-us'><a>Contact Us</a></Link>
          </Menu.Item>
        </Menu>
     
     
      </Drawer>
        </div>
    )
}

export {Drawers}
