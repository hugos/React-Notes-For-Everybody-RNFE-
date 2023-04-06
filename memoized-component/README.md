# Experimenting with Memoized component

### What is a memoized version of a component?
&nbsp;

A memoized version of a component is a version of the component that is optimized for performance by caching the result of its rendering.

In React, when a component is re-rendered, <mark>its entire render tree is created from scratch</mark>, even if some of the inputs to the component have not changed. This can be inefficient. especially if the component has expensive rendering logic or if it's rendered frequently.

To avoid unnecessary re-renders, React gives us this `memo` HOC that can be used to memoize the component.

When a component is memoized using this HOC, React caches the resut of its rendering based on its inputs. If these inputs haven't changed, React re-uses te cached result instead of re-rendering the component from zero.

Very simple to do:

```
import React, { memo } from 'react';

function MyComponent(props) {
  // ...
}

export default memo(MyComponent);
```

You can experiment yourself with this repo and check the console logs. 
Just remove the `memo` from the `Todo` component and have a look at the logs!