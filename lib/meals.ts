import { S3 } from '@aws-sdk/client-s3';
import { Meal } from '@/components/MealItem';
import { sql } from '@vercel/postgres';

const s3 = new S3({
  region: 'eu-north-1',
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

export async function getMeals() {
  // Fetch the result from the database
  const res = await sql`SELECT * FROM meals row`;

  // Type assertion to Meal[]
  const meals = res.rows;

  if (meals) {
    return meals as Meal[];
  } else {
    return [];
  }
}

export async function getMeal(slug: string) {
  // Fetch the result from the database with the given slug
  const res = await sql`SELECT * FROM meals WHERE slug = ${slug}`;

  // Extract the first meal from the result
  const meal: unknown = res.rows[0];

  return meal as Meal;
}

export async function saveMeal(meal: Meal) {
  meal.slug = meal.title.toLowerCase().replace(/\s/g, '-');

  if (meal.image && meal.image.name !== 'undefined' && meal.image.size > 0) {
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

  await sql`INSERT INTO meals (title, slug, image, summary, instructions, creator, creator_email) VALUES (${meal.title}, ${meal.slug}, ${meal.image}, ${meal.summary}, ${meal.instructions}, ${meal.creator}, ${meal.creator_email})`;
}
