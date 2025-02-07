import { CORE_CONCEPTS } from "../data";
import CorecConcept from "./CoreConcept.jsx";
import Section from "./Section.jsx";

export default function CoreConcepts() {
    return (
        <Section title="core-concepts" id="core-concepts">
            <ul>
                {/* 배열 맵핑해 데이터를 동적으로 출력, 이때, 랜더링 및 업데이트가 잘되도록 key 속성도 추가해야함 */}
                {CORE_CONCEPTS.map((conceptItem) => (
                    <CorecConcept key={conceptItem.title} {...conceptItem} />
                ))}
                {/* 재사용하면서 할 때마다 다른 데이터 전달하고자 할 때 사용 */}
                {/* 커스텀 컴포넌트에는 props라는 커스텀 속성 (컴포넌트를 설정하는 개념이라고 해서 props라 불림)도 지정 가능하다.
                            리액트가 props를 키로, 해당 속성의 값을 값으로 해 하나의 객체로 그룹화한다. */}

                {/* <CorecConcept id={CORE_CONCEPTS[0]} />
                            <CorecConcept id={CORE_CONCEPTS[1]} />
                            <CorecConcept id={CORE_CONCEPTS[2]} />
                            <CorecConcept id={CORE_CONCEPTS[3]} /> */}

                {/* 스프레드연산자 사용해 객체의 모든 키, 값을 뽑을 수 있다. */}
                {/* 이렇게 하면 데이터 변경시 문제 생김 - 개수 변경시 */}
                {/* <CorecConcept
                                title={CORE_CONCEPTS[0].title}
                                description={CORE_CONCEPTS[0].description}
                                image={CORE_CONCEPTS[0].image}
                            />
                            <CorecConcept {...CORE_CONCEPTS[1]} />
                            <CorecConcept {...CORE_CONCEPTS[2]} />
                            <CorecConcept {...CORE_CONCEPTS[3]} /> */}
            </ul>
        </Section>
    );
}
