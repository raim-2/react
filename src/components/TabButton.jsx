// export default function TabButton(props) {
/**
 * children prop는 별도 설정한 속성이 아니라,
 * 리액트에서 설정해둔 prop이다.
 * 컴포넌트 안의 텍스트의 내용이 포함되어 있다.
 */

// 1. children 사용
// export default function TabButton({children, onSelect, isSelected}) {
// onSelect를 지우고 여기에도 나머지 매개변수를 사용할 수 있다.
export default function TabButton({children, isSelected, ...props}) {
    // 이벤트연결하기
    // 1. 일반 명령식 자바스크립트
    // document.querySelector('button').addEventListener('click', () => {})

    // 2. 그 대신 리액트에서 제공되는 prop 사용하자
    // on이벤트를 사용해라 → 괄호를 넣으면, 바로 실행되기 때문에 괄호를 넣어주지 x
    console.log('tabbbuton component executing')
    return (
        <li>
            {/* <button>{props.children}</button> */}
            {/* jsx에서는 class대신 className을 사용한다. id는 그대로 id */}
            {/* <button className={isSelected ? 'active' : undefined} onClick={onSelect}>{children}</button> */}
            <button className={isSelected ? 'active' : undefined} {...props}>{children}</button>
        </li>
    )
}

//2 2. 속성 사용
// export default function TabButton({label}) {
//     return (
//         <li>
//             {/* <button>{props.label}</button> */}
//             <button>{label}</button>
//         </li>
//     )
// }

/**
 * 둘 다 같은 결과를 출력함 → 결국은 선택이다.
 * children을 사용할 것인지, 별도 속성을 사용할 것인지
 */