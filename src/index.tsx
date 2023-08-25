import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

export interface IQiankunProps {
  base: string;
  container: HTMLElement; // 子应用所在容器
}

function render(props: IQiankunProps) {
  const { container } = props;
  ReactDOM.render(
    <App {...props} />,
    container ? container.querySelector("#root") : document.querySelector("#root")
  );
}

if (!window.__POWERED_BY_QIANKUN__) {
  render({} as IQiankunProps);
}

export async function bootstrap() {
  console.log("子应用启动");
}

export async function mount(props: IQiankunProps) {
  console.log("挂载子应用", props);
  render(props);
}

export async function unmount(props: IQiankunProps) {
  const { container } = props;
  const root = (
    container ? container.querySelector("#root") : document.querySelector("#root")
  ) as HTMLElement;
  ReactDOM.unmountComponentAtNode(root);
}
