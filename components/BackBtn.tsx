'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

type BackBtnProps = {
  url: string;
};

export default function BackBtn({ url }: BackBtnProps) {
  const router = useRouter();

  const handleNavigation = () => {
    router.push(url, { scroll: true });
  };

  return (
    <button
      type='button'
      onClick={handleNavigation}
      className='bg-gradient-to-r from-amber-500 to-amber-600 text-slate-50 py-1 px-2 rounded-md shadow-md hover:shadow-lg transition-all will-change-auto hover:scale-105 font-medium'
    >
      Back
    </button>
  );
}
