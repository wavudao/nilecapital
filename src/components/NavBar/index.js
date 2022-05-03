import React from 'react'
import styles from './NavBar.module.scss'

const NavBar = () => {
    return(
        <>
            <div className={styles.navbar_layout}>
                <div className={styles.navbar}>
                    <ul className={styles.navbar_list}>
                        <li className={styles.navbar_list_item}>General Information</li>
                        <li className={styles.navbar_list_item}>Market Commentary</li>
                        <li className={styles.navbar_list_item}>Team</li>
                        <li className={styles.navbar_list_item}>Login</li>
                    </ul>
                    <button className={styles.navbar_button}>join</button>
                </div>
            </div>
        </>
    )
}

export default NavBar