import React from 'react';

type SlugProps = {
  params: { slug: string };
};

export default function MealSlugPage({ params }: SlugProps) {
  return <div>Slug page - {params.slug}</div>;
}
