// product brand
// product name
// product category

import {defineField, defineType} from 'sanity'

export const Product = defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    defineField({
      name: 'brand',
      type: 'string',
    }),
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: 'category',
      type: 'string',
    }),
    defineField({
      name: 'price',
      type: 'number',
    }),
    defineField({
      name: 'image',
      type: 'image',
    }),
  ],
})
