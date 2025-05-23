import { createRoot } from "react-dom/client";
import "./common/styles/index.scss";
import { HelmetProvider } from "react-helmet-async";
import { App } from "./App";

const rootHtml = document.getElementById("root")!;
const root = createRoot(rootHtml);

root.render(
  <HelmetProvider>
    <App />
  </HelmetProvider>
);
