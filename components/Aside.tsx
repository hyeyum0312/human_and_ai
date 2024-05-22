import React from 'react';
import "@/styles/globals.scss";
import "@/styles/scss/ui/_layout.scss"
import SvgIcon from '@/components/Icon/SvgIcon';

export default function Aside() {
  return (
    <div className="aside">
        <button className='button'>
        <SvgIcon icon="plus" size="15px" color="black" /> 
        <p className='btnTitle' style={{marginLeft: '5px'}}>AI 제작 스튜디오</p>
        </button>
    </div>
  );
}