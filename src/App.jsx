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
import { useState } from 'react'; // 리액트에서 use로 시작하는 함수는 리액트 Hooks라 함

import CorecConcept from "./components/CoreConcept.jsx";
import Header from "./components/Header/Header.jsx";
import TabButton from "./components/TabButton.jsx";
import { CORE_CONCEPTS } from "./data.js";

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
    // const stateArray =useState('Please click a button');
    // let tabContent = 'Please click a button';
    
    // 이름은 자유롭게 지을 수 있나 아래 이름이 일반적, 첫번째 요소는 초기값
    // 두번째 요소는 항상 함수이며, 상태를 업데이트 하기 위해 실행되고, 저장 값을 업데이트한다.
    
    const [ selectedTopic, setSelecTopic] =useState('Please click a button');
    
    function handleClick(selectedButton) {
        // selectedButton => 'components', 'jsx', 'props', 'state'
        console.log(selectedButton + ' selected!');
        setSelecTopic(selectedButton);
        console.log(setSelecTopic);
    }
    
    console.log('app component executing');

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
                <section id="examples">
                    <h2>Examples</h2>
                    <menu>
                        {/* 컴포넌트 합성 */}
                        {/* <TabButton label="Components"></TabButton> */}
                        {/* <TabButton onSelect={handleClick}>Components</TabButton> */}
                        {/* 이벤트를 핸들링하는 함수의 실행을 다른 함수로 감싸면,
                        그 다른 함수가 이벤트 핸들링의 prop(속성)의 값으로 전달된다. */}
                        <TabButton onSelect={() => handleClick('components')}>Components</TabButton>
                        <TabButton onSelect={() => handleClick('jsx')}>JSX</TabButton>
                        <TabButton onSelect={() => handleClick('props')}>Props</TabButton>
                        <TabButton onSelect={() => handleClick('state')}>State</TabButton>
                    </menu>
                    {selectedTopic}
                </section>
            </main>
        </div>
    );
}

export default App;
