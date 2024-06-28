import ImagePicker from '@/components/ImagePicker';
import React from 'react';
import { Image as ImageSvg } from 'lucide-react';
import { shareMeal } from '@/lib/actions';
import MealsFormSubmit from '@/components/MealsFormSubmit';

export const metadata = {
  title: 'Share a meal',
  description: 'Share your favorite recipe with the world.',
};

export default async function ShareMealPage() {
  return (
    <>
      <header className='w-full'>
        <h1 className='text-4xl text-amber-600 font-bold tracking-normal uppercase drop-shadow-md text-center py-2'>
          Share a meal
        </h1>
      </header>
      <main className='w-full h-full flex items-center justify-center py-2 px-2'>
        <form
          action={shareMeal}
          className='bg-amber-500 py-2 px-2 max-w-lg rounded-md shadow-md flex flex-col gap-2'
        >
          <div className='flex items-center justify-between flex-wrap gap-2'>
            <div className='flex flex-col gap-1'>
              <label htmlFor='name'>Name</label>
              <input
                type='text'
                id='name'
                name='name'
                required
                autoComplete='true'
                className='py-1 rounded-md px-1'
              />
            </div>

            <div className='flex flex-col gap-1'>
              <label htmlFor='email'>Email</label>
              <input
                id='email'
                name='email'
                type='email'
                required
                autoComplete='true'
                className='py-1 rounded-md px-1'
              />
            </div>
          </div>

          <div className='flex flex-col gap-1'>
            <label htmlFor='title'>Title</label>
            <input
              id='title'
              name='title'
              type='text'
              required
              className='py-1 rounded-md px-1'
            />
          </div>

          <div className='flex flex-col gap-1'>
            <label htmlFor='summary'>Short Summary</label>
            <input
              id='summary'
              name='summary'
              type='text'
              required
              className='py-1 rounded-md px-1'
            />
          </div>

          <div className='flex flex-col gap-1'>
            <label htmlFor='instructions'>Instructions</label>
            <textarea
              id='instructions'
              rows={3}
              name='instructions'
              required
              className='py-1 rounded-md px-1'
            />
          </div>

          <ImagePicker
            label='Choose an image'
            svg={<ImageSvg />}
            name='image'
          />
          <MealsFormSubmit />
        </form>
      </main>
    </>
  );
}
