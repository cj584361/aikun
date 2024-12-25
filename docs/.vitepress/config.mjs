import { defineConfig } from "vitepress";
import { pagefindPlugin } from "vitepress-plugin-pagefind";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  vite: {
    server: {
      port: 5175,
      strictPort: true, // 如果端口被占用，则直接退出而不是尝试下一个可用端口
    },
    plugins: [pagefindPlugin()],
  },
  title: "一个人的博客",
  description: "A VitePress Site",
  lang: "zh-CN",
  themeConfig: {
    logo: "/kunkun.svg",
    nav: [
      { text: "首页", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
    ],

    sidebar: {
      "/kunkun": [
        {
          text: "🐔哥成长的故事",
          link: "/kunkun/kunkunLife",
        },
        {
          text: "🎬那些拍案叫绝的电影作品",
          link: "/kunkun/kunkunFilm",
        },
        {
          text: "🎻那些一听耳朵就会怀孕的音乐",
        },
        {
          text: "📺被综艺之神附体的🐔哥",
        },
      ],
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
    outlineTitle: "目录",
    search: {
      provider: "pagefind",
    },
  },
});
