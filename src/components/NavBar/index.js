import React from 'react'
import {Link} from 'react-router-dom'
import styles from './NavBar.module.scss'

const NavBar = () => {
    return(
        <>
            <div className={styles.navbar_layout}>
                <div className={styles.navbar}>
                    <div className={styles.navbar_list}>
                        <Link to='general' className={styles.navbar_list_item}>General Information</Link>
                        <Link to="/" className={styles.navbar_list_item}>Market Commentary</Link>
                        <Link to="/" className={styles.navbar_list_item}>Team</Link>
                        <Link to="/" className={styles.navbar_list_item}>Login</Link>
                    </div>
                    <button className={styles.navbar_button}>join</button>
                </div>
            </div>
        </>
    )
}

export default NavBar