import './App.css';

// App 컴포넌트
// - React 애플리케이션 루트 컴포넌트
// - 화면 UI를 정의하는 컴포넌트 + 다른 컴포넌트를 포함
// -JSX 문법을 사용해서 HTML+JS를 작성
// - CSS 스타일 정의


// JSX문법
// - JS와 HTML을 결합한 문법
// - document 객체 X
// -사용문법: { 변수 }
function App() {

  let isLongin = true;
  let name = '윤아연';


  
  // CSS 스타일 정의 방법 3가지
  // 1. 요소 내부에 style 속성으로 적용 -> 값의 형태 : 객체
  // ex ) <div style={{color:"red"}}></div>
  // 2. style 값을 변수에 선언
  // 3. css 파일 분리
  let styled =  {
    border :"1px solid black",
    width : 400,
    textAlign:"center"
   };

   // 여러 조건을 판단해야 할 경우
   let temp = prompt("오늘의 온도는?");
   let result ="";
   if(temp >25) {
    result = "너무 덥다.."
   }else if(temp >20) {
    result = "조금 덥다.."
   }else if(temp >14) {
    result = "선선하다.."

   }

  // 화면에 보여줄 HTML을 구성
  // 부모 요소는 반드시 하나! 
  // 중괄호 안에는 객체
  return (
   <div style={styled}
  >
     <div className="App">
        {/* 
          조건부 렌더링
          - 조건이 하나일 때 사용하는 문법
          - ex) 클래스 or 스타일 이름 추가/삭제, 상태값과 연계
         */}
      로그인상태:{isLongin && "로그인된 상태"}<br></br>
       나이:{name}<br></br>
       {30}
  </div>
      {/* 
        조건부 렌더링
      - 삼항연산자를 활용하는 방법 { 조건식 ? () : () }
      */}
  
      <div className="App">
       이름:{name}<br></br>
       나이:{30}
       {30 > 19 ?(
        <p>성인</p>
       ):(
        <p>미성년자</p>

       )}

       <p>오늘의 날씨는? {result}</p>

     </div>
    </div>
  );
}

// 삼항연산자  {30 > 19 ?(<p>성인</p>):(<p>미성년자</p>)}
export default App;


