import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export type Meal = {
  title: string;
  slug?: string;
  image: string | any;
  summary: string;
  creator: string;
  creator_email?: string;
  instructions?: string;
};

export default function MealItem({
  creator,
  image,
  slug,
  summary,
  title,
  creator_email,
  instructions,
}: Meal) {
  return (
    <article className='w-[300px] h-[450px] gap-3 flex flex-col items-center text-center border border-amber-500/40 py-2 rounded-md'>
      <header>
        <Image
          src={image}
          alt={title}
          width={200}
          height={200}
          className='rounded-md h-auto w-auto'
        />
        <div className='px-2 py-2'>
          <h2 className='text-lg text-amber-600 font-bold tracking-normal uppercase '>
            {title}
          </h2>
          <p>
            By: <strong>{creator}</strong>
          </p>
        </div>
      </header>

      <div className='px-2 py-1 max-h-[150px] overflow-y-scroll flex flex-col gap-2'>
        <p className='antialiased tracking-normal leading-relaxed text-wrap'>
          {summary}
        </p>

        {instructions && (
          <p className='antialiased tracking-normal leading-relaxed text-wrap'>
            {instructions}
          </p>
        )}
        {creator_email && <span className='py-1'>{creator_email}</span>}
      </div>
      <Link
        className='font-semibold py-1 px-2 bg-amber-600 text-slate-50 rounded-md will-change-auto transition-colors hover:bg-slate-50 hover:text-amber-600 border border-transparent hover:border-amber-500 mt-auto'
        href={`/meals/${slug}`}
      >
        View Details
      </Link>
    </article>
  );
}
