### 使用Travis CI持续集成Vue项目，在gh-pages上预览

> @2018-08-01 

  1. 登录 https://travis-ci.org/ （使用github账户登录，可以同步所有仓库）

  2. 选择需要同步的vue项目，勾上，点击settings

  3. Environment Variables中添加参数
    - GH_REF    `github.com/<GITHUB_ACCOUNT>/<repo>`
    - GH_TOKEN
    - UESR_EMAIL
    - USER_NAME

 4. 首先修改vue项目中的`config/index.js`中的build对象，`assetsPublicPath: ''`（原来是'./'）

 5. 项目根目录下新建`.travis.yml`文件

    ```yaml
       # .travis.yml
       language: node_js
        # nodejs版本
        node_js: 
            - '8.11.1'
        # Travis-CI Caching
        cache:
          directories:
            - node_modules
        # S: Build Lifecycle
        install:
          - npm install
        script:
          - npm run build
        after_script:
          - cd ./dist
          - git init
          - git config user.name "${USER_NAME}"
          - git config user.email "${UESR_EMAIL}"
          - git add .
          - git commit -m "Update tools"
          - git push --force --quiet "https://${GH_TOKEN}@${GH_REF}" master:gh-pages
        # E: Build LifeCycle
        #指定分支，只有指定的分支提交时才会运行脚本
        branches:
          only:
            - master
    ```

  6. 将项目push进github仓库

  7. 完成后，在Travis CI的Job log中可以看到部署进度

  8. 最后，在github仓库中就可以看到gh-pages，将此分支设置为gh-pages功能，即可在线预览
