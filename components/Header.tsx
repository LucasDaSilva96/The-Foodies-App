import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <nav className='w-screen flex items-center justify-evenly py-4'>
        <Link href={'/'}>Home</Link>
        <Link href={'/meals'}>Meals</Link>
        <Link href={'/meals/share'}>Share Meal</Link>
        <Link href={'/community'}>Community</Link>
      </nav>
    </header>
  );
}
