<h1 align="center">
  furaffinity-api
</h1>

<h5 align="center">FurAffinity wrapper for Node.js</h5>

<div align="center">
  <a href="https://www.npmjs.com/package/furaffinity-api">
    <img alt="npm" src="https://img.shields.io/npm/v/furaffinity-api">
  </a>
  <a href="https://www.npmjs.com/package/furaffinity-api">
    <img alt="npm" src="https://img.shields.io/npm/dw/furaffinity-api">
  </a>
  <a href="https://github.com/recallfuture/furaffinity-api">
    <img alt="NPM" src="https://img.shields.io/npm/l/furaffinity-api">
  </a>
  <p align="center"><a href="README.zh-CN.md">English</a> | 中文</p>

</div>

> **重要提示:** 本项目适用于 Furaffinity 的 **现代** 风格.

## 安装

```bash
npm install furaffinity-api
```

## APIs

### Login(a: string, b: string)

使用 cookie 登录 furaffinity

```js
import { Login } from "furaffinity-api"
// or
const { Login } = require("furaffinity-api")

// to allow all results to be accessible, add your cookies
Login("cookie_a", "cookie_b")
```

### Search(query: string, options: SearchOptions)

搜索作品

```js
import { Search, Type } from 'furaffinity-api';

Search('search query', { /** SearchOptions */ type?, rating?, page? }).then(res => {
  // 结果
  res[0].getSubmission().then(submission => {
    // 作品详情
  });
});
```

### Browse(options?: BrowseOptions)

获取浏览页作品

```js
import { Browse } from "furaffinity-api"

Browse({
  /** BrowseOptions */
}).then((res) => {
  // 结果
  res[0].getSubmission().then((submission) => {
    // 作品详情
  })
})
```

### Submission(id: string)

获取特定的作品

```js
import { Submission } from "furaffinity-api"

Submission("1234567890").then((res) => {
  // res is a Submission
})
```

### User()

获取当前用户信息

```js
import { User } from "furaffinity-api"

User().then((user) => {
  // console.log(user);
})
```

### Author(id: string)

获取某个作者的用户信息

```js
import { Author, WatchingList } from "furaffinity-api"

Author("user_id").then((res) => {
  // res is an Author
  // Author has id, name, url and avatar(maybe undefined)
  WatchingList(res.id).then((list) => {
    // list is an Author array
  })
})
```

### Gallery(id: string)

获取某用户的画廊

```js
import { Gallery } from "furaffinity-api"

Gallery("author_id").then((res) => {
  // 结果
  res[0].getSubmission().then((submission) => {
    // 作品详情
  })
})
```

### Scraps(id: string)

获取某用户废弃作品

```js
import { Scraps } from "furaffinity-api"

Scraps("author_id").then((res) => {
  // 结果
  res[0].getSubmission().then((submission) => {
    // 作品详情
  })
})
```

### Submissions()

根据时间线，获取作品详情

```js
import { Submissions } from "furaffinity-api"

Submissions().then((res) => {
  // 结果
  res[0].getSubmission().then((submission) => {
    // 某条作品详情
  })
})
```

### WatchingList(id: string)

获取某用户的关注列表（暂不能获取头像）

```js
import { WatchingList } from "furaffinity-api"

WatchingList("author_id").then((list) => {
  // 作者列表
})
```

### MyWatchingList()

**Login first**
获取当前登录用户的关注列表（暂不能获取头像）

```js
import { MyWatchingList } from "furaffinity-api"

MyWatchingList().then((list) => {
  // 作者列表
})
```

## 鸣谢

- [insert/furaffinity](https://gitlab.insrt.uk/insert/furaffinity): furaffinity-api 基于这个仓库

## License

ISC
