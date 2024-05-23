// Icon.tsx
import React from 'react';
import styles from './Icon.module.css';

interface IconProps {
  icon: string;
  size?: string;
  color?: string;
}

const Icon: React.FC<IconProps> = ({ icon, size = '24px', color = 'red' }) => {
  const iconClassName = styles[`${icon}Icon`];

  const iconStyle = {
    width: size,
    height: size,
    fill: color,
    stroke: color
  };

  return <div className={iconClassName} style={iconStyle} />;
};

export default Icon;