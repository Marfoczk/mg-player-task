import React from 'react'
import styles from './ProgressBar.module.scss'

export default function ProgressBar() {
    return (
        <div className={styles.progressBar}>
            <div className={styles.progress}></div>
        </div>
    )
}
