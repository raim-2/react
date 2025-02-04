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
// import componentImg from "./assets/components.png";
import CorecConcept from "./components/CoreConcept.jsx";
import Header from "./components/Header/Header.jsx";
import { CORE_CONCEPTS } from "./data.js";

/* <Header></Header> 또는 <Header /> */
function App() {
    return (
        <div>
            {/* <Header></Header> */}
            <Header />
            <main>
                <section id="core-concepts">
                    <h2>Core Concepts</h2>
                    <ul>
                        {/* 재사용하면서 할 때마다 다른 데이터 전달하고자 할 때 사용 */}
                        {/* 커스텀 컴포넌트에는 props라는 커스텀 속성 (컴포넌트를 설정하는 개념이라고 해서 props라 불림)도 지정 가능하다.
                        리액트가 props를 키로, 해당 속성의 값을 값으로 해 하나의 객체로 그룹화한다. */}
                      
                        {/* <CorecConcept id={CORE_CONCEPTS[0]} />
                        <CorecConcept id={CORE_CONCEPTS[1]} />
                        <CorecConcept id={CORE_CONCEPTS[2]} />
                        <CorecConcept id={CORE_CONCEPTS[3]} /> */}

                        {/* 스프레드연산자 사용해 객체의 모든 키, 값을 뽑을 수 있다. */}
                        <CorecConcept
                          title={CORE_CONCEPTS[0].title}
                          description={CORE_CONCEPTS[0].description}
                          image={CORE_CONCEPTS[0].image}
                        />
                        <CorecConcept {...CORE_CONCEPTS[1]} />
                        <CorecConcept {...CORE_CONCEPTS[2]} />
                        <CorecConcept {...CORE_CONCEPTS[3]} />
                    </ul>
                </section>
                <h2>Time to get started!</h2>
            </main>
        </div>
    );
}

export default App;
