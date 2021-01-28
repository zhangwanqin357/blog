let toc = require('./toc/index.js')

module.exports = {
  base: '/blog/', //设置站点根路径
  title: 'Zhang Wanqin\'s Blog', // 站点标题
  description: '本博客记录前端工作学习中的点点滴滴', // 站点描述，以<meta>标签渲染到html中
  dest: 'docs/.vuepress/dist', // 设置输出目录
  head: [ // 额外需要注入到当前页面<head>标签中的标签
    ['link', {rel: 'icon', href: '/header.png'}]
  ],
  markdown: {
    toc: {
      includeLevel: [4, 5]
    },
  },
  themeConfig: {
    nav: toc.nav,
    sidebar: toc.sidebar,

    displayAllHeaders: true, // 显示所有页面的标题链接
    sidebarDepth: 2, // 标题深度，1 => h2; 2 => h2, h3;0 => 禁用标题链接
    
    lastUpdated: '上次更新',
    repo: 'https://github.com/zhangwanqin357/blog', // 会自动在页面的导航栏生成一个Github的导航链接
    repoLabel: 'Github'
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@alias': ''
      }
    }
  },
  // vuepress-plugin-xxx 缩写 xxx
  // @org/vuepress-plugin-xxx 缩写 @org/xxx
  // @vuepress/plugin-xxx 缩写 @vuepress/xxx（官方维护的插件）
  plugins: [
    '@vuepress/plugin-register-components',
    '@vuepress/plugin-active-header-links',
    '@vuepress/plugin-search',
    '@vuepress/plugin-nprogress',
    '@vuepress/plugin-back-to-top',
    'smooth-scroll', 
    'container'
  ]
}
