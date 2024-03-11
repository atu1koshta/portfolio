// Menu.tsx
import React from 'react';
import styles from '../../styles/common/Menu.module.css';

interface MenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const Menu: React.FC<MenuProps> = ({ isOpen, toggleMenu }) => {
  return (
    <div className={`${styles.menu} ${isOpen ? styles.open : ''}`}>
      <div className={styles.menuItems}>
        <ul>
          <li>Home</li>
          <li>About Me</li>
          <li>Skills</li>
          <li>Projects</li>
          <li>Contact</li>
          {/* Add more menu items as needed */}
        </ul>
      </div>
      <div className={styles.overlay} onClick={toggleMenu}></div>
    </div>
  );
};

export default Menu;
