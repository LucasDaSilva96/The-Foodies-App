import MealsGrid from '@/components/MealsGrid';
import Link from 'next/link';
import { LoaderIcon } from 'lucide-react';
import React, { Suspense } from 'react';
import { getMeals } from '@/lib/meals';

export const metadata = {
  title: 'Meals',
  description: 'Delicious meals, created by you.',
};

async function Meals() {
  const meals = await getMeals();

  return (
    <div className='w-[85%]'>
      {meals && meals.length > 0 ? (
        <MealsGrid mealItems={meals} />
      ) : (
        <p className='text-center text-2xl text-amber-600 font-semibold'>
          No meals found.
        </p>
      )}
    </div>
  );
}

export default async function MealsPage() {
  return (
    <div>
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
      <main className=' w-full flex items-center justify-center'>
        <Suspense
          fallback={<LoaderIcon className='motion-safe:animate-spin' />}
        >
          <Meals />
        </Suspense>
      </main>
    </div>
  );
}
