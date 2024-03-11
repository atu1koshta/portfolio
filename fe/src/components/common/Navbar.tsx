import styles from '../../styles/common/Navbar.module.css';
import NavItem from './NavItem';


const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <NavItem href="#" label="Home" />
        <NavItem href="#about-me" label="About Me" />
        <NavItem href="#skills" label="Skills" />
        <NavItem href="#projects" label="Projects" />
        <NavItem href="#contact" label="Contact" />
      </ul>
    </nav>
  );
};

export default Navbar;
