import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      description: 'Title of the project',
      type: 'string',
    }),

    defineField({
      name: 'projectImage',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'summary',
      title: 'Summary',
      type: 'text',
    }),
    defineField({
      name: 'linkToCode',
      title: 'LinkToCode',
      type: 'url',
    }),
    defineField({
      name: 'linkToDemo',
      title: 'LinkToDemo',
      type: 'url',

    }),
  ],
})
