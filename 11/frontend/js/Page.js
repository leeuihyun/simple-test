export default class Page {
    $root = document.querySelector(".app"); // 루트 엘리먼트
    html = {
        // 각 페이지 별 내용
        aboutMe: `
          <h1>About Me</h1>
          <h3>안녕하세요! 저는 조인태입니다.</h3>
          <h3>저는 개발을 좋아합니다.</h3>
          <h3>기초를 중요하게 생각합니다. 개발의 기본은 기초! 튼튼한 기초는 성장에 큰 도움을 줍니다.</h3>
          `,
        contact: `
          <h1>Contact</h1>
          <h3>Email: IloveDev@gmail.com</h3>
          <h3>Github: https://github.com/IloveDev</h3>
          <h3>Phone: 010-1234-1234</h3>
        `,
    };

    render() {
        this.$root.innerHTML = null; // 렌더링 할때마다 root Element의 내용 초기화
        const { path } = window.history.state; // 지정된 url에 전달한 상태
        const fragment = document.createElement("div");

        switch (
            path // path 별로 구분해서 root 엘리먼트에 페이지 내용 첨부
        ) {
            case "/about-me":
                fragment.innerHTML = this.html.aboutMe;
                this.$root.appendChild(fragment);
                break;
            case "/contact":
                fragment.innerHTML = this.html.contact;
                this.$root.appendChild(fragment);
                break;
        }
    }
}
