import ReactDOM from "react-dom/client";
//빌드없이 처리하는 경우 -> jsx없이 자바스크립트 이용
/**
 * import react form 'react'
 *
 * ReactDOM.createRoot(entryPoint).render(react.createElement(App));
 */

import App from "./App.jsx";
import "./index.css";

const entryPoint = document.getElementById("root");
ReactDOM.createRoot(entryPoint).render(<App />);
