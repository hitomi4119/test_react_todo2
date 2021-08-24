import React from "react";
import ReactDOM from "react-dom";

import { App } from "./App";

//画面に反映　　ReactDomライブラリのrender関数
//第一引数：反映させる元　第二引数：反映先
ReactDOM.render(<App />, document.getElementById("root"));
