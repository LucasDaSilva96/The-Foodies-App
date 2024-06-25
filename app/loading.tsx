import React from 'react';
import { LoaderIcon } from 'lucide-react';

export default function MealsLoading() {
  return (
    <div className='absolute z-[100] top-0 left-0 w-screen h-screen flex items-center justify-center backdrop-blur-md'>
      <LoaderIcon className='motion-safe:animate-spin' />
    </div>
  );
}
