import React from 'react'
import Button from '../components/Button'

import styles from '../styles/header.module.css'

const Header = () => {
    return (
        <header className={styles.header}>
            <h1>
                Recipe finder
            </h1>

            <h3>
                Nicolás Kenny
            </h3>
        </header>
    )
}

export default Header
