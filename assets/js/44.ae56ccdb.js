(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{403:function(t,v,e){"use strict";e.r(v);var _=e(26),i=Object(_.a)({},(function(){var t=this,v=t.$createElement,e=t._self._c||v;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"git-常用操作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git-常用操作"}},[t._v("#")]),t._v(" Git 常用操作")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("ls")]),t._v(" 显示当前目录下的内容")]),t._v(" "),e("li",[e("code",[t._v("ll")]),t._v(" 显示当前目录下的内容明细")]),t._v(" "),e("li",[e("code",[t._v("git status")]),t._v(" 位于xx（master）分支，您的分支与上游分支‘origin/master'一致，并会显示出本地更改的部分")]),t._v(" "),e("li",[e("code",[t._v("git log")]),t._v(" 查看历史git命令")]),t._v(" "),e("li",[e("code",[t._v("git checkout -b dev")]),t._v("  新建并切换到dev分支")]),t._v(" "),e("li",[e("strong",[e("code",[t._v("git push --set-upstream origin dev")]),t._v(" 将本地的dev分支push到远程git（远程没有dev分支时使用)")])]),t._v(" "),e("li",[e("code",[t._v("git diff web/src/components/userManage/layout4user.vue")]),t._v(" 比较某单一文件的变化，"),e("strong",[t._v("按q退出diff状态")])]),t._v(" "),e("li",[e("code",[t._v("git add web/src/components/userManage/layout4user.vue")]),t._v(" 添加单一文件")]),t._v(" "),e("li",[e("code",[t._v('git commit -m ""')])]),t._v(" "),e("li",[e("code",[t._v("git push")])]),t._v(" "),e("li",[e("code",[t._v("git checkout -- .")]),t._v(" 切换分支时，将本分支所有修改缓存")]),t._v(" "),e("li",[e("code",[t._v("git rm")]),t._v(" 删除某一文件")]),t._v(" "),e("li",[t._v("分支\n"),e("ul",[e("li",[e("code",[t._v("git branch -a")]),t._v(" 查看所有分支")]),t._v(" "),e("li",[e("code",[t._v("git branch -v")]),t._v(" 查看各个分支最后一次提交")]),t._v(" "),e("li",[e("code",[t._v("git branch -D dev")]),t._v(" "),e("strong",[t._v("删除本地分支")]),t._v("（需在非dev分支下运行）")]),t._v(" "),e("li",[e("code",[t._v("git push origin --delete dev")]),t._v(" "),e("strong",[t._v("删除远程分支")]),t._v("（需在非dev分支下运行）")])])])]),t._v(" "),e("h2",{attrs:{id:"分支操作-新建-同步"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#分支操作-新建-同步"}},[t._v("#")]),t._v(" 分支操作(新建，同步)")]),t._v(" "),e("h3",{attrs:{id:"基于master创建本地新分支-并同步到远程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基于master创建本地新分支-并同步到远程"}},[t._v("#")]),t._v(" 基于master创建本地新分支,并同步到远程")]),t._v(" "),e("ol",[e("li",[e("code",[t._v("git checkout master")]),t._v(", "),e("code",[t._v("git pull")]),t._v(" 切换到被copy的分支（master），并且从远端拉取最新版本")]),t._v(" "),e("li",[e("code",[t._v("git checkout -b dev")]),t._v(" 从当前分支拉copy开发分支")]),t._v(" "),e("li",[e("code",[t._v("git push origin dev")]),t._v(" 把新建的分支push到远端")]),t._v(" "),e("li",[e("code",[t._v("git branch --set-upstream-to=origin/dev")]),t._v("关联本地分支dev与远程dev分支")]),t._v(" "),e("li",[e("code",[t._v("git pull")]),t._v("再次拉取验证")])]),t._v(" "),e("h3",{attrs:{id:"拉取git上已存在的指定分支"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#拉取git上已存在的指定分支"}},[t._v("#")]),t._v(" 拉取git上已存在的指定分支")]),t._v(" "),e("ol",[e("li",[e("code",[t._v("git clone xxx.git")]),t._v(" 拉取主分支")]),t._v(" "),e("li",[e("code",[t._v("git branch")]),t._v(" 查看本地是否具有dev分支")]),t._v(" "),e("li",[t._v("如果没有"),e("code",[t._v("git fetch origin dev")])]),t._v(" "),e("li",[e("code",[t._v("git checkout -b dev origin/dev")]),t._v(" 在本地新建dev并切换到该分支")]),t._v(" "),e("li",[e("code",[t._v("git pull origin dev")])])]),t._v(" "),e("h3",{attrs:{id:"合并分支"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#合并分支"}},[t._v("#")]),t._v(" 合并分支")]),t._v(" "),e("blockquote",[e("p",[t._v("场景：本地分支（dev）开发之后，发现远程仓库分支（master）有更新")])]),t._v(" "),e("ol",[e("li",[t._v("@dev ----"),e("code",[t._v("git stash")]),t._v(" 临时将自己修改的代码存放在git栈中（否则checkout的时候会提示出错）")]),t._v(" "),e("li",[t._v("@master ----"),e("code",[t._v("git pull")]),t._v("  将远程代码master拉近本地仓库master")]),t._v(" "),e("li",[t._v("@dev ----"),e("code",[t._v("git merge master")]),t._v(" 将本地的master合并到本地dev分支上，以便于在本地dev分支上包含最新的master代码")]),t._v(" "),e("li",[t._v("@dev ----"),e("code",[t._v("git stash pop stash@{0}")]),t._v("  将git栈中的代码合并到本地dev分支，就可以看到之前修改的部分")])]),t._v(" "),e("h3",{attrs:{id:"将分支-dev-的某次提交合并到另一个分支-master"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#将分支-dev-的某次提交合并到另一个分支-master"}},[t._v("#")]),t._v(" 将分支(dev)的某次提交合并到另一个分支(master)")]),t._v(" "),e("ol",[e("li",[t._v("在dev分支"),e("code",[t._v("git log")]),t._v("打印commit记录，copy需要合并的commitId")]),t._v(" "),e("li",[t._v("切换master，在master分支执行 "),e("code",[t._v("git cherry-pick commitId")])]),t._v(" "),e("li",[e("code",[t._v("git push")])])]),t._v(" "),e("h2",{attrs:{id:"冲突解决"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#冲突解决"}},[t._v("#")]),t._v(" 冲突解决")]),t._v(" "),e("blockquote",[e("p",[t._v("场景：远程仓库与本地仓库，同一文件，分别有不同的内容，所以，在本地push的时候不成功会报错conflict")])]),t._v(" "),e("ol",[e("li",[t._v("冲突文件修改，删除不需要的部分")]),t._v(" "),e("li",[e("code",[t._v("git add test.txt")])]),t._v(" "),e("li",[e("code",[t._v('git commit -m ""')])]),t._v(" "),e("li",[e("code",[t._v("git push")])])]),t._v(" "),e("h2",{attrs:{id:"操作撤回"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#操作撤回"}},[t._v("#")]),t._v(" 操作撤回")]),t._v(" "),e("h3",{attrs:{id:"撤销git-add"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#撤销git-add"}},[t._v("#")]),t._v(" 撤销git add")]),t._v(" "),e("p",[e("code",[t._v("git reset --mixed")]),t._v("或者 "),e("code",[t._v("git reset HEAD")]),t._v("(撤销所有add)")]),t._v(" "),e("h3",{attrs:{id:"取消上一次commit"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#取消上一次commit"}},[t._v("#")]),t._v(" 取消上一次commit")]),t._v(" "),e("p",[e("code",[t._v("git reset --hard HEAD~1")])]),t._v(" "),e("h3",{attrs:{id:"回滚上一次push"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#回滚上一次push"}},[t._v("#")]),t._v(" 回滚上一次push")]),t._v(" "),e("blockquote",[e("p",[t._v("场景：push到远程仓库后，发现commit了多余的文件，希望回退到之前的版本。参考链接：http://yijiebuyi.com/blog/8f985d539566d0bf3b804df6be4e0c90.html")])]),t._v(" "),e("ol",[e("li",[e("code",[t._v("git branch -v")]),t._v(" 查看commit-hash")]),t._v(" "),e("li",[e("code",[t._v("git revert commit-hash")]),t._v(" commit-hash:需要回滚到的commit的hash,此操作必须工作树必须干净,原理是用一个新的提交来消除一个历史提交所作的任何修改")]),t._v(" "),e("li",[e("code",[t._v("git push")]),t._v(" 更新线上代码即可")])])])}),[],!1,null,null,null);v.default=i.exports}}]);