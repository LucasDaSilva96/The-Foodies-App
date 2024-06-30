'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import mealIcon from '@/assets/icons/meal.png';
import communityIcon from '@/assets/icons/community.png';
import eventsIcon from '@/assets/icons/events.png';

import React from 'react';

export default function CommunityList() {
  return (
    <motion.ul className='flex flex-col gap-8 items-center'>
      <motion.li
        initial={{ opacity: 0, x: 100, scale: 0.5 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, type: 'spring' }}
        className='flex flex-col items-center gap-4 text-xl font-semibold'
      >
        <Image
          src={mealIcon}
          alt='A delicious meal'
          loading='lazy'
          className='max-w-56 drop-shadow-lg'
        />
        <p>Share & discover recipes</p>
      </motion.li>
      <motion.li
        initial={{ opacity: 0, x: 100, scale: 0.5 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, type: 'spring' }}
        className='flex flex-col items-center gap-4 text-xl font-semibold'
      >
        <Image
          src={communityIcon}
          alt='A crowd of people, cooking'
          loading='lazy'
          className='max-w-56 drop-shadow-lg'
        />
        <p>Find new friends & like-minded people</p>
      </motion.li>
      <motion.li
        initial={{ opacity: 0, x: 100, scale: 0.5 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, type: 'spring' }}
        className='flex flex-col items-center gap-4 text-xl font-semibold'
      >
        <Image
          src={eventsIcon}
          alt='A crowd of people at a cooking event'
          loading='lazy'
          className='max-w-56 drop-shadow-lg'
        />
        <p>Participate in exclusive events</p>
      </motion.li>
    </motion.ul>
  );
}
