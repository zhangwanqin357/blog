[![Build Status](https://travis-ci.com/zhangwanqin357/blog.svg?branch=master)](https://travis-ci.com/zhangwanqin357/blog)

#### 项目集成工具
- [Travis-CI](https://www.travis-ci.com/)

#### 仓库更新方式
1. master分支下修改文件，push
2. push之后等待约5min,Travis-CI会自动集成到gh-pages分支
  - 如果不希望Travis-CI在每次提交后都构建，在commit message中加上[ci skip]，例如：git commit -m "[ci skip] commit message"（此条是否有效待验证）
3. gh-pages部署成功后，在gitee项目中点击更新按钮，更新Gitee Pages

#### 开发要点
1. 尽量使用`yarn`而不使用`npm`