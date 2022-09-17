import { defineUserConfig } from 'vuepress'
import { searchPlugin } from '@vuepress/plugin-search'
import theme from './configs/theme'

export default defineUserConfig({
  title: '高枕枕のBlog',
  description: '高枕枕的知识库兼博客站',
  dest: './dist',
  head: [['link', { rel: 'icon', href: '/images/风车.png' }]],
  theme,
  plugins: [searchPlugin({})],
})
