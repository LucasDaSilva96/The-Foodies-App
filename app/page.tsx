'use client';
import ImageSlideGallery from '@/components/ImageSlideGallery';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import MockUp1 from '@/assets/images/Mockup-1.png';
import MockUp2 from '@/assets/images/Mockup-2.png';
import MockUp3 from '@/assets/images/Mockup-3.png';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <header className='flex w-screen justify-around flex-wrap gap-2 py-4 px-2 min-h-[80dvh] items-center'>
        <motion.div
          key={0}
          initial={{ x: -200, opacity: 0 }}
          animate={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 0.5,
              ease: 'linear',
              delay: 0.5,
            },
          }}
          exit={{ x: 200, opacity: 0 }}
          className='min-w-[300px] flex flex-col justify-around gap-16'
        >
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
              className='py-2 px-4 bg-transparent border border-amber-500 hover:bg-amber-600 text-black rounded-md hover:text-slate-50 will-change-transform transition-all hover:scale-105 cursor-pointer hover:shadow-lg font-semibold'
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
        </motion.div>
        <motion.div
          className='mt-4 lg:mt-0'
          key={1}
          initial={{ x: 200, opacity: 0 }}
          animate={{
            x: 0,
            opacity: 1,
            transition: {
              duration: 0.5,
              ease: 'linear',
              delay: 0.5,
            },
          }}
          exit={{ x: 200, opacity: 0 }}
        >
          <ImageSlideGallery />
        </motion.div>
      </header>

      <section className='w-screen min-h-[500px] px-4 py-4 bg-amber-600 text-slate-50 text-center leading-relaxed relative flex flex-col gap-4 overflow-x-hidden'>
        <h2 className='py-2 font-bold text-3xl'>How it works</h2>
        <motion.div
          className='max-w-[600px] py-2 px-2 self-center'
          initial={{ opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: 'linear' }}
        >
          <p className='tracking-wide subpixel-antialiased text-lg leading-loose'>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world.
          </p>
          <p className='tracking-wide subpixel-antialiased text-lg leading-loose'>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </motion.div>
        <div className='flex flex-col min-h-screen gap-10 w-[95%] max-w-[1200px] self-center mt-10'>
          <motion.article
            className='flex gap-4 flex-wrap px-2 py-2 justify-center sm:justify-start'
            initial={{ x: -100, opacity: 0 }}
            viewport={{ once: true }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: 'linear', delay: 0.2 }}
          >
            <aside>
              <h3 className='text-2xl font-bold'>Step 1</h3>
              <p className='text-base font-light max-w-[200px]'>
                Go to the share meal page.
              </p>
            </aside>
            <Image
              src={MockUp1}
              alt='Preview image 1'
              width={300}
              loading='lazy'
            />
          </motion.article>

          <motion.article
            className='flex gap-4 flex-wrap px-2 py-2 ml-auto justify-center sm:justify-start'
            initial={{ x: 100, opacity: 0 }}
            viewport={{ once: true }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: 'linear', delay: 0.3 }}
          >
            <aside>
              <h3 className='text-2xl font-bold'>Step 2</h3>
              <p className='text-base font-light max-w-[200px]'>
                Fill out the share meal form with your recipe.
              </p>
            </aside>
            <Image
              src={MockUp2}
              alt='Preview image 2'
              width={300}
              loading='lazy'
            />
          </motion.article>

          <motion.article
            className='flex gap-4 flex-wrap px-2 py-2 justify-center sm:justify-start'
            initial={{ x: -100, opacity: 0 }}
            viewport={{ once: true }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: 'linear', delay: 0.3 }}
          >
            <aside>
              <h3 className='text-2xl font-bold'>Step 3</h3>
              <p className='text-base font-light max-w-[200px]'>
                Press the share button and wait for the community to see your
                recipe.
              </p>
            </aside>
            <Image
              src={MockUp3}
              alt='Preview image 3'
              width={300}
              loading='lazy'
            />
          </motion.article>
        </div>
      </section>

      <section className='w-screen min-h-screen px-4 py-2 text-center leading-relaxed relative overflow-x-hidden'>
        <h2 className='pt-8 pb-4 font-bold text-3xl text-slate-800'>
          Why Use The Foodies App?
        </h2>
        <motion.ol className='flex flex-col gap-4 min-h-[600px] justify-evenly items-center leading-loose'>
          <AnimatePresence>
            <motion.li
              initial={{ opacity: 0, x: 100, scale: 0.5 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: 'spring', delay: 0.2 }}
              className='w-[370px] flex flex-col gap-2 items-center'
            >
              <h4 className='text-amber-500 text-lg font-semibold'>
                Vast Recipe Collection:
              </h4>
              <p>
                Explore a wide variety of recipes, categorized by cuisine,
                dietary restrictions, and meal types.
              </p>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: 100, scale: 0.5 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: 'spring', delay: 0.4 }}
              className='w-[370px] flex flex-col gap-2 items-center'
            >
              <h4 className='text-amber-500 text-lg font-semibold'>
                Effortless Search:
              </h4>
              <p>
                Find exactly what you need with our powerful search
                functionality, whether you are looking for specific recipes or
                ingredients.
              </p>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: 100, scale: 0.5 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: 'spring', delay: 0.6 }}
              className='w-[370px] flex flex-col gap-2 items-center'
            >
              <h4 className='text-amber-500 text-lg font-semibold'>
                Personalized Experience:
              </h4>
              <p>
                Save your favorite recipes for quick access and create a
                personalized profile to track your cooking journey.
              </p>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: 100, scale: 0.5 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: 'spring', delay: 0.8 }}
              className='w-[370px] flex flex-col gap-2 items-center'
            >
              <h4 className='text-amber-500 text-lg font-semibold'>
                Community Engagement:
              </h4>
              <p>
                Share your own recipes with the community and get inspired by
                others culinary creations.
              </p>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: 100, scale: 0.5 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: 'spring', delay: 1 }}
              className='w-[370px] flex flex-col gap-2 items-center'
            >
              <h4 className='text-amber-500 text-lg font-semibold'>
                User-Friendly Interface:
              </h4>
              <p>
                Enjoy a seamless and intuitive user experience with our Next.js
                and Tailwind CSS-powered application.
              </p>
            </motion.li>
          </AnimatePresence>
        </motion.ol>
        <motion.h3
          className='py-4 font-light text-amber-600 text-2xl'
          initial={{ opacity: 0, x: 100, scale: 0.5 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: 'spring', delay: 1 }}
        >
          Get started with The Foodies App today and elevate your culinary
          adventures!
        </motion.h3>
      </section>
    </>
  );
}
