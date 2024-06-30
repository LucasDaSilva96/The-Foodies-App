'use server';
import { redirect } from 'next/navigation';
import { saveMeal } from './meals';
import { revalidatePath } from 'next/cache';
import axios from 'axios';

function validateForm(formData: FormData) {
  const title = formData.get('title') as string;
  const summary = formData.get('summary') as string;
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const instructions = formData.get('instructions') as string;

  if (!title || !summary || !name || !email || !instructions) {
    return false;
  }

  return true;
}

export async function shareMeal(formData: FormData) {
  if (validateForm(formData)) {
    // const meal = {
    //   title: formData.get('title') as string,
    //   summary: formData.get('summary') as string,
    //   creator: formData.get('name') as string,
    //   creator_email: formData.get('email') as string,
    //   image: formData.get('image') as File,
    //   instructions: formData.get('instructions') as string,
    // };

    // Save the meal to the database
    // await saveMeal(meal);
    await axios.post('/api/share', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    // Revalidate the meals page to show the new meal
    revalidatePath('/meals');

    // Wait for a short period to ensure the image is available
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Redirect to the meals page
    redirect('/meals');
  } else {
    alert('Please fill out all the fields');
  }
}
