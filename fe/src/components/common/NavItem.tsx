import Link from 'next/link';
import styles from '../../styles/common/NavItem.module.css'

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

export default NavItem;