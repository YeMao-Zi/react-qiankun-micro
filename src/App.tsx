import Test from "./App.test";
import { ConfigProvider } from "antd";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import { IQiankunProps } from ".";

function App(props: IQiankunProps) {
  console.log(window.__POWERED_BY_QIANKUN__ ,'window')
  return (
    <BrowserRouter basename={window.__POWERED_BY_QIANKUN__ ? "/app-react" : "/"}>
      <ConfigProvider getPopupContainer={() => props.container || document.body}>
        <Switch>
          <Route path="/" component={Test} />
        </Switch>
      </ConfigProvider>
    </BrowserRouter>
  );
}

export default App;
