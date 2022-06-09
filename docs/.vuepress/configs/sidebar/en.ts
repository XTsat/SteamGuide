import type { SidebarConfig } from '@vuepress/theme-default'

export const en: SidebarConfig = {
  '/en/': [
    {
      text: 'Function optimization',
      collapsible: false,
      children: [
        '/en/document/Extensions/扩展程序.md',
        '/en/document/Extensions/脚本.md',
      ]
    },
    {
      text: 'Profile Beautify',
      collapsible: false,
      children: [
        '/en/document/Profile/展柜展示.md',
        '/en/document/Profile/如何制作.md',
        '/en/document/Profile/如何上传.md',
        '/en/document/Profile/删除元素.md',
        '/en/document/Profile/其他.md',
      ]
    },
  ]
};