import React from 'react'
import {Button} from 'antd'
import styles from './Button.module.css';

function ButtonComponent({label,icon,onClick}) {
    return (
        <div>
            <Button className={styles.button} onClick={onClick} icon={icon}>
              {label}
            </Button>
        </div>
    )
}

export  {ButtonComponent}
