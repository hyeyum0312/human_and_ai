import React from 'react';
import styles from '../styles/styles.module.css'
import SvgIcon from './Icon/SvgIcon'
export default function Card() {
  return (
    <div className={styles.card}>
      <div className={styles.cardTop}>
        <div className={styles.cardTopIcons}>
          <span className={styles.cardSubjectIcon}>🩷</span>
          <SvgIcon icon="bookmark" size="20px" color="red" />
        </div>
        <div className={styles.cardTopMain}>
          <div>

          </div>
        </div>
        <div className={styles.cardTopFooter}></div>
      </div>
      <div className={styles.cardBottom}>
        <div className={styles.cardBottomMain}></div>
      </div>
    </div>
  );
}