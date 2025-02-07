import Image from 'next/image'
import logoImg from '@/assets/logo.png'
import Link from 'next/link'
import styles from './main-header.module.css'
import MainHeaderBackground from '../MainHeaderBackground/main-header-background'

export default function MainHeader() {
  return (
    <>
    <header className={styles.header}>
      <Link className={styles.logo} href="/">
        <Image src={logoImg} alt="logo image" priority />
        Next Level Food
      </Link>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href="/meals">Browse Meals</Link>
          </li>
          <li>
            <Link href="/community">Foodie  Community</Link>
          </li>
        </ul>
      </nav>
    </header>
    <MainHeaderBackground />
    </>
  )
}
