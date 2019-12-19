## 前言
> 为规范化公司前端项目开发版本提交流程及代码审查流程，因此制定如下Git管理规范，望周知。

## 分支命名
- `master`: 线上稳定版本分支，【受保护】除管理员外，其他成员无权限推送此分支。
- `develop`: 开发版最新版本分支，【受保护】除管理员外，其他成员无权限推送此分支。 小组成员每次新功能开发可以从拉取此分支，并新建`feature/yourname`本地分支进行功能开发
- `feature/*`: 功能分支，成员开发统一以此方式命名，如：`feature/login`,功能开发完成后，推送本地分支到远程，申请merge request，在这里我们会进行一次`code review`代码审查，无误后管理员将此分支合并到develop
- `release/*`: 预发布分支，【受保护】此分支为版本留存分支以及新功能上线前用于打包的分支，命名统一以 release/productionDate格式，如：`release/v20191230`

## 其他规范说明
1. 关于Git的实践详情解释，参考[团队Git实践方案-Git工作流](https://blog.csdn.net/Sophie_U/article/details/103571156)
2. 关于Code-review过程：此过程会对提交代码的编码规范以及业务逻辑进行简单审核，参考[web编码规范](https://blog.csdn.net/Sophie_U/article/details/103568744)
