import MealsGrid from '@/components/Meals/MealsGrid/meals-grid'
import { getMeals } from '@/lib/meals'
import Link from 'next/link'
import { Suspense } from 'react'
import styles from './page.module.css'

async function Meals() {
  const meals = await getMeals()

  return <MealsGrid meals={meals} />
}

export default function MealsPage() {
  return (
    <>
      <header className={styles.header}>
        <h1>
          Delicious meals, created{' '}
          <span className={styles.highlight}> by you</span>
        </h1>
        <p>Choose your favorite recipe and cook it yourself</p>
        <p className={styles.cta}>
          <Link href="/meals/share">Share your favorite recipe</Link>
        </p>
      </header>
      <main>
        <Suspense fallback={<p className={styles.loading}>Fetching meals...</p>}>
          <Meals />
        </Suspense>
      </main>
    </>
  )
}
