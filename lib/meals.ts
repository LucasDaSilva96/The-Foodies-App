import { Meal } from '@/components/MealItem';
import sql from 'better-sqlite3';

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
