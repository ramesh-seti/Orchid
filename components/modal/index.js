import React from 'react';
import { Modal, Button } from 'antd';
import ReactPlayer from 'react-player';
import styles from './Modal.module.css';
import {CloseOutlined} from '@ant-design/icons';

function ModalVideo({isVisible,onCancel}) {
    return (
        <div >
            
            <Modal 
            className={'playerWrapper'} 
            visible={isVisible}
             onCancel={onCancel} 
             footer={null} 
             width={'90%'}
             closeIcon={<div>
                 <CloseOutlined />
             </div>}
             >
                <ReactPlayer
                url='https://videopal.b-cdn.net/oic/orchid.mp4'
                width='100%'
                height='80vh'
                playing
                controls
                />

            </Modal>
            
        </div>
    )
}

export { ModalVideo}
