#### 项目集成工具
- [Travis-CI](https://www.travis-ci.com/)

#### 仓库更新方式
1. master分支下修改文件，push
2. push之后等待约5min,Travis-CI会自动集成到gh-pages分支
3. gh-pages部署成功后，在gitee项目中点击更新按钮，更新Gitee Pages

#### 开发要点
1. 尽量使用`yarn`而不使用`npm`