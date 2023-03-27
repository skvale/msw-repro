# msw-repro

https://github.com/mswjs/msw/discussions/1464#discussioncomment-5429825

```sh
pnpm install
pnpm test
```

A few ways of mocking fetch in Jest 27

You see different results in newer version of Jest, for example try Jest v29

```ts
// 1.
// This works in Jest v27.5.1
// import jestFetchMock from "jest-fetch-mock";
// jestFetchMock.enableMocks();

// 2.
// Doesn't work in Jest v27.5.1
// TypeError: body.getReader is not a function
// import fetch from 'isomorphic-fetch'

// 3.
// This works in Jest v27.5.1
// import 'isomorphic-fetch'

// 4.
// Doesn't work in Jest v27.5.1
// SyntaxError: Unexpected end of JSON input
import "whatwg-fetch";

// 5.
// Doesn't work in Jest v27.5.1
// ReferenceError: XMLHttpRequest is not defined
// import {fetch} from "whatwg-fetch";
```
