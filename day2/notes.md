| Feature                          | `fetch`                                               | `axios`                                                             |
| -------------------------------- | ------------------------------------------------------- | --------------------------------------------------------------------- |
| **Response Parsing**       | Must manually parse (e.g.,`.json()`)                  | Automatically parses JSON if the content type is `application/json` |
| **Error Handling**         | Only rejects on network errors                          | Rejects on non-2xx HTTP status codes, making error handling easier    |
| **Request Abortion**       | Supports request cancellation using `AbortController` | Supports cancellation with**CancelToken**                       |
| **Timeout Handling**       | No built-in timeout support                             | Built-in timeout support                                              |
| **Browser Support**        | Native to modern browsers                               | Requires installation (polyfill for older browsers)                   |
| **Interceptors**           | Not available                                           | Supports**request/response interceptors**                       |
| **Request Transformation** | Requires manual transformation                          | Built-in transformation of requests and responses                     |


|           Feature           | **Call Stack**                                     | **Event Queue (Message Queue)**                            |
| :--------------------------: | -------------------------------------------------------- | ---------------------------------------------------------------- |
|    **Type of Code**    | Synchronous (e.g., function calls, variable assignments) | Asynchronous (e.g., setTimeout, event listeners)                 |
| **Order of Execution** | Follows**LIFO**(Last In, First Out)                | First In, First Out (FIFO)                                       |
|   **Execution Time**   | Executes immediately and blocks the thread               | Executes when the stack is empty                                 |
|       **Tasks**       | Holds function calls during execution                    | Holds completed asynchronous tasks (callbacks)                   |
|      **Blocking**      | Yes, it blocks asynchronous tasks while it’s processing | No, async tasks in the event queue wait until the stack is clear |
