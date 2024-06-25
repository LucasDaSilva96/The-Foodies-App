import { getMeal } from '@/lib/meals';
import Image from 'next/image';
import React from 'react';

type SlugProps = {
  params: { slug: string };
};

export default function MealSlugPage({ params }: SlugProps) {
  const meal = getMeal(params.slug);

  if (!meal)
    return (
      <h1 className='text-4xl text-amber-600 font-bold tracking-normal uppercase drop-shadow-md'>
        The selected meal was not found. Please try again.
      </h1>
    );

  if (meal.instructions) {
    meal.instructions = meal.instructions.replace(/\n/g, '<br />');
  }
  return (
    <>
      <header className='w-full pt-6 px-4 flex flex-col items-center gap-3'>
        <h1 className='text-4xl text-amber-600 font-bold tracking-normal uppercase drop-shadow-md'>
          {meal.title}
        </h1>

        <Image
          src={meal.image}
          alt={meal.title}
          width={300}
          height={300}
          className='shadow-lg rounded-md'
        />

        <p>
          By{' '}
          <a
            href={`mailto:${meal.creator_email}`}
            className=' text-amber-600 transition-all border-b border-transparent hover:border-amber-500'
          >
            {meal.creator}
          </a>
        </p>
      </header>
      <main className='w-full flex flex-col gap-4 items-center mt-6 relative px-4 pb-4'>
        <div className=''>
          <p className=''>{meal.summary}</p>
        </div>

        <div className='max-w-lg overflow-y-auto max-h-[300px] bg-zinc-700 text-slate-50 py-2 px-2 rounded-md'>
          {meal.instructions && (
            <p
              dangerouslySetInnerHTML={{
                __html: meal.instructions,
              }}
            ></p>
          )}
        </div>
      </main>
    </>
  );
}
