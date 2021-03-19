module.exports = {
  title: '前端QA',
  description: '前端相关技术QA汇总',
  head: [['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }]],
  themeConfig: {
    repo: 'Gtanxingwen/frontend-qa',
    logo: '/logo.svg',
    docsDir: 'docs',
    docsBranch: 'main',
    editLinks: true,
    editLinkText: 'Suggest changes to this page',

    nav: [
      { text: 'Guide', link: '/guide/' },
      { text: 'Config', link: '/config/' }
    ],


    sidebar: {
      '/config/': 'auto',
      '/guide/': [
        '',
        'one'
      ]
    }
  }
}
