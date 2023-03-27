import { setupServer } from "msw/node";
import { rest, HttpResponse } from "msw";

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

describe("msw", () => {
  const server = setupServer();
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it("should work", async () => {
    server.use(
      rest.get("http://test.com/test", (req) => {
        return HttpResponse.json({ test: "test" });
      })
    );
    const response = await fetch("http://test.com/test");
    console.log(response);
    const data = await response.json();
    expect(data).toEqual({ test: "test" });
  });
});
