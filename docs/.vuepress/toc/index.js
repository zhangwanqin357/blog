module.exports = {
  nav: [
    { text: '首页', link: '/' },
    { text: 'CSS', link: '/css/' },
    { text: 'JS', link: '/js/' },
    { text: 'Tips', link: '/tips/'},
    { text: 'Tools', link: '/tools/'},
    { text: 'News', link: '/news/'},
    { text: 'Snippets', link: '/snippets/'}
  ],
  sidebar: {
    '/css/': [ // 将侧边栏划分成多个组
      {
        title: 'CSS属性',
        collapsable: false, //设置false让一个组永远都是展开状态
        children: [ //与文件名对应，页面里显示的标题是md文档里的标题
          'cssProps/shape-outside/',  // 以/结尾会自动匹配*/README.md
          'cssProps/filter',
          'cssProps/vertical-align/'
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
          '1-JavaScript/array-sort'
        ]
      },
      {
        title: 'ES6',
        collapsable: false,
        children: [
          '2-ES6/ES6-source'
        ]
      },
      {
        title: 'Vue',
        collapsable: false,
        children: [
          '3-Vue/slot-scope/',
          '3-Vue/create-keyframe-animation',
          '3-Vue/vuejs-develop-tip'
        ]
      },
      {
        title: '跨域技术',
        collapsable: false,
        children: [
          '4-CrossDomain/cross-origin'
        ]
      },
      {
        title: 'Dev Tips',
        collapsable: false,
        children: [
          '5-DevTips/js-devtips'
        ]
      }
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
    '/tools/': [
      {
        title: '持续集成',
        collapsable: false,
        children: [
          'deploy/deploy-vue-with-travis'
        ]
      },
      ['git/', 'Git'],
      ['linux/', 'Linux'],
      ['markdown/', 'Markdown']
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
  }
}