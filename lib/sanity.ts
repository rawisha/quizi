import { createClient } from 'next-sanity';

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2024-03-21',
  useCdn: false
});

export async function getCategories() {
  return client.fetch(`*[_type == "category"] {
    _id,
    name,
    description,
    icon,
    "questions": *[_type == "question" && references(^._id)] {
      _id,
      text,
      options,
      correctAnswer,
      "imageUrl": image.asset->url,
    }
  }`);
}