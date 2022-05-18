import { createGlobalStyle } from "styled-components"; //1

export default createGlobalStyle`		      // 3
  @font-face {
    font-family: 'smoo';	//폰트를 사용할 때 부르는 이름 지정
    src: local('smoo'),    //지정한 이름
    url('./Smooch-Regular.ttf');
    font-weight: 300; 		//폰트 기본 설정
    font-style: normal;
  }
`;
