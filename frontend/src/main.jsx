import { render } from "preact";
import { App } from "./app";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:5000";

render(<App />, document.getElementById("app"));
