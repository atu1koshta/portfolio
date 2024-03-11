import Link from 'next/link';
import styles from '../../styles/common/Navbar.module.css';

interface NavItemProps {
  href: string;
  label: string;
}

const NavItem: React.FC<NavItemProps> = ({ href, label }) => {
  return (
    <li className={styles.navItem}>
      <Link href={href}>
        <span className={styles.navLink}>{label.toUpperCase()}</span>
      </Link>
    </li>
  );
};

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <NavItem href="/" label="Home" />
        <NavItem href="/about" label="About Me" />
        <NavItem href="/skills" label="Skills" />
        <NavItem href="/projects" label="Projects" />
        <NavItem href="/contact" label="Contact" />
      </ul>
    </nav>
  );
};

export default Navbar;
