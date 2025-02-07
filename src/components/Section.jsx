export default function Section({ title, children, ...props }) {
    return (
        /**
         * 직접 구조적 분해할당을 이용해 id 등을 넘길 수 있으나, 그러면 className 등
         * 전부다 직접 넘겨줘야 한다는 단점이 있음
         * 대신에 자바스크립트 내장 문법인 ...(나머지 매개변수)를 사용
         * 이 경우 props를 모두 전달 가능하다.
         */
        <section {...props}>
        {/* <section id={id}> */}
            <h2>{title}</h2>
            {children}
        </section>
    );
}
