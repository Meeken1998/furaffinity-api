<h1 align="center">
  furaffinity-api
</h1>

<h5 align="center">FurAffinity API for Node.js</h5>

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
  <p align="center"><a href="https://github.com/recallfuture/furaffinity-api">English</a> | 中文</p>

</div>

> **重要提示:** 本项目适用于 Furaffinity 的 **最新** 版本.

## 安装

```bash
npm install furaffinity-api
```

## APIs

### Login(a: string, b: string)

使用 cookie 登录 furaffinity

```js
<<<<<<< HEAD
import { Login } from "furaffinity-api";
// or
const { Login } = require("furaffinity-api");

// to allow all results to be accessible, add your cookies
Login("cookie_a", "cookie_b");
=======
import { Login } from "furaffinity-api"
// or
const { Login } = require("furaffinity-api")

// to allow all results to be accessible, add your cookies
Login("cookie_a", "cookie_b")
>>>>>>> f69d413dc266180f97804fe5bfcf27c0342c0b74
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
<<<<<<< HEAD
import { Browse } from "furaffinity-api";

Browse({
  /** BrowseOptions */
}).then(res => {
  // 结果
  res[0].getSubmission().then(submission => {
    // 作品详情
  });
});
=======
import { Browse } from "furaffinity-api"

Browse({
  /** BrowseOptions */
}).then((res) => {
  // 结果
  res[0].getSubmission().then((submission) => {
    // 作品详情
  })
})
>>>>>>> f69d413dc266180f97804fe5bfcf27c0342c0b74
```

### Submission(id: string)

获取特定的作品

```js
<<<<<<< HEAD
import { Submission } from "furaffinity-api";

Submission("1234567890").then(res => {
  // res is a Submission
});
=======
import { Submission } from "furaffinity-api"

Submission("1234567890").then((res) => {
  // res is a Submission
})
>>>>>>> f69d413dc266180f97804fe5bfcf27c0342c0b74
```

### User()

获取当前用户信息

```js
<<<<<<< HEAD
import { User } from "furaffinity-api";

User().then(user => {
  // console.log(user);
});
=======
import { User } from "furaffinity-api"

User().then((user) => {
  // console.log(user);
})
>>>>>>> f69d413dc266180f97804fe5bfcf27c0342c0b74
```

### Author(id: string)

获取某个作者的用户信息

```js
<<<<<<< HEAD
import { Author, WatchingList } from "furaffinity-api";

Author("user_id").then(res => {
  // 某作者信息
  // 包含 id, name, url and avatar(可能为 undefined)
  WatchingList(res.id).then(list => {
    // 查询该作者的关注列表
  });
});
=======
import { Author, WatchingList } from "furaffinity-api"

Author("user_id").then((res) => {
  // 某作者信息
  // 包含 id, name, url and avatar(可能为 undefined)
  WatchingList(res.id).then((list) => {
    // 查询该作者的关注列表
  })
})
>>>>>>> f69d413dc266180f97804fe5bfcf27c0342c0b74
```

### Gallery(id: string)

获取某用户的画廊

```js
<<<<<<< HEAD
import { Gallery } from "furaffinity-api";

Gallery("author_id").then(res => {
  // 结果
  res[0].getSubmission().then(submission => {
    // 作品详情
  });
});
=======
import { Gallery } from "furaffinity-api"

Gallery("author_id").then((res) => {
  // 结果
  res[0].getSubmission().then((submission) => {
    // 作品详情
  })
})
>>>>>>> f69d413dc266180f97804fe5bfcf27c0342c0b74
```

### Scraps(id: string)

获取某用户废弃作品

```js
<<<<<<< HEAD
import { Scraps } from "furaffinity-api";

Scraps("author_id").then(res => {
  // 结果
  res[0].getSubmission().then(submission => {
    // 作品详情
  });
});
=======
import { Scraps } from "furaffinity-api"

Scraps("author_id").then((res) => {
  // 结果
  res[0].getSubmission().then((submission) => {
    // 作品详情
  })
})
>>>>>>> f69d413dc266180f97804fe5bfcf27c0342c0b74
```

### Submissions()

根据时间线，获取作品详情

```js
<<<<<<< HEAD
import { Submissions } from "furaffinity-api";

Submissions().then(res => {
  // 结果
  res[0].getSubmission().then(submission => {
    // 某条作品详情
  });
});
=======
import { Submissions } from "furaffinity-api"

Submissions().then((res) => {
  // 结果
  res[0].getSubmission().then((submission) => {
    // 某条作品详情
  })
})
>>>>>>> f69d413dc266180f97804fe5bfcf27c0342c0b74
```

### WatchingList(id: string)

获取某用户的关注列表（暂不能获取头像）

```js
<<<<<<< HEAD
import { WatchingList } from "furaffinity-api";

WatchingList("author_id").then(list => {
  // 作者列表
});
=======
import { WatchingList } from "furaffinity-api"

WatchingList("author_id").then((list) => {
  // 作者列表
})
>>>>>>> f69d413dc266180f97804fe5bfcf27c0342c0b74
```

### MyWatchingList()

**Login first**
获取当前登录用户的关注列表（暂不能获取头像）

```js
<<<<<<< HEAD
import { MyWatchingList } from "furaffinity-api";

MyWatchingList().then(list => {
  // 作者列表
});
=======
import { MyWatchingList } from "furaffinity-api"

MyWatchingList().then((list) => {
  // 作者列表
})
>>>>>>> f69d413dc266180f97804fe5bfcf27c0342c0b74
```

## 测试

在测试前，先在 `/tests/jest.config.ts` 中添加配置:

```js
export const options: ITestConfig = {
  loginOptions: {
    cookieA: "your cookie a", // your cookies
<<<<<<< HEAD
    cookieB: "your cookie b"
  },
  watchOptions: {
    userId: "your userid",
    shouldContainUserId: "userid you are watching"
  },
  authorOptions: {
    userId: "your favorite author's userid"
  }
};
=======
    cookieB: "your cookie b",
  },
  watchOptions: {
    userId: "your userid",
    shouldContainUserId: "userid you are watching",
  },
  authorOptions: {
    userId: "your favorite author's userid",
  },
}
>>>>>>> f69d413dc266180f97804fe5bfcf27c0342c0b74
```

接着运行:

```bash
npm run test
```

## 鸣谢

- [insert/furaffinity](https://gitlab.insrt.uk/insert/furaffinity): furaffinity-api 基于这个仓库

## License

ISC
