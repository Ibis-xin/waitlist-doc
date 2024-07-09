import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Waitlist",
  description: "A waitlist doc",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "指南", link: "/guideline/" },
      { text: "文件", link: "/document/specification" },
      {
        text: "0.0.0",
        items: [
          { text: "更新日誌", link: "https://github.com" },
          { text: "產品地圖", link: "https://github.com" },
        ],
      },
    ],

    sidebar: {
      "/guideline": [
        {
          text: "簡介",
          items: [{ text: "什麼是 waitlist ?", link: "/guideline/" }],
        },
      ],
      "/document": [
        {
          text: "文件",
          items: [
            { text: "規格書", link: "/document/specification" },
            { text: "UML", link: "/document/uml" },
            { text: "UI 規劃", link: "/document/ui" },
            { text: "資料庫 Schema", link: "/document/data-schema" },
            { text: "API", link: "/document/api" },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },

  base: "/waitlist-doc/",
});
