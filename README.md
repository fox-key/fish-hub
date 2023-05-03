## language:  javaScript && react.
## auth: fengkai.
## HomePage: www.fishhub.asia
 description: monorepo架构，使用lerna多包管理，其中component.utils、component.ui为公共包，admin、nav等为私有项目包。

# usage
## start:
* yarn config set reigstry https://registry.npm.taobao.org
* ?. yarn install lerna -g
* yarn install 
* yarn start:nav

## build:
* yarn build:nav

## develop:
* yarn upload:nav

## 关于nav：
> 灵感来自： https://hello-nav.github.io/ </br>
> 数据来自： https://hello-nav.github.io/ </br>
> 后续考虑使用Taro进行重构

