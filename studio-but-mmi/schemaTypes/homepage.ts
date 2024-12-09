import { defineArrayMember, defineField, defineType } from 'sanity'

export const homepage = defineType({
  name: 'homepage',
  title: 'homepage',
  type: 'document',
  options: {
    singleton: true
  },
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    // Groupe de champs pour la partie hero banner
    // IL est possible de créer des groupes de champs pour organiser les champs dans le studio

    defineField({
        type: 'object',
        name: 'hero',
        fields: [
            {type: 'string',name: 'title'},
            {type: 'string', name: 'text'}, 
            {
                name: 'stats',
                type: 'array',
                title: 'stats for hero',
                of: [
                    defineArrayMember({
                        type: 'object',
                        name: 'stat',
                        fields: [
                            {type: 'string', name: 'value'},
                            {type: 'string', name: 'text'},
                        ]
                    })
                ]
            }
        ]
    }),
  ]
})