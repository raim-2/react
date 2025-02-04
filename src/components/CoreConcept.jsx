import "./CoreConcept.css";

// 리액트 컴포넌트 함수를 사용할 때는 하나의 매개변수(이름은 자유롭게 지정가능하나 일반적으로 props라고 함)만 사용 가능하다.
// 아니면 {}연산자를 사용해 객체구조분해 문법 사용하여 코드를 줄일 수도 있음
export default function CorecConcept({image, title, description}) {
    return (
        <li>
            {/* <img src={props.image} alt={props.title} />
            <h3>{props.title}</h3>
            <p>{props.description}</p> */}
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
        </li>
    );
}