## vue开发配置eslint自动格式化
- 安装插件：ESLint, Vetur, Prettier-Code formmater
- file > preferences > settings > 右上角open settings(JSON) 打开settings.json
- 将settings.json替换为以下内容
``` JSON
{
  "editor.fontSize": 14,
  "eslint.options": {
    //指定vscode的eslint所处理的文件的后缀
    "extensions": [".js", ".vue", ".ts", ".tsx"]
  },
  "javascript": {
    "indent_size": 2
  },
  "eslint.validate": [
    // 确定校验准则
    "javascript",
    "javascriptreact",
    "html",
    "vue",
    "typescript",
    "typescriptreact"
  ],
  "files.autoSave": "off",
  "files.associations": {
    "*.wpy": "vue",
    "*.wxml": "wxml",
    "*.cjson": "jsonc",
    "*.wxss": "css",
    "*.wxs": "javascript",
    "*.html": "html"
  },
  "emmet.includeLanguages": {
    "wxml": "html"
  },
  "minapp-vscode.disableAutoConfig": true,
  // vscode默认启用了根据文件类型自动设置tabsize的选项
  "editor.detectIndentation": false,
  // 重新设定tabsize
  "editor.tabSize": 4,
  //  #去掉代码结尾的分号
  "prettier.semi": true,
  //  #使用单引号替代双引号
  "prettier.singleQuote": true,
  //  #让函数(名)和后面的括号之间加个空格
  "javascript.format.insertSpaceBeforeFunctionParenthesis": true,
  // #让vue中的js按编辑器自带的ts格式进行格式化
  // "vetur.format.defaultFormatter.js": "vscode-typescript",
  "git.enableSmartCommit": true,
  "editor.quickSuggestions": {
    "strings": true
  },
  //一定要在vutur.defaultFormatterOptions参数中设置，单独修改prettier扩展的设置是无法解决这个问题的，因为perttier默认忽略了vue文件（事实上从忽略列表移除vue也不能解决这个问题）
  "vetur.format.defaultFormatterOptions": {
    "js-beautify-html": {
      // force-aligned | force-expand-multiline
      "wrap_attributes": "force-aligned"
    },
    "prettyhtml": {
      "printWidth": 100,
      "singleQuote": true,
      "wrapAttributes": false,
      "sortAttributes": true
    },
    "prettier": {
      //  #去掉代码结尾的分号
      "semi": true,
      //  #使用单引号替代双引号
      "singleQuote": true
    }
  },
  // 插件KoroFileHeader
  // 文件头部注释-快捷键crtl+alt+i（window）,ctrl+cmd+t (mac)
  "fileheader.customMade": {
    "Descripttion": "",
    //"version": "",
    "Author": "voanit",
    "Date": "Do not edit",
    "LastEditors": "voanit",
    "LastEditTime": "Do not Edit"
  },
  //函数注释-快捷键ctrl+alt+t (window), ctrl+alt+t(mac)
  "fileheader.cursorMode": {
    "name": "",
    // "test": "test font",
    // "msg": "",
    "param": "",
    "return": ""
  },
  //安装live Server插件
  "liveServer.settings.donotVerifyTags": true,
  "liveServer.settings.donotShowInfoMsg": true,
  "liveServer.settings.NoBrowser": true,
  "liveServer.settings.CustomBrowser": "chrome", //设置默认打开的浏览器
  "liveServer.settings.host": "127.0.0.1",
  "liveServer.settings.port": 5000, //设置本地服务的端口号
  "liveServer.settings.root": "/dist",
  "[vue]": {
    "editor.defaultFormatter": "octref.vetur"
  },
  "editor.codeActionsOnSave": {
    "source.organizeImports": true,
    "source.fixAll": true,
    "source.fixAll.eslint": true
  },
  "settingsSync.ignoredSettings": [
  
  
  ],
"vetur.format.options.tabSize": 4,
"workbench.sideBar.location": "right",
"terminal.integrated.tabs.enabled": true
}

```