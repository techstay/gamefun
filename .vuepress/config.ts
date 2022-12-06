import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

import { searchPlugin } from "@vuepress/plugin-search";
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "游戏小屋",
      description: "一个介绍各种游戏攻略的站点",
    },
  },

  theme,

  shouldPrefetch: false,
  plugins: [
    searchPlugin({
      locales: {
        '/': {
          placeholder: '搜索',
        },
      },
    }),
    googleAnalyticsPlugin({
      id: 'G-PYHB9QGTTN',
    }),
  ],
});
