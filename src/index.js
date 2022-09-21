import React from "react";
// import ReactDOM from "react-dom";
import { createRoot } from 'react-dom/client';

import App from "./routes/App";

// ReactDOM.render(<App />, document.getElementById("app"));

const root = createRoot(document.getElementById("app"));

root.render(
    <App/>
);