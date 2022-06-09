import type { NavbarConfig } from '@vuepress/theme-default'

export const en: NavbarConfig = [
  {
    text: 'Home',
    link: '/en/'
  },
  {
    text: 'Steam Guide',
    link: '/en/document/',
  },
  {
    text: 'Official',
    children: [
      {
        text: 'Steam',
        link: 'https://store.steampowered.com/'
      },
      {
        text: 'Help',
        link: 'https://help.steampowered.com/'
      },
      {
        text: 'Steamworks',
        link: 'https://partner.steamgames.com/'
      },
    ],
  },
  {
    text: 'About me',
    children: [
      {
        text: 'Guide',
        children: [
          {
            text: 'Steam',
            link: 'https://xtsat.github.io/SteamGuide/'
          },
          {
            text: 'Watt toolkit',
            link: 'https://xtsat.github.io/SteamTools-Guide/'
          },
          {
            text: 'Browser',
            link: 'https://xtsat.github.io/Browser-Guide/'
          },
          {
            text: 'Windows',
            link: 'https://xtsat.github.io/Windows-Guide/'
          },
        ]
      },
      {
        text: 'Script',
        children: [
          {
            text: 'rapid-upload-userscript',
            link: 'https://xtsat.github.io/rapid-upload-userscript-doc/'
          },
        ]
      },
      {
        text: 'Other platforms',
        children: [
          {
            text: 'BiliBili 📺',
            link: 'https://space.bilibili.com/53283118'
          },
          {
            text: 'Steam 🎮',
            link: 'https://steamcommunity.com/id/XTxiaotong'
          },
          {
            text: 'Playlist 🎵',
            link: 'https://music.163.com/#/user/home?id=283588276'
          },
          {
            text: 'GitHub',
            link: 'https://github.com/XTsat'
          },
        ]
      },
    ]
  },
]