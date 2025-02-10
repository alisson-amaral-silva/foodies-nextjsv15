'use server'

import { redirect } from 'next/navigation'
import { postMeal } from './meals'
import { revalidatePath } from 'next/cache'

const isInvalidText = (text) => {
  return !text || text.trim() === ''
}

export async function handleShareMealFormSubmit(prevState, formData) {
  const meal = {
    title: formData.get('title'),
    summary: formData.get('summary'),
    instructions: formData.get('instructions'),
    image: formData.get('image'),
    creator: formData.get('name'),
    creator_email: formData.get('email'),
  }

  if (
    isInvalidText(meal.title) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) ||
    isInvalidText(meal.creator) ||
    isInvalidText(meal.creator_email) ||
    !meal.creator_email.includes('@') ||
    !meal.image ||
    meal.image.size === 0
  ) {
    return {
      message: 'Invalid input.',
    }
  }

  await postMeal(meal)
  // revalidate specific path and its nested pages if there's new data
  revalidatePath('/meals', 'layout')
  redirect('/meals')
}
