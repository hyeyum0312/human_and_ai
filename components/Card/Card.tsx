import React from 'react';
import "./card.scss";
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
    <Link className="card" href={`/details/${props.id}`}>
      <div className="cardTop">
        <div className="cardTopIcons">
          <span className="cardSubjectIcon">🩷</span>
          <SvgIcon icon="bookmark" size="20px" color="red" />
        </div>
        <div className="cardTopMain">
          <div className="cardTopMainTitleWrap">
            <div className="cardTopMainKind">{props.type}</div>
            <p className="cardTopMainTitle">{props.title}</p>
          </div>
          <p className="cardTopMainDesc">{props.description}</p>
          <p className="cardTopMainNickname">{props.nickname}</p>
        </div>
      </div>
      <div className="cardBottom">
      <div className="cardBottomMainItem">
            <SvgIcon icon="bookmark" size="10px" color="#7D7C77" />
            <span className="cardBottomMainItemData">{}</span>
          </div>

          <div className="cardBottomMainItem">
            <SvgIcon icon="view" size="10px" color="#7D7C77" />
            <span className="cardBottomMainItemData">000</span>
          </div>

          <div className="cardBottomMainItem">
            <SvgIcon icon="play" size="10px" color="#7D7C77" />
            <span className="cardBottomMainItemData">000</span>
          </div>
      </div>
    </Link>
  );
}