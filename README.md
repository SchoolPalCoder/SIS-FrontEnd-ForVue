# SIS-FE-VUE

## 需求清单

-  实现nav
-  二级菜单
-  面包屑
-  路由任意节点跳转
-  要有路由钩子处理事件 处理路由切换时的拦截或重定向
-  全局loading样式（网络请求时、前端渲染时）
-  要有网络层，即有前后端通信,统一拦截并处理请求
-  特殊场景下,需要路由跳转时保存列表状态数据
-  深度结合状态管理
-  实现xb-title 即:鼠标悬浮显示Tip浮层,并且能根据显示区域的边缘情况自动显示到没被遮住的一边
-  滚动加载
-  结合filter 类似于直接在View层可以方便的执行处理函数
-  类似xb-window的穿透,插槽
-  根据路由设置网页的title
-  项目国际化语言支持

## 提交流程

1. 克隆代码到本地

```shell
git clone https://github.com/SchoolPalCoder/SIS-FrontEnd-ForVue.git
```

2. 创建个本地分支

```shell
git branch my_remote_branch_name
```

其中`my_remote_branch_name`为你的分支名称

3. 切换到对应分支进行开发

```shell
git checkout my_remote_branch_name
```

4. 提交本地分支至远程仓库

```shell
  git push -u origin my_remote_branch_name
```
