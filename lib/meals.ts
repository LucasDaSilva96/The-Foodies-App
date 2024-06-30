import { S3 } from '@aws-sdk/client-s3';
import { Meal } from '@/components/MealItem';
import sql from 'better-sqlite3';

const s3 = new S3({
  region: 'eu-north-1',
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

const db = sql('meals.db');

export async function getMeals() {
  // Fetch the result from the database
  const res = db.prepare('SELECT * FROM meals').all();

  // Type assertion to Meal[]
  const meals: Meal[] = res as Meal[];

  if (meals) {
    return meals;
  } else {
    return [];
  }
}

export function getMeal(slug: string) {
  const res = db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);

  const meal: Meal = res as Meal;

  return meal;
}

export async function saveMeal(meal: Meal) {
  meal.slug = meal.title.toLowerCase().replace(/\s/g, '-');

  if (meal.image.name !== 'undefined' && meal.image.size > 0) {
    // Save the image to the public/images directory
    const extension = meal.image.name.split('.').pop();
    const fileName = `${meal.title}${Date.now()}.${extension}`.toLowerCase();

    const bufferedImage = await meal.image.arrayBuffer();

    s3.putObject({
      Bucket: 'lucasdasilva-nextjs-users-image',
      Key: fileName,
      Body: Buffer.from(bufferedImage),
      ContentType: meal.image.type,
    });

    // Insert the meal into the database
    meal.image =
      'https://lucasdasilva-nextjs-users-image.s3.eu-north-1.amazonaws.com/' +
      fileName;
  } else {
    meal.image =
      'https://lucasdasilva-nextjs-users-image.s3.eu-north-1.amazonaws.com/gallery.png';
  }

  db.prepare(
    `INSERT INTO meals (title, summary, instructions, creator, creator_email, image, slug) VALUES (
      @title,
      @summary,
      @instructions,
      @creator,
      @creator_email,
      @image,
      @slug)`
  ).run(meal);
}
