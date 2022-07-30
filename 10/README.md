# ts study

> tsc 의 역할 ?

---

1. package.json 생성 => (npm init -y)
2. npm i typescript
3. ts 파일 생성
4. tsconfig.json 생성 => npx tsc

---

```javascript
let a: string = "hello";
a = "5";

function add(a: number, b: number): number {
    return a + b;
}
const minus: (a: number, b: number) => number = (a, b) => a + b;

type Add = (x: number, y: number) => number;
const addTest: Add = (x, y) => {
    return x + y;
};

addTest(1, 2);
const arr: string[] = ["123", "456"];
const arr2: Array<number> = [12, 3, 4]; //제네릭 형식
const arr3: [number, number, string] = [12, 3, "4"]; //튜플형식
const obj: { lat: number, lon: number } = {
    lat: 36.5,
    lon: 37.5,
};
```

```javascript
const head: Element = document.querySelector("#head")!;
//뒤에 ! => null | undefined가 아님을 개발자가 보증하는 것.
if (head) {
head.innerHTML = "hello_world";
console.log(head);
}
```

---

```javascript
const direction = {
UP: 1,
DOWN: 2,
} as const;
//객체 안의 값을 상수처럼 쓰겠다는 뜻 as const
//readonly 까지 고정이 되어있음
const testA = direction.DOWN;
const testB = direction.UP;

//---

const objec = { a: "1", b: 2 } as const;
type Key = keyof typeof objec; //key들만 가져오기
type Value = typeof objec[keyof typeof objec]; //value 들을 가져오기
```

```javascript
type TypeObj = { hello: "world" } & { lee: "hyun" };
const result: TypeObj = { hello: "world", lee: "hyun" }; //lee or hello 둘 중 하나라도 없으면 에러가 난다.

// ---

interface A {
    first: string;
}

interface B extends A {
    second: string;
}

const mim: B = {
    first: "first",
    second: "second",
};
```

```javascript
function numOrStr(a: number | string) {
    if (typeof a === "number") {
        a.toFixed(1);
    }
    if (typeof a === "string") {
        a.charAt(3);
    }
}

numOrStr("123");
numOrStr(1);

function numOrNumArray(a: number | number[]) {
    if (Array.isArray(a)) {
        //number[]
        a.concat(4);
    }
    if (typeof a === "number") {
        a.toFixed(4);
    }
}

numOrNumArray([1, 2, 3]);
numOrNumArray(1);
```
