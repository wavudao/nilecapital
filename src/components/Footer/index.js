import React from 'react'
import styles from "./Footer.module.scss";

const Footer  = () => {
    return (
        <div className={styles.footer_layout}>
            <div className={styles.footer_info}>
                <div className={styles.footer_info_logo}>
                    <img/>
                    <p>User driven crypto research and investment community</p>
                </div>
                <div className={styles.footer_info_linksbox}>
                    <div className={styles.footer_info_links}>
                        <p>General Information</p>
                        <p>Market Commentary</p>
                    </div>
                    <div className={styles.footer_info_links}>
                        <p>Account</p>
                        <p>Team</p>
                        <p>FAQ</p>
                    </div>
                    <div className={styles.footer_info_links}>
                        <p>Terms of use</p>
                        <p>Privacy Policy</p>
                    </div>
                </div>
            </div>
            <div className={styles.footer_media}> 
                <div className={styles.footer_socialmedia}>
                    <img/>
                    <img/>
                    <img/>
                    <img/>
                    <img/>
                </div>
                <div>
                    <p>2022 publish by utafiti</p>
                </div>
                <div>
                    <p>Design & development</p>
                </div>
            </div>
        </div>
    )
}

export default Footer