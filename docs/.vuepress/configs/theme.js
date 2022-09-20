import { defaultTheme } from 'vuepress'

export default defaultTheme({
  navbar: [
    {
      text: 'Home',
      link: '/',
    },
    {
      text: 'Front End',
      children: [
        {
          text: 'HTML & CSS',
          children: [
            '/front-end/html&css/html',
            '/front-end/html&css/css-selector',
            '/front-end/html&css/css-position',
            '/front-end/html&css/css-flexbox',
            '/front-end/html&css/sass',
          ],
        },
        {
          text: 'JavaScript',
          children: [
            '/front-end/javascript/fundamentals',
            '/front-end/javascript/objects',
            '/front-end/javascript/promise',
            '/front-end/javascript/es6',
            '/front-end/javascript/dom',
            '/front-end/javascript/events',
            '/front-end/javascript/others',
          ],
        },
        {
          text: 'Vue.js',
          children: [
            '/front-end/vue/essentials',
            '/front-end/vue/components',
            '/front-end/vue/extra',
          ],
        },
      ],
    },
    {
      text: 'Blog',
      children: [
        {
          text: 'Diary',
          children: [
            '/diary/the-past',
            '/diary/2206',
            '/diary/2207',
            '/diary/2208',
            '/diary/2209',
          ],
        },
        {
          text: 'Others',
          children: ['/others/git', '/others/regexp', '/others/vim'],
        },
      ],
    },
  ],
  logo: '/images/风车.png',
  repo: 'Vinter7/vinter7.github.io',
  sidebar: {
    '/Vuepress/': ['/Vuepress/Configs.md', '/Vuepress/Markdown.md'],

    '/diary/': [
      '/diary/the-past.md',
      '/diary/2206.md',
      '/diary/2207.md',
      '/diary/2208.md',
      '/diary/2209.md',
    ],
    '/others/': [
      '/others/git.md',
      '/others/regexp.md',
      '/others/vim.md',
    ],
    '/front-end/': [
      {
        text: 'HTML & CSS',
        collapsible: true,
        children: [
          '/front-end/html&css/html',
          '/front-end/html&css/css-selector',
          '/front-end/html&css/css-position',
          '/front-end/html&css/css-flexbox',
          '/front-end/html&css/sass',
        ],
      },
      {
        text: 'JavaScript',
        collapsible: true,
        children: [
          '/front-end/javascript/fundamentals',
          '/front-end/javascript/objects',
          '/front-end/javascript/promise',
          '/front-end/javascript/es6',
          '/front-end/javascript/dom',
          '/front-end/javascript/events',
          '/front-end/javascript/others',
        ],
      },
      {
        text: 'Vue.js',
        collapsible: true,
        children: [
          '/front-end/vue/essentials',
          '/front-end/vue/components',
          '/front-end/vue/extra',
        ],
      },
    ],
  },
  editLink: false,
})
