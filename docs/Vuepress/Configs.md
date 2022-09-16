# Configs


## config


- base
- lang
- title
- description
- head
- theme
- plugins
  
## Frontmatter


- Vuepress
  - date `yyyy-mm-dd`
  - description
  - head
  - lang
  - title
- Theme
  - pageClass
  - Home Page
    - home 是否首页
    - heroImage
    - heroText
    - tagline
    - actions
      - text link type
    - features
      - title details
    - footer
    - footerHtml
  - Normal Page
    - lastUpdated
    - sidebar
    - prev
    - next
  
  

## Theme


### Configs

- colorMode
- colorModeSwitch
- navbar
  - NavbarItem
    - text link
  - NavbarGroup
    - text children
  - String
- logo
- repo
- sidebar
  - false 'auto'
  - SidebarConfigArray[]
    - text link children[]
    - String
    - collapsible:boolean 可否折叠
  - SidebarConfigObject{} 设定不同路径下情况
    - `'/path/':SidebarConfigArray[{}]`
- sidebarDepth
- lastUpdated
- notFound

### Components

- Badge
  - type text vertical
- CodeGroup
  - CodeGroupItem
    - title

### Styles

- `.vuepress/styles/`
- Palette.scss
- index.scss