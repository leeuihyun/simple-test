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
