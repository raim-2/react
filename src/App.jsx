/**
 * 얘가 리액트 컴포넌트이다. → 자바스크립트 함수와 같다고 볼 수 있음
 * 함수 제목은 대문자로 시작하고, 함수에서 렌더링 가능한 값이 반환되야 함
 * 보통은 컴포넌트가 하나가 아니라 몇십 몇백개까지 될 수 있다.
 * 대문자로 입력하는 이유는, 내장 컴포넌트가 아니라 별도로 만든것임을 알리기 위함도 있다./커스텀 컴포넌트
 *
 * 화면에 보여지는 요소들은 소문자로 입력이 된 내장 컴포넌트들이 랜더링되어 보여지는 것이고,
 * 커스텀컴포넌트와 같이 대문자로 입력이 된 컴포넌트들은 함수로서 실행되고 랜더링되어 보여지진 X
 */

function Header() {
  return (
    <header>
      <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        Fundamental React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

/* <Header></Header> 또는 <Header /> */
function App() {
  return (
    <div>
      <Header></Header>
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
