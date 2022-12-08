// 원래부터 있던 코드
import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";

// 우리가 추가할 코드
import store from "./redux/config/config";
import { Provider } from "react-redux";
import Router from "./shared/Router"; //{index.js(최상위폴더)에서 App/Router 에서 import값과 지정해주기}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //App을 Provider로 감싸주고, configStore에서 export default 한 store를 넣어줍니다.
  <Provider store={store}>
    <Router />
    {/*👆{index.js(최상위폴더)에서 App/Router 에서 import값과 지정해주기}  */}
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
