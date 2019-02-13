(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{219:function(v,i,t){"use strict";t.r(i);var _=t(0),s=Object(_.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var v=this,i=v.$createElement,t=v._self._c||i;return t("div",{staticClass:"content"},[t("p",[v._v("Travis CI持续集成Vuepress博客")]),v._v(" "),t("blockquote",[t("p",[v._v("使用Travis CI部署，")])]),v._v(" "),t("ol",[t("li",[t("p",[v._v("下载安装Ruby：https://rubyinstaller.org/")])]),v._v(" "),t("li",[t("p",[v._v("安装 Travis CI Command Line Client：https://github.com/travis-ci/travis.rb#installation")]),v._v(" "),t("ul",[t("li",[v._v("检测ruby版本："),t("code",[v._v("ruby -v")])]),v._v(" "),t("li",[v._v("安装："),t("code",[v._v("gem install travis -v 1.8.8 --no-rdoc --no-ri")])]),v._v(" "),t("li",[v._v("检测travis版本："),t("code",[v._v("travis version")])])])]),v._v(" "),t("li",[t("p",[v._v("登录："),t("code",[v._v("travis login")]),v._v("，输入github用户名密码")])]),v._v(" "),t("li",[t("p",[v._v("登录成功后，在博客根目录下添加 Travis CI 所需要的配置文件 .travis.yml")])]),v._v(" "),t("li",[t("p",[v._v("使用 Travis CI Command Line 进行验证，看看配置文件有没有问题 ："),t("code",[v._v("travis lint .travis.yml")])]),v._v(" "),t("ul",[t("li",[v._v("出现以下反馈则说明没有问题： "),t("code",[v._v("Hooray, .travis.yml looks valid :)")])])])]),v._v(" "),t("li",[t("p",[v._v("生成私钥加密文件："),t("code",[v._v("ssh-keygen -t rsa -C 你的邮箱")]),v._v(" ，一直回车即可，最后在给定的目录中即可看到私钥文件 id _rsa")])]),v._v(" "),t("li",[t("p",[v._v("把私钥"),t("strong",[v._v("拷贝")]),v._v("（不要删除原来的）到博客"),t("strong",[v._v("根目录")]),v._v("下（之后会删除）")])]),v._v(" "),t("li",[t("p",[v._v("执行"),t("code",[v._v("travis encrypt-file id_rsa")]),v._v("，执行后，博客目录下会生成 id_rsa.enc （加密过后的文件，会上传到github上）")])]),v._v(" "),t("li",[t("p",[v._v("创建.travis 文件夹 ，将 id_rsa.enc文件放入，删除 id_rsa文件")])]),v._v(" "),t("li",[t("p",[v._v("使用github登录https://travis-ci.org/，将博客所在的仓库勾上，进入settings页面，会生成两个Environment Variables")])]),v._v(" "),t("li",[t("p",[v._v("将代码提交到github，在Travis CI,该项目的Job Log")])])])])}],!1,null,null,null);i.default=s.exports}}]);