
import Link from 'next/link'
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul>
          <li><Link href="/projects"><a>Projects</a></Link></li>
          <li><Link href="/about"><a>About</a></Link></li>
        </ul>
      </nav>
      <button>
        <span className={styles.menu}></span>
      </button>
    </header>
  );
}

export default Header