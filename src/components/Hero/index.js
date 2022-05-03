import React from 'react'
import styles from './Hero.module.scss';

const Hero = () => {
    return(
        <div className={styles.hero_layout}>
            <div className={styles.menu_main}>
                <div className={styles.logo}>
                    utafiti
                </div>
            </div>
        </div>
    )
}

export default Hero;