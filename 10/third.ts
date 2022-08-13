function sum(a: number, b: number): number {
    return a + b;
}

let person = { name: "Capt", age: 28 };

function logAge(obj: { age: number }) {
    console.log(obj.age);
}

logAge(person);

//위와 같은 것을 인터페이스를 사용하기, 인자가 명시적으로 바뀜.

interface person2 {
    name: string;
    age: number;
}

function logAge2(obj: person2) {
    console.log(obj.age);
}

let dummyPerson = { name: "Capt", age: 28 };
logAge2(dummyPerson);

//인터페이스에 선언된 변수를 모두 사용하고 싶지 않을 때
//아래와 같이 변수명 뒤에 ?를 붙이는 것을 옵션방식이라고 한다.

interface CraftBeer {
    name: string;
    age?: number;
}

const craft: CraftBeer = {
    name: "first",
};

//인터페이스 확장

interface Person {
    name: string;
}

interface Developer extends Person {
    skill: string;
}

let fe = {} as Developer;

fe.name = "ui hyun";
fe.skill = "React";

const feDevloper: Developer = {
    name: "lee",
    skill: "React, js, ts",
};
