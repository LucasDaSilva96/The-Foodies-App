import React from 'react';
import Image from 'next/image';
import mealIcon from '@/assets/icons/meal.png';
import communityIcon from '@/assets/icons/community.png';
import eventsIcon from '@/assets/icons/events.png';

export default function CommunityPage() {
  return (
    <>
      <header className='w-screen min-h-64 text-center py-10 px-2'>
        <h1 className='text-4xl text-amber-600 font-bold tracking-normal uppercase drop-shadow-md'>
          One shared passion:{' '}
          <span className='text-amber-600 underline italic'>Food</span>
        </h1>
        <p className='italic text-wrap font-light text-lg py-8'>
          Join our community and share your favorite recipes!
        </p>
      </header>
      <main className='w-screen flex flex-col px-2 gap-6 items-center text-center py-5'>
        <h2 className='text-3xl text-gray-700 font-bold tracking-normal uppercase'>
          Community Perks
        </h2>

        <ul className='flex flex-col items-center'>
          <li className='flex flex-col items-center gap-4 text-xl font-semibold'>
            <Image
              src={mealIcon}
              alt='A delicious meal'
              loading='lazy'
              className='max-w-56 drop-shadow-lg'
            />
            <p>Share & discover recipes</p>
          </li>
          <li className='flex flex-col items-center gap-4 text-xl font-semibold'>
            <Image
              src={communityIcon}
              alt='A crowd of people, cooking'
              loading='lazy'
              className='max-w-56 drop-shadow-lg'
            />
            <p>Find new friends & like-minded people</p>
          </li>
          <li className='flex flex-col items-center gap-4 text-xl font-semibold'>
            <Image
              src={eventsIcon}
              alt='A crowd of people at a cooking event'
              loading='lazy'
              className='max-w-56 drop-shadow-lg'
            />
            <p>Participate in exclusive events</p>
          </li>
        </ul>
      </main>
    </>
  );
}
