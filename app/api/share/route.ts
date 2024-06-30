import { saveMeal } from '@/lib/meals';
import { NextResponse, NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const meal = {
    title: formData.get('title') as string,
    summary: formData.get('summary') as string,
    creator: formData.get('name') as string,
    creator_email: formData.get('email') as string,
    image: formData.get('image') as File,
    instructions: formData.get('instructions') as string,
  };

  await saveMeal(meal);

  return NextResponse.json({ message: 'Success' });
}
