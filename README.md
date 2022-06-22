# simple-test

🌟 내 생각대로 만드는 간단한 프로그램들

### @reduxjs/toolkit

[@reduxjs/toolkit](https://github.com/leeuihyun/simple-test/tree/main/5/README.md)

react의 버전이 올라가면서 createStore을 이용하여 전역 상태 관리하는 것이 아닌 @reduxjs/toolkit을 이용하는 것을 추천하기에 공부를 했다.
기본적인 원리는 다 동일하다. 하지만 기본적으로 코드가 줄고 import 받아야 하는 파일 또한 react-redux, @reduxjs/toolkit만 import 받으면 된다.
불변성을 자동으로 유지시켜주고, devtools 등도 툴킷에서 다 연동이 자동으로 되어 있기 때문에 편리하다.
가장 편리한 것은 아무래도 store을 만들 때 부분이다.
configureStore를 이용해서 넣어주기만 한다면 끝이 난다. 정말 간편하다 💫
