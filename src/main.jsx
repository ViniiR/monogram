import { createRoot } from "react-dom/client";
import App from './App'
import "./scss/style.scss";

const root = createRoot(document.querySelector("#root"));

root.render(<App/>);
