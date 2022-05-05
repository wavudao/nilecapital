import React from 'react'
import styles from './General.module.scss';
import {generalInfoData} from "./data"

const GeneralInfo = () => {
    const {date, author, category, header, subheader, time} = generalInfoData;
    return(
        <div className={styles.general_layout}>
            <div className={styles.menu_main}>
                <div className={styles.logo}>
                    utafiti_general
                </div>
            </div>
            <div className={styles.general_info_banner}>
                <div className={styles.general_info_banner_item}>
                    <h1>General Information</h1>
                    <h4>Getting started with crypto investing is now easy with you joining our
                        community. Learn how to invest in bitcoin and other cryptocurrencies. Keep
                        tabs on psychology of trading Greed index Bitcoin rainbow chart BTC & Eth dominance
                    </h4>
                </div>
                <div></div>
            </div>
            <div className={styles.general_info_list}>
                {[...Array(12)].map((item, i) => 
                    (
                        <div className={styles.general_info_card} key={i}>
                            <div className={styles.general_info_card_timestamp}>
                                <p className={styles.general_info_text}>{`${date} . ${author}`}</p>
                                <p className={styles.general_info_text}>{category}</p>
                            </div>
                            <div className={styles.general_info_card_header}>{header}</div>
                            <div className={styles.general_info_card_subheader}>{subheader}</div>
                            <div className={styles.general_info_card_read}>{time}</div>
                            <div className={styles.general_info_card_image}></div>
                        </div>
                    )
                )}
            </div>
            <div className={styles.general_info_show_more}>
                <p>LOAD MORE ARTICLES</p>
            </div>
            <div className={styles.general_info_subscribe}>
                <div className={styles.general_info_subscribe_item1}>
                    <h1>Get exclusive information that we only share with email subscribers</h1>
                </div>
                <div className={styles.general_info_subscribe_item2}>
                    <div className={styles.general_info_subscribe_inputs}>
                        <input type='text' className={styles.general_info_subscribe_input}/>
                        <div className={styles.general_info_subscribe_checkbox_container}>
                            <input type='checkbox' className={styles.general_info_subscribe_checkbox}/>
                            <p>I confirm that I read and agree to the privacy policy</p>
                        </div>
                        <button className={styles.general_info_subscribe_button}>SUBSCRIBE</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GeneralInfo;