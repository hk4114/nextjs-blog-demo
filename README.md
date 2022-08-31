# nextjs

remark-prism：代码高亮插件
date-fns：处理日期
gray-matter：获取元数据
next-mdx-remote：用于解析和渲染markdown内容
remark-external-links：对markdown内的链接添加rel和target，使其能够在新页面打开

```sh
npx create-next-app@latest --typescript demo
pnpm add -D tailwindcss postcss autoprefixer
npx tailwindcss init -p 
yarn add remark-prism date-fns gray-matter next-mdx-remote remark-external-links
yarn add @types/remark-prism --D
```

```js
// tailwind.config.js
 content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./styles/**/*.css",
],

// 在pages文件夹下的_app.tsx文件的第一行添加：
import "tailwindcss/tailwind.css";
```