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
      { text: '前端', link: '/guide/' },
      { text: '编程题', link: '/code/' },
      { text: '计算机基础', link: '/computer/' }
    ],


    sidebar: {
      '/computer/': 'auto',
      '/code/': 'auto',
      '/guide/': [
        '',
        'js',
        'react'
      ]
    }
  }
}
