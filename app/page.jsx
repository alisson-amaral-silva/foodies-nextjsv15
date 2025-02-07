import ImageSlideshow from '@/components/Images/image-slideshow'
import style from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <header className={style.header}>
        <div className={style.slideshow}>
        <ImageSlideshow />
        </div>
        <div>
          <div className={style.hero}>
            <h1>NextLevel Food</h1>
            <p>Taste & share food from all over the world.</p>
          </div>
          <div className={style.cta}>
            <Link href="/community">Join the Community</Link>
            <Link href="/meals">Explore Meals</Link>
          </div>
        </div>
      </header>
      <main>
        <section className={style.section}>
          <h2>How it works</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>

        <section className={style.section}>
          <h2>Why NextLevel Food?</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>
      </main>
    </>
  )
}
