# Configs


## config

> 全局配置

- base
- lang
- title
- description
- head
- theme
- plugins
  
## Frontmatter

> 页面级作用域的配置
- Vuepress
  - date `yyyy-mm-dd`
  - description
  - head
  - lang
  - title
- Theme
  
  

## Theme

> Default theme is enough

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