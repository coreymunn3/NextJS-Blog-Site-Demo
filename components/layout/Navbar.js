import Link from 'next/link';
import styles from './navbar.module.css';
import Logo from './Logo';

const Navbar = () => {
  return (
    <header className={styles.header}>
      <Link href='/'>
        <a>
          <Logo />
        </a>
      </Link>

      <nav>
        <ul>
          <li>
            <Link href='/posts'>Blog Posts</Link>
          </li>
          <li>
            <Link href='/contact'>Contact Me</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
