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
    // config: md => {
    //   // 使用更多的 markdown-it 插件!
    //   md.use(require('markdown-it-table-of-contents'))
    // }
  },
  themeConfig: {
    displayAllHeaders: true, // 默认值：false
    nav: [ // 导航栏链接
      { text: '首页', link: '/' },
      { text: 'CSS', link: '/css/' },
      { text: 'JS', link: '/js/' },
      { text: 'Tips', link: '/tips/'},
      { text: 'Deploy', link: '/deploy/'},
      { text: 'News', link: '/news/'},
      { text: 'Snippets', link: '/snippets/'}
    ],
    sidebar: {
      // sidebar: auto,
      '/css/': [ // 将侧边栏划分成多个组
        {
          title: 'CSS属性',
          collapsable: false, //设置false让一个组永远都是展开状态
          children: [
            'shape-outside', //与文件名对应，页面里显示的标题是md文档里的标题
            'filter',
            'vertical-align'
          ]
        },
        {
          title: 'CSS动画',
          collapsable: false,
          children: [
            'one',
            'two'
          ]
        },
        {
          title: 'SVG',
          collapsable: false,
          children: [
            'svg'
          ]
        }
      ],
      '/js/': [
        {
          title: 'JavaScript',
          collapsable: false,
          children: [
            'array-sort'
          ]
        },
        {
          title: 'ES6',
          collapsable: false,
          children: [
            'ES6-source'
          ]
        },
        {
          title: 'Vue.js',
          collapsable: false,
          children: [
            'create-keyframe-animation'
          ]
        },
        {
          title: '跨域技术',
          collapsable: false,
          children: [
            'cross-origin'
          ]
        },
      ],
      '/tips/': [
        {
          title: 'Errors',
          collapsable: false,
          children: [
            'npm-errors',
            'js-errors'
          ]
        },
        {
          title: '字体',
          collapsable: false,
          children: [
            'icon-font'
          ]
        },
        {
          title: 'Chrome 使用技巧',
          collapsable: false,
          children: [
            'chrome-dev-tips',
            'chrome-address-bar',
            'chrome-extensions'
          ]
        },
        {
          title: 'IE 开发调试技巧',
          collapsable: false,
          children: [
            'IEBrowser-tips'
          ]
        },
        {
          title: 'Sublime Text3 使用技巧',
          collapsable: false,
          children: [
            'sublime-extensions'
          ]
        },
        {
          title: 'Windows 使用技巧',
          collapsable: false,
          children: [
            'windows-dos',
            'windows-tips'
          ]
        },
        {
          title: 'API',
          collapsable: false,
          children: [
            'api'
          ]
        }
      ],
      '/deploy/': [
        {
          title: '持续集成',
          collapsable: false,
          children: [
            'deploy-vue-with-travis'
          ]
        }
      ],
      '/news/': [
        {
          title: 'HTML5',
          collapsable: false,
          children: [
            'HTML5.2'
          ]
        }
      ],
      '/snippets/': [
        {
          title: 'JavaScript',
          collapsable: false,
          children: [
            'js-snippet'
          ]
        }
      ]
      // '/': [ // fallback,最后定义
      //   '',
      //   'contact',
      //   'about'
      // ],
    },
    lastUpdated: '上次更新',
    repo: 'https://github.com/zhangwanqin357/blog', // 会自动在页面的导航栏生成一个Github的导航链接
    repoLabel: 'Github',
    // editLinks: true,
    // editLinkText: '在Github上编辑此页',
    configureWebpack: {
      resolve: {
        alias: {
          '@alias': ''
        }
      }
    }
  }
}
