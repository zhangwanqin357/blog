## Git 常用操作
- `ls` 显示当前目录下的内容
- `ll` 显示当前目录下的内容明细
- `git status` 位于xx（master）分支，您的分支与上游分支‘origin/master'一致，并会显示出本地更改的部分
- `git log` 查看历史git命令
- `git rm` 删除某一文件
- `git branch -v` 查看各个分支最后一次提交
- `git checkout -b dev`  新建并切换到dev分支
- **`git push --set-upstream origin dev` 将本地的dev分支push到远程git（远程没有dev分支时使用)**
- `git diff web/src/components/userManage/layout4user.vue` 比较某单一文件的变化，**按q退出diff状态**
- `git add web/src/components/userManage/layout4user.vue` 添加单一文件
- `git commit -m ""`
- `git push`
- `git checkout -- .` 切换分支时，将本分支所有修改缓存
- `git branch -D dev` **删除本地**分支（需在非dev分支下运行）


## 分支操作(新建，同步)

### 基于master创建本地新分支,并同步到远程
1. `git checkout master`, `git pull` 切换到被copy的分支（master），并且从远端拉取最新版本
2. `git checkout -b dev` 从当前分支拉copy开发分支
3. `git push origin dev` 把新建的分支push到远端
4. `git branch --set-upstream-to=origin/dev`关联本地分支dev与远程dev分支
5. `git pull`再次拉取验证

### 拉取git上已存在的指定分支
1. `git clone xxx.git` 拉取主分支
2. `git branch` 查看本地是否具有dev分支
3. 如果没有`git fetch origin dev`
4. `git checkout -b dev origin/dev` 在本地新建dev并切换到该分支
5. `git pull origin dev`

### 合并分支
> 场景：本地分支（dev）开发之后，发现远程仓库分支（master）有更新
1. @dev ----`git stash` 临时将自己修改的代码存放在git栈中（否则checkout的时候会提示出错）
2. @master ----`git pull`  将远程代码master拉近本地仓库master
3. @dev ----`git merge master` 将本地的master合并到本地dev分支上，以便于在本地dev分支上包含最新的master代码
4. @dev ----`git stash pop stash@{0}`  将git栈中的代码合并到本地dev分支，就可以看到之前修改的部分

### 将分支(dev)的某次提交合并到另一个分支(master)
1. 在dev分支`git log`打印commit记录，copy需要合并的commitId
1. 切换master，在master分支执行 `git cherry-pick commitId`
2. `git push`

## 冲突解决
> 场景：远程仓库与本地仓库，同一文件，分别有不同的内容，所以，在本地push的时候不成功会报错conflict
1. 冲突文件修改，删除不需要的部分
2. `git add test.txt`
3. `git commit -m ""`
4. `git push`

## 操作撤回

### 撤销git add
`git reset --mixed`或者 `git reset HEAD`(撤销所有add)

### 取消上一次commit
`git reset --hard HEAD~1`

### 回滚上一次push    
> 场景：push到远程仓库后，发现commit了多余的文件，希望回退到之前的版本。参考链接：http://yijiebuyi.com/blog/8f985d539566d0bf3b804df6be4e0c90.html
1. `git branch -v` 查看commit-hash
2. `git revert commit-hash` commit-hash:需要回滚到的commit的hash,此操作必须工作树必须干净,原理是用一个新的提交来消除一个历史提交所作的任何修改
3. `git push` 更新线上代码即可
