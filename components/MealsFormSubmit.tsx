'use client';
import React from 'react';
import { useFormStatus } from 'react-dom';

export default function MealsFormSubmit() {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      className={`bg-slate-50 py-1 rounded-md transition-all will-change-auto ${
        !pending ? 'cursor-pointer' : 'cursor-wait'
      } hover:bg-black hover:text-slate-50 font-medium`}
      type='submit'
    >
      {!pending ? 'Share' : 'Submitting...'}
    </button>
  );
}
