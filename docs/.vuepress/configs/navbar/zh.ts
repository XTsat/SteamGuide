import type { NavbarConfig } from '@vuepress/theme-default'

export const zh: NavbarConfig = [
  {
    text: '主页',
    link: '/'
  },
  {
    text: 'Steam 指南',
    link: '/document/Profile/展柜展示.md',
  },
  {
    text: '官方',
    children: [
      {
        text: 'Steam',
        link: 'https://store.steampowered.com/'
      },
      {
        text: '客服',
        link: 'https://help.steampowered.com/'
      },
      {
        text: 'Steamworks',
        link: 'https://partner.steamgames.com/'
      },
    ],
  },
  {
    text: '关于我',
    link: '/关于我.md',
  },
]