"use client"; 
import React, { useState, useEffect } from 'react';
import styles from '../../styles/common/UpArrow.module.css';

const UpArrow: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 0);
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div
      className={`${styles.upArrow} ${isVisible ? styles.visible : styles.hidden}`}
      onClick={scrollToTop}
    >
      <span>&#8593;</span>
    </div>
  );
};

export default UpArrow;
