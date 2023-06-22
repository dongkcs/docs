import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { searchPlugin } from "@vuepress/plugin-search";
export default defineUserConfig({
  base: "/docs/",

  lang: "zh-CN",
  title: "dongkcs",
  description: "dongkcs",

  theme,
  plugins: [
    searchPlugin({
      // 你的选项
    }),
  ],
  // Enable it with pwa
  // shouldPrefetch: false,
});
