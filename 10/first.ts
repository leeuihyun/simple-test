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
const obj: { lat: number; lon: number } = {
    lat: 36.5,
    lon: 37.5,
};
