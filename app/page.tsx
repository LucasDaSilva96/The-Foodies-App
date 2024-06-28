'use client';
import ImageSlideGallery from '@/components/ImageSlideGallery';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <header className='flex w-screen justify-around flex-wrap gap-2 py-4 px-2 min-h-[80dvh] items-center'>
        <div className='min-w-[300px] flex flex-col justify-around gap-16'>
          <div className='flex flex-col gap-8 text-center'>
            <h1 className='text-4xl text-amber-600 font-bold tracking-normal uppercase drop-shadow-lg'>
              NextLevel Food <br /> for NextLevel Foodies
            </h1>
            <p className='italic text-wrap font-light text-lg'>
              Taste & share food from all over the world.
            </p>
          </div>
          <div className='flex items-center gap-4 w-full justify-around flex-wrap'>
            <Link
              href='/community'
              className='font-semibold border-b border-amber-600 '
            >
              Join the Community
            </Link>
            <Link
              href='/meals'
              className='py-2 px-4 bg-amber-600 rounded-md text-slate-50 will-change-transform transition-all hover:scale-105 cursor-pointer hover:shadow-lg font-semibold'
            >
              Explore Meals
            </Link>
          </div>
        </div>
        <ImageSlideGallery />
      </header>

      <section className='w-screen min-h-[500px] px-4 py-2 bg-amber-600 text-slate-50 text-center leading-relaxed relative'>
        <h2 className='py-2 font-bold text-3xl'>How it works</h2>
        <div className='flex flex-col min-h-[400px] justify-evenly'>
          <p className='tracking-wide subpixel-antialiased text-lg'>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p className='tracking-wide subpixel-antialiased text-lg'>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </div>
      </section>

      <section className='w-screen min-h-[500px] px-4 py-2 text-center leading-relaxed relative'>
        <h2 className='py-2 font-bold text-3xl text-slate-800'>
          Why NextLevel Food?
        </h2>
        <div className='flex flex-col min-h-[400px] justify-evenly'>
          <p className='tracking-wide subpixel-antialiased text-lg'>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p className='tracking-wide subpixel-antialiased text-lg'>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </div>
      </section>
    </>
  );
}
