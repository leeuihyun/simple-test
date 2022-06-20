# redux-toolkit

-   createSlice를 이용한 reducer 및 action 처리
-   RTK를 이용할 때는 @reduxjs/toolkit 과 react-redux 두개만 설치하면 된다. 심지어 redux를 설치할 필요도 없음
-   > store 설정 방법 (훨씬 간편해짐)

```javascript
[store.js];
import { configureStore } from "@reduxjs/toolkit";

import counterSlice from "./slice/counterSlice";

const store = configureStore({
    reducer: {
        counter: counterSlice,
    },
});

export default store;
```

```javascript
[reducers / counterSlice.js];
```
