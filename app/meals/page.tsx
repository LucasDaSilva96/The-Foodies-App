import MealsGrid from '@/components/MealsGrid';
import { getMeals } from '@/lib/meals';
import Link from 'next/link';
import { LoaderIcon } from 'lucide-react';
import React, { Suspense } from 'react';

async function Meals() {
  const meals = await getMeals();

  return <MealsGrid mealItems={meals} />;
}

export default async function MealsPage() {
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
      <main>
        <Suspense
          fallback={
            <div className='w-screen flex items-center'>
              <LoaderIcon className='motion-safe:animate-spin' />
            </div>
          }
        >
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
