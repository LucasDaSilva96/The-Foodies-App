import React from 'react';
import CommunityList from '@/components/CommunityList';

export const metadata = {
  title: 'Community',
  description: 'Join our community and share your favorite recipes!',
};

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

        <CommunityList />
      </main>
    </>
  );
}
