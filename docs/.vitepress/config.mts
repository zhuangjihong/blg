import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Better Luogu!",
  description: "A script for Luogu",
  cleanUrls: true,
  head: [
    ['link', { rel: 'icon', href: 'https://s21.ax1x.com/2024/08/11/pASqf4x.png'}]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: 'https://s21.ax1x.com/2024/08/11/pASqf4x.png',

    nav: [
      { text: '指南', link: '/guide/introduction/what-is-Better-Luogu' },
      { text: '功能', link: '/function/update' }
    ],

    sidebar: [
      {
        text: '简介',
        collapsed: false,
        items: [
          { text: '什么是 Better Luogu!?', link: '/guide/introduction/what-is-Better-Luogu' },
          { text: '快速开始', link: '/guide/introduction/getting-started' }
        ]
      },
      {
        text: '功能',
        collapsed: false,
        items: [
          { text: '更新提醒', link: '/function/update' },
          { text: '弹窗', link: '/function/popup' },
          { text: '个性化', link: '/function/personalization' },
          { text: '热搜', link: '/function/hot_search' },
          { text: '查看别人主页', link: '/function/homepage' },
          { text: '隐藏广告', link: '/function/hideAd' },
          { text: '快速返回比赛题目列表', link: '/function/backlist' }
        ]
      },
      {
        text: '使用',
        collapsed: false,
        items: [
          { text: '说明', link: '/use/illustrate'},
          { text: '用户名', link: '/use/username' },
          { text: '讨论', link: '/use/discuss' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/volatile78/BetterLuogu' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-<a href="https://www.luogu.com.cn/user/772464">volatile'
    },
    // 设置搜索框的样式
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
            },
          },
        },
      },
    }
  },
  markdown: {
    image: {
      lazyLoading: true
    }
  }
})
