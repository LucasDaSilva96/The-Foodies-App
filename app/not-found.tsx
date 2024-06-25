import React from 'react';

export default function NotFound() {
  return (
    <main className='w-screen min-h-screen flex flex-col gap-4 items-center py-4'>
      <h1 className='text-4xl text-amber-600 font-bold tracking-normal uppercase drop-shadow-md'>
        Not found
      </h1>
      <p className='italic text-wrap font-light text-lg py-8'>
        Unfortunately, we could not find the requested page or resource.
      </p>
    </main>
  );
}
