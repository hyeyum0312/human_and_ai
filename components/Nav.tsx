import React from 'react';
import "@/styles/globals.scss";
import "@/styles/scss/ui/_layout.scss"

export default function Nav() {
  return (
    <div className="nav">
      <a className='logo'>Human&AI</a>
      <div className='profile'>
        <span className="image">H</span>
        <span className='nickname'>hyenii</span>
      </div>
    </div>
  );
}