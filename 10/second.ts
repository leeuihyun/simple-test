const head: Element = document.querySelector("#head")!;
//뒤에 ! => null | undefined가 아님을 개발자가 보증하는 것.
if (head) {
    head.innerHTML = "hello_world";
    console.log(head);
}

//---

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

//---

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
