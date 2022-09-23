import Logo from '../assets/ignite-logo.svg';
import styles from './Header.module.css';

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <img src={Logo} alt="Logo do ignite feed" />
    </header>
  );
}
