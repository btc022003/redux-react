# redux-react

webpack+redux+react+redux-router-simple

通过一个简单的demo结合使用来练习使用redux

> 纠结几天的页面刷新后无法找到路由的问题终于解决了

[history](http://react-guide.github.io/react-router-cn/docs/guides/basics/Histories.html) 参考这个链接，修改了nginx的配置就好了。

```
server {
  ...
  location / {
    try_files $uri /index.html
  }
}
```


