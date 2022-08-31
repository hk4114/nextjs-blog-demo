# nextjs

```sh
npx create-next-app@latest --typescript ailjx-blog
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