export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
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
                  buildHookId: '5f7cb062632ccf1d700143ea',
                  title: 'Sanity Studio',
                  name: 'norlys-studio',
                  apiId: '9f686e2a-86ed-4cb1-aa16-de49639485cd'
                },
                {
                  buildHookId: '5f7cb062e0dff91b634cae10',
                  title: 'Blog Website',
                  name: 'norlys',
                  apiId: 'f4e63cac-0fc3-46b7-ae2e-2290211d4acb'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/fmeyer1980/norlys',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://norlys.netlify.app', category: 'apps'}
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
