import React from 'react';
import styles from './card.module.css';
import SvgIcon from '../Icon/SvgIcon'
import Link from 'next/link';


interface CardProps {
  id: number;
  type: string;
  title: string;
  description: string;
  nickname: string;
  bookmark: number;
  view: number;
  play: number;
}

export default function Card(props: CardProps) {
  return (
    <Link className={styles.card} href={`/details/${props.id}`}>
      <div className={styles.cardTop}>
        <div className={styles.cardTopIcons}>
          <span className={styles.cardSubjectIcon}>🩷</span>
          <SvgIcon icon="bookmark" size="20px" color="red" />
        </div>
        <div className={styles.cardTopMain}>
          <div className={styles.cardTopMainTitleWrap}>
            <div className={styles.cardTopMainKind}>{props.type}</div>
            <p className={styles.cardTopMainTitle}>{props.title}</p>
          </div>
          <p className={styles.cardTopMainDesc}>{props.description}</p>
          <p className={styles.cardTopMainNickname}>{props.nickname}</p>
        </div>
      </div>
      <div className={styles.cardBottom}>
      <div className={styles.cardBottomMainItem}>
            <SvgIcon icon="bookmark" size="10px" color="#7D7C77" />
            <span className={styles.cardBottomMainItemData}>{}</span>
          </div>

          <div className={styles.cardBottomMainItem}>
            <SvgIcon icon="view" size="10px" color="#7D7C77" />
            <span className={styles.cardBottomMainItemData}>000</span>
          </div>

          <div className={styles.cardBottomMainItem}>
            <SvgIcon icon="play" size="10px" color="#7D7C77" />
            <span className={styles.cardBottomMainItemData}>000</span>
          </div>
      </div>
    </Link>
  );
}