export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5eeafc9f24c20bdddca20adb',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-b7jxmc2r',
                  apiId: '7a859f0b-8348-4072-b9e0-ff0423ce5f84'
                },
                {
                  buildHookId: '5eeafca09e223410eb5e74f7',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-26axpxkd',
                  apiId: 'b836818b-0eb3-47f4-883f-c447912d1e28'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sixheads/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-26axpxkd.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
