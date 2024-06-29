'use client';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logoImg from '@/assets/icons/icon.png';
import { usePathname } from 'next/navigation';
import { motion, useAnimate } from 'framer-motion';
import { MenuToggle } from './MenuToggle';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const path = usePathname();
  const [scope, animate] = useAnimate();
  const headerRef = useRef<HTMLHeadElement>(null);
  const [isVisible, setIsVisible] = useState(true);

  // Hide the header on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        const rect = headerRef.current.getBoundingClientRect();
        const is_Visible = rect.top === 0 || rect.top > -50;

        setIsVisible(is_Visible);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  //
  useEffect(() => {
    animate([
      [
        'path.top',
        { d: isOpen ? 'M 3 16.5 L 17 2.5' : 'M 2 2.5 L 20 2.5' },
        { at: '<' },
      ],
      ['path.middle', { opacity: isOpen ? 0 : 1 }, { at: '<' }],
      [
        'path.bottom',
        { d: isOpen ? 'M 3 2.5 L 17 16.346' : 'M 2 16.346 L 20 16.346' },
        { at: '<' },
      ],
    ]);
    if (!isVisible) setIsOpen(false);
  }, [isOpen, isVisible]);

  return (
    <header
      ref={headerRef}
      className='w-screen flex items-center justify-between overflow-x-hidden z-50 shadow-md py-2 '
    >
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
            className={`${
              path === '/'
                ? 'border-amber-600 font-medium'
                : 'border-transparent'
            } transition-all border-b-2 hover:border-amber-600`}
            href={'/'}
          >
            Home
          </Link>
          <Link
            className={`${
              path === '/meals'
                ? 'border-amber-600 font-medium'
                : 'border-transparent'
            } transition-all border-b-2  hover:border-amber-600`}
            href={'/meals'}
          >
            Meals
          </Link>
          <Link
            className={`${
              path === '/meals/share'
                ? 'border-amber-600 font-medium'
                : 'border-transparent'
            } transition-all border-b-2  hover:border-amber-600`}
            href={'/meals/share'}
          >
            Share Meal
          </Link>
          <Link
            className={`${
              path === '/community'
                ? 'border-amber-600 font-medium'
                : 'border-transparent'
            } transition-all border-b-2  hover:border-amber-600`}
            href={'/community'}
          >
            Community
          </Link>
        </nav>
      </div>

      <aside ref={scope} className='block lg:hidden'>
        <MenuToggle toggle={() => setIsOpen((prev) => !prev)} isOPen={isOpen} />
        <motion.nav
          initial={{ x: '150%' }}
          animate={{ x: isOpen ? 0 : '150%' }}
          transition={{ duration: 0.2, ease: 'linear' }}
          className={`flex flex-col min-w-[300px] right-0 bg-zinc-700 text-slate-50 h-screen overflow-y-auto absolute top-0 transition-all pt-[6%] px-2 gap-4 shadow-lg z-10 `}
        >
          <Link
            onClick={() => {
              setIsOpen(false);
            }}
            className={`${
              path === '/' ? 'scale-125 text-amber-500' : 'no-underline'
            } text-center transition-all `}
            href={'/'}
          >
            Home
          </Link>
          <Link
            onClick={() => {
              setIsOpen(false);
            }}
            className={`${
              path === '/meals' ? 'scale-125 text-amber-500' : 'no-underline'
            } text-center transition-all `}
            href={'/meals'}
          >
            Meals
          </Link>
          <Link
            onClick={() => {
              setIsOpen(false);
            }}
            className={`${
              path === '/meals/share'
                ? 'scale-125 text-amber-500'
                : 'no-underline'
            } text-center transition-all `}
            href={'/meals/share'}
          >
            Share Meal
          </Link>
          <Link
            onClick={() => {
              setIsOpen(false);
            }}
            className={`${
              path === '/community'
                ? 'scale-125 text-amber-500'
                : 'no-underline'
            } text-center transition-all `}
            href={'/community'}
          >
            Community
          </Link>
        </motion.nav>
      </aside>
    </header>
  );
}
