import { hopeTheme } from "vuepress-theme-hope";
import { navbar } from "./navbar";
import { sidebar } from "./sidebar";

export default hopeTheme({
  hostname: "https://gamefun.cf",
  themeColor: {
    blue: "#0081CF",
    pink: "#FF6F91",
    orange: "#FF9671",
  },
  author: {
    name: "techstay",
    url: "https://github.com/techstay",
  },
  navbarLayout: {
    left: ["Brand"],
    center: [],
    right: ["Links", "Language", "Repo", "Outlook", "Search"],
  },

  iconAssets: "iconfont",

  logo: "",

  repo: "techstay/gamefun",

  docsDir: ".",

  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime", "Word",],

  locales: {
    "/": {
      // navbar
      navbar: navbar,

      // sidebar
      sidebar: sidebar,

      footer: "游戏小屋",
      displayFooter: true,

      metaLocales: {
        editLink: "在Github上编辑此页",
      },
    },


  },

  plugins: {
    comment: {
      /**
       * Using Giscus
       */
      // provider: "Giscus",
      // repo: "techstay/giscus-comment",
      // repoId: "R_kgDOIXlpSg",
      // category: "Announcements",
      // categoryId: "DIC_kwDOIXlpSs4CSXQU",
      // mapping: "url",

      /**
       * Using Waline
       */
      provider: "Waline",
      serverURL: "https://waline.techstay.tech",
      dark: 'auto',
      reaction: true
    },

    // Disable features you don’t want here
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      container: true,
      demo: true,
      echarts: true,
      flowchart: true,
      footnote: true,
      gfm: true,
      imageLazyload: true,
      imageTitle: true,
      imageSize: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"],
      },
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      tasklist: true,
      vPre: true,
      vuePlayground: true,
    },

  },
});
