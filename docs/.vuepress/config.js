import { defineUserConfig, defaultTheme } from 'vuepress'

export default defineUserConfig({
  title: '高枕枕のBlog',
  description: '高枕枕的知识库兼博客站',
  theme: defaultTheme({
    navbar: [
      {
        text: '首页',
        link: '/',
      },
      {
        text: '关于',
        link: '/theVuepress',
      },
    ],
  }),
})
