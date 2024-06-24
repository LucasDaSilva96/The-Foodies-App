import React from 'react';
import MealItem, { Meal } from './MealItem';

type Props = {
  mealItems: Meal[];
};

export default function MealsGrid({ mealItems }: Props) {
  return (
    <div className='w-full pb-4 px-4 flex flex-wrap gap-4 items-center'>
      {mealItems.map((item) => (
        <MealItem
          creator={item.creator}
          image={item.image}
          slug={item.slug}
          summary={item.summary}
          title={item.title}
          creator_email={item.creator_email}
          instructions={item.instructions}
          key={item.title}
        />
      ))}
    </div>
  );
}
