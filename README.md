# Mini-transpiler

A transpiler that converts JSX code into nodes compatible with [@9elt/miniframe](https://github.com/9elt/miniframe)

> this is a beta, don't use it in production

## example

A simple counter that stops at 10

```js
import { State, createNode } from "@9elt/miniframe";

const counter = new State(0);

function Root() {
  return (
    <div id="root" style={{ textAlign: "center" }}>
      <p>current count: {counter}</p>
      <p style={{ color: counter.as((c) => (c < 10 ? "green" : "red")) }}>
        {counter.as((c) => (c < 10 ? "keep going" : "stop!"))}
      </p>
      <button
        onclick={() => counter.value++}
        disabled={counter.as((c) => c === 10)}
      >
        increment
      </button>
    </div>
  );
}

document.body.appendChild(createNode(Root()));
```
