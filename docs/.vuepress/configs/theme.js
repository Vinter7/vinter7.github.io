import { defaultTheme } from 'vuepress'

export default defaultTheme({
  navbar: [
    {
      text: '首页',
      link: '/',
    },
    {
      text: 'Vuepress',
      link: '/Vuepress',
    },
  ],
  logo: '/images/风车.png',
  repo: 'Vinter7/vinter7.github.io',
  sidebar: {
    '/Vuepress/': [
      {
        text: 'Vuepress使用',
        collapsible: true,
        children: ['/Vuepress/Configs.md', '/Vuepress/Markdown.md'],
      },
    ],
  },
  editLink: false,
})
