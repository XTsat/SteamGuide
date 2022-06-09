import type { SidebarConfig } from '@vuepress/theme-default'

export const zh: SidebarConfig = {
  '/': [
    {
      text: '功能优化',
      collapsible: false,
      children: [
        '/document/Extensions/扩展程序.md',
        '/document/Extensions/脚本.md',
      ]
    },
    {
      text: '个人资料美化',
      collapsible: false,
      children: [
        '/document/Profile/展柜展示.md',
        '/document/Profile/如何制作.md',
        '/document/Profile/如何上传.md',
        '/document/Profile/删除元素.md',
        '/document/Profile/其他.md',
      ]
    },
  ]
};