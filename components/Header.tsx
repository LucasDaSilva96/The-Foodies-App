'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logoImg from '@/assets/icons/icon.png';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className='w-screen flex items-center justify-between overflow-x-hidden z-50 shadow-md py-2'>
      <aside className='flex gap-1 items-center min-w-52'>
        <Image
          src={logoImg}
          alt='A plate with food on it'
          width={50}
          priority
          className='ml-2'
        />
        <p className='font-extralight italic'>NextLevel Food</p>
      </aside>

      <div className='hidden lg:block w-full'>
        <nav className=' flex items-center justify-evenly py-4'>
          <Link
            className='transition-all border-b-2 border-transparent hover:border-amber-600'
            href={'/'}
          >
            Home
          </Link>
          <Link
            className='transition-all border-b-2 border-transparent hover:border-amber-600'
            href={'/meals'}
          >
            Meals
          </Link>
          <Link
            className='transition-all border-b-2 border-transparent hover:border-amber-600'
            href={'/meals/share'}
          >
            Share Meal
          </Link>
          <Link
            className='transition-all border-b-2 border-transparent hover:border-amber-600'
            href={'/community'}
          >
            Community
          </Link>
        </nav>
      </div>

      <aside className='pr-4 block lg:hidden z-50'>
        <Menu className='cursor-pointer' onClick={() => setIsOpen(!isOpen)} />
        <nav
          className={`flex flex-col min-w-[300px] right-0 bg-zinc-700 text-slate-50 fixed h-screen overflow-y-auto top-0 transition-all py-2 px-2 gap-4 shadow-lg  ${
            isOpen ? 'translate-x-[0]' : 'translate-x-[100dvw]'
          }`}
        >
          <X
            className='cursor-pointer self-end mt-4'
            onClick={() => setIsOpen(false)}
          />
          <Link
            className='text-center transition-all border-b-2 border-transparent hover:border-amber-600'
            href={'/'}
          >
            Home
          </Link>
          <Link
            className='text-center transition-all border-b-2 border-transparent hover:border-amber-600'
            href={'/meals'}
          >
            Meals
          </Link>
          <Link
            className='text-center transition-all border-b-2 border-transparent hover:border-amber-600'
            href={'/meals/share'}
          >
            Share Meal
          </Link>
          <Link
            className='text-center transition-all border-b-2 border-transparent hover:border-amber-600'
            href={'/community'}
          >
            Community
          </Link>
        </nav>
      </aside>
    </header>
  );
}
