/**
 * 얘가 리액트 컴포넌트이다. → 자바스크립트 함수와 같다고 볼 수 있음
 * 함수 제목은 대문자로 시작하고, 함수에서 렌더링 가능한 값이 반환되야 함
 * 보통은 컴포넌트가 하나가 아니라 몇십 몇백개까지 될 수 있다.
 * 대문자로 입력하는 이유는, 내장 컴포넌트가 아니라 별도로 만든것임을 알리기 위함도 있다./커스텀 컴포넌트
 *
 * 화면에 보여지는 요소들은 소문자로 입력이 된 내장 컴포넌트들이 랜더링되어 보여지는 것이고,
 * 커스텀컴포넌트와 같이 대문자로 입력이 된 컴포넌트들은 함수로서 실행되고 랜더링되어 보여지진 X
 *
 * 컴포넌트가 증가할 수록 하나의 파일에 여러개의 컴포넌트를 넣는것은 좋지 x
 */

import { Fragment } from "react"; // 리액트에서 use로 시작하는 함수는 리액트 Hooks라 함
import CoreConcepts from "./components/CoreConcepts.jsx";
import Examples from "./components/Examples.jsx";
import Header from "./components/Header/Header.jsx";

/* <Header></Header> 또는 <Header /> */
/**
 * 컴포넌트 함수를 코드는 한 번 밖에 실행되지 않는다.
 * → 일반적인 방법으로는 데이터가 변경되도 ui가 업데이트 되지 않음.
 * state라는 개념을 이용해서 처리할 수 있다.
 *
 * 이 때 사용하는 것이 use로 시작하는 함수인 리액트 hooks
 * useState를 사용한다. → useState는 리액트 컴포넌트나 리액트 hooks 안에서 호출해야 함
 * 또한 다른 함수(함수나 if문 또는 loop도 x)와 중첩되서 호출되선 안되고,
 * → 컴포넌트 함수의 최상위에서 호출되야 함함
 */

function App() {
    console.log("app component executing");

    return (
        /**
         * jsx표현식은 꼭 하나의 부모요소/상위 요소로 묶여있어야 됨
         * -> 이유는 두 개의 값을 반환하는게 불가능하기 때문 (하나의 값만 반환하기 위함)
         * <div></div>를 사용해 묶을 순 있지만 이렇게 되면 필요없는 div만 하나 더 추가하게 되는 것
         * -> 이를 대체하는 <Fragment>이다. 이는 리액트 안에 정의되어 있는 컴포넌트로,
         * 빌드 시에 <div>와 달리 아무것도 없다는 것을 알 수 있다.
         * <Fragment></Fragment> 대신에 <></> 이렇게 쓰기도 함. 
         */
        <Fragment>
            {/* <Header></Header> */}
            <Header />
            <main>
                <CoreConcepts></CoreConcepts>
                <Examples></Examples>
            </main>
        </Fragment>
    );
}

export default App;
