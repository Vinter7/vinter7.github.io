import { defineUserConfig, defaultTheme } from 'vuepress'

export default defineUserConfig({
  title: '高枕枕のBlog',
  description: '高枕枕的知识库兼博客站',
  head: [['link', { rel: 'icon', href: '/images/风车.png' }]],
  theme: defaultTheme({
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
      '/Vuepress': ['/Vuepress/Configs.md', '/Vuepress/Markdown.md'],
    },
    editLink: false,
  }),
})
