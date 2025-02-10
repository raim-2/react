//속성 값의 기본값을 menu - wrapper의 기능으로 지정가능함
export default function Tabs({ children, buttons, ButtonsContainer="menu" }) {
    //const ButtonsContainer = buttonsContainer; //커스텀컴포넌트라는 것을 나타내기 위해 대문자로로
    // 그러나 이렇게 별도로 지정하지 않으려면 -> 그냥 상수로 지정해버려도됨
    return (
        <>
            {/* <menu> */}
            <ButtonsContainer>
                {buttons}
            </ButtonsContainer>
            {/* </menu> */}
            {children}
        </>
    );
}
