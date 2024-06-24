import MealsGrid from '@/components/MealsGrid';
import { getMeals } from '@/lib/meals';
import Link from 'next/link';
import React from 'react';

export default async function MealsPage() {
  const meals = await getMeals();

  return (
    <>
      <header className='w-full min-h-64 text-center py-10 px-2'>
        <h1 className='text-4xl text-amber-600 font-bold tracking-normal uppercase drop-shadow-md'>
          Delicious meals, created{' '}
          <span className='underline italic'>by you</span>{' '}
        </h1>
        <p className='italic text-wrap font-light text-lg py-8'>
          Choose your favorite recipe and cook it yourself. It is easy and fun!
        </p>

        <Link
          className='py-2 px-4 bg-amber-600 rounded-md text-slate-50 will-change-auto transition-all hover:scale-110 cursor-pointer hover:shadow-lg font-semibold'
          href={'/meals/share'}
        >
          Share Your Favorite Recipe
        </Link>
      </header>
      <main>{meals.length > 0 && <MealsGrid mealItems={meals} />}</main>
    </>
  );
}
