import reactImg from "../../assets/react-core-concepts.png";
import "./Header.css";

/**
 * 이렇게 css를 컴포넌트별로 나누는 경우, 이 컴포넌트에만 자동으로 한정되는 것이
 * 아님을 주의해야 함. 그래서 스타일의 범위를 지정해야됨
 */

const reactDescriptions = ["Fundamental", "Crucial", "Core"];

function genRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
    //변수 또는 상수에서 참조도 가능함
    const description =
        reactDescriptions[genRandomInt(reactDescriptions.length - 1)];

    return (
        <header>
            {/* 이렇게 이미지의 경로를 잡아두면, 배포 후 이미지가 안보일 수 있다.
        배포과정에서 코드가 변환 및 최적화되고 함께 묶이는데, 이 과정에서 이 파일이 무시될 수 있음
        <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
        
        동적인 값을 넣을 때는 따옴표 없이 괄호를 넣어서 작성해준다. */}
            <img src={reactImg} alt="Stylized atom" />
            <h1>React Essentials</h1>
            <p>
                {/* 안에 들어가는 내용이 랜덤으로 변경될때 */}
                {description} React concepts you will need for almost any app
                you are going to build!
            </p>
        </header>
    );
}
