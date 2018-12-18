Travis CI持续集成Vuepress博客

> 使用Travis CI部署，

1. 下载安装Ruby：https://rubyinstaller.org/

2. 安装 Travis CI Command Line Client：https://github.com/travis-ci/travis.rb#installation
   - 检测ruby版本：`ruby -v`
   - 安装：`gem install travis -v 1.8.8 --no-rdoc --no-ri`
   - 检测travis版本：`travis version`

3. 登录：`travis login`，输入github用户名密码

4. 登录成功后，在博客根目录下添加 Travis CI 所需要的配置文件 .travis.yml

5. 使用 Travis CI Command Line 进行验证，看看配置文件有没有问题 ：`travis lint .travis.yml`

   - 出现以下反馈则说明没有问题： `Hooray, .travis.yml looks valid :)`

6. 生成私钥加密文件：`ssh-keygen -t rsa -C 你的邮箱` ，一直回车即可，最后在给定的目录中即可看到私钥文件 id _rsa

7. 把私钥**拷贝**（不要删除原来的）到博客**根目录**下（之后会删除） 

8. 执行`travis encrypt-file id_rsa`，执行后，博客目录下会生成 id_rsa.enc （加密过后的文件，会上传到github上）

9. 创建.travis 文件夹 ，将 id_rsa.enc文件放入，删除 id_rsa文件

10. 使用github登录https://travis-ci.org/，将博客所在的仓库勾上，进入settings页面，会生成两个Environment Variables

11. 将代码提交到github，在Travis CI,该项目的Job Log

    

