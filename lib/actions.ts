'use server';

export async function shareMeal(formData: FormData) {
  const meal = {
    title: formData.get('title') as string,
    summary: formData.get('summary') as string,
    creator: formData.get('name') as string,
    creator_email: formData.get('email') as string,
    image: formData.get('image') as File,
    instructions: formData.get('instructions') as string,
  };

  console.log(meal);
}
