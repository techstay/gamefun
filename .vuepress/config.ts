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
      description: "收录一些游戏攻略的小站",
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
