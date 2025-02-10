import { useState } from "react";
import { EXAMPLES } from "../data";
import Section from "./Section";
import TabButton from "./TabButton";
import Tabs from "./Tabs";

export default function Examples() {
    // const stateArray =useState('Please click a button');
    // let tabContent = 'Please click a button';

    // 이름은 자유롭게 지을 수 있나 아래 이름이 일반적, 첫번째 요소는 초기값
    // 두번째 요소는 항상 함수이며, 상태를 업데이트 하기 위해 실행되고, 저장 값을 업데이트한다.

    // const [selectedTopic, setSelecTopic] = useState();

    // function handleClick(selectedButton) {
    //     // selectedButton => 'components', 'jsx', 'props', 'state'
    //     console.log(selectedButton + " selected!");
    //     setSelecTopic(selectedButton);
    //     //console.log(selectedTopic);
    //     //app 컴포넌트를 다 실행 후 -> 업데이트 된 값 사용 가능
    //     //따라서 업데이트 스케줄이 조정되자마자 바로 로그찍어보면 업데이트된 값이 안보이는 것
    // }
    const [selectedTopic, setSelecTopic] = useState();

    function handleClick(selectedButton) {
        // selectedButton => 'components', 'jsx', 'props', 'state'
        console.log(selectedButton + " selected!");
        setSelecTopic(selectedButton);
        //console.log(selectedTopic);
        //app 컴포넌트를 다 실행 후 -> 업데이트 된 값 사용 가능
        //따라서 업데이트 스케줄이 조정되자마자 바로 로그찍어보면 업데이트된 값이 안보이는 것
    }

    // jsx 코드는 반환되지 않아, 컴포넌트의 코드 아무곳에 일반 값으로 사용 가능, 변수 또는 상수에 저장 가능하다.
    // 3. 변수나 상수에 저장
    let tabContent = <p>Please select a topic.</p>;

    if (selectedTopic) {
        tabContent = (
            <div id="tab-content">
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                    <code>{EXAMPLES[selectedTopic].code}</code>
                </pre>
            </div>
        );
    }

    return (
        /**
         * props들은 커스텀 컴포넌트 설정시, 자동으로 적용되지 않는다. -> id를 설정했지만 적용되지 않는 이유
         * 커스텀 컴포넌트에 별도로 매개변수 또는 구조적분해할당을 이용해 넘겨줘야 함
         * -> 그러나 이 경우 별도로 하나하나 지정해야되는 단점이 있어 나머지 매개변수를 이용한다.
         * 이를 통해 모든 props를 한꺼번에 전달할 수 있다.
         */
        <Section title="examples" id="examples">
            {/* 탭 컴포넌트의 재사용성을 높이고, 좀 더 유연하게 사용하기 위함 */}
            <Tabs
                /**
                 * 이 패턴은 컴포넌트 식별자를 속성의 값으로 보내고, 이 식별자가 컴포넌트에 속해있으므로
                 * 다양한 HTML요소를 동적으로 렌더링할 수 있다.
                 * buttonsContainer={Section} //커스텀컴포넌트는 동적으로 넣어줘야됨
                 */
                //래퍼로서 사용할 때 menu를 사용하는 게 좋음 -> 기본값으로 넣을 수 있다.
                //ButtonsContainer="menu" //속성의 값으로서의 컴포넌트가 값으로 들어간다. - 문자열 식별자(내장 요소)
                buttons={
                    <>
                        <TabButton
                            isSelected={selectedTopic === "components"}
                            // onSelect={() => handleClick("components")}
                            onClick={() => handleClick("components")}
                        >
                            Components
                        </TabButton>
                        <TabButton
                            isSelected={selectedTopic === "jsx"}
                            // onSelect={() => handleClick("jsx")}
                            onClick={() => handleClick("jsx")}
                        >
                            JSX
                        </TabButton>
                        <TabButton
                            isSelected={selectedTopic === "props"}
                            // onSelect={() => handleClick("props")}
                            onClick={() => handleClick("props")}
                        >
                            Props
                        </TabButton>
                        <TabButton
                            isSelected={selectedTopic === "state"}
                            // onSelect={() => handleClick("state")}
                            onClick={() => handleClick("state")}
                        >
                            State
                        </TabButton>
                    </>
                }
            >
                {tabContent}
            </Tabs>
            <menu>
                {/* 컴포넌트 합성 */}
                {/* <TabButton label="Components"></TabButton> */}
                {/* <TabButton onSelect={handleClick}>Components</TabButton> */}
                {/* 이벤트를 핸들링하는 함수의 실행을 다른 함수로 감싸면,
                            그 다른 함수가 이벤트 핸들링의 prop(속성)의 값으로 전달된다. */}
                {/* <TabButton
                    isSelected={selectedTopic === "components"}
                    // onSelect={() => handleClick("components")}
                    onClick={() => handleClick("components")}
                >
                    Components
                </TabButton>
                <TabButton
                    isSelected={selectedTopic === "jsx"}
                    // onSelect={() => handleClick("jsx")}
                    onClick={() => handleClick("jsx")}
                >
                    JSX
                </TabButton>
                <TabButton
                    isSelected={selectedTopic === "props"}
                    // onSelect={() => handleClick("props")}
                    onClick={() => handleClick("props")}
                >
                    Props
                </TabButton>
                <TabButton
                    isSelected={selectedTopic === "state"}
                    // onSelect={() => handleClick("state")}
                    onClick={() => handleClick("state")}
                >
                    State
                </TabButton> */}
            </menu>
            {/* {selectedTopic} */}
            {/* 조건 설정하는 법 */}

            {/* 1. 삼항연산자 부정 / 긍정조건으로 나눠서 처리 */}
            {/* {!selectedTopic ? (
                            <p>Please select a topic.</p>
                        ) : null}
                        {selectedTopic ? (
                            <div id="tab-content">
                                <h3>{EXAMPLES[selectedTopic].title}</h3>
                                <p>{EXAMPLES[selectedTopic].description}</p>
                                <pre>
                                    <code>{EXAMPLES[selectedTopic].code}</code>
                                </pre>
                            </div>
                        ) : null} */}

            {/* 2. 삼항연산자 두조건 합쳐서 처리 */}
            {/* {!selectedTopic ? (
                            <p>Please select a topic.</p>
                        ) : (
                            <div id="tab-content">
                                <h3>{EXAMPLES[selectedTopic].title}</h3>
                                <p>{EXAMPLES[selectedTopic].description}</p>
                                <pre>
                                    <code>{EXAMPLES[selectedTopic].code}</code>
                                </pre>
                            </div>
                        )} */}

            {/* 3. 변수나 상수에 저장 */}
            {/* {tabContent} */}

            {/* && 연산자를 사용해서 처리
                        아래와 같은 방법도 더 이해하기 쉬운 코드로사용됨
                        삼항연산자 사용대신 and 연산자를 사용할 수 있는데,
                        조건이 사실인 경우, and 연산자 뒤에 내용을 출력하기 때문 */}
            {/* {!selectedTopic && <p>Please select a topic.</p>}
            {selectedTopic && (
                <div id="tab-content">
                    <h3>{EXAMPLES[selectedTopic].title}</h3>
                    <p>{EXAMPLES[selectedTopic].description}</p>
                    <pre>
                        <code>{EXAMPLES[selectedTopic].code}</code>
                    </pre>
                </div>
            )} */}
        </Section>
    );
}
