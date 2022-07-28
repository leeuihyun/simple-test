const head: Element = document.querySelector("#head")!;
//뒤에 ! => null | undefined가 아님을 개발자가 보증하는 것.
if (head) {
    head.innerHTML = "hello_world";
    console.log(head);
}
