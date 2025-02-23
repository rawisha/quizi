import { type SchemaTypeDefinition } from 'sanity';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    {
      name: 'category',
      title: 'Category',
      type: 'document',
      fields: [
        {
          name: 'name',
          title: 'Category Name',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'description',
          title: 'Description',
          type: 'text',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'icon',
          title: 'Icon',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
      ],
    },
    {
      name: 'question',
      title: 'Question',
      type: 'document',
      fields: [
        {
          name: 'text',
          title: 'Question Text',
          type: 'string',
          validation: (Rule) => Rule.optional(),
        },
        {
          name: 'image',
          title: 'Question Image',
          type: 'image',
          options: { hotspot: true },
          validation: (Rule) => Rule.optional(),
        },
        {
          name: 'options',
          title: 'Options',
          type: 'array',
          of: [{ type: 'string' }],
          validation: (Rule) => Rule.min(2).required(),
        },
        {
          name: 'correctAnswer',
          title: 'Correct Answer',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'category',
          title: 'Category',
          type: 'reference',
          to: [{ type: 'category' }],
          validation: (Rule) => Rule.required(),
        },
      ],
    },
  ],
};
