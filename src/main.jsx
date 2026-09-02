//import Hooks react
import { createRoot } from "react-dom/client";

//import Styling CSS main
import "./index.css";

//import i18n
import "./i18n/index.js";

//import Components
import App from "./App.jsx";

//import ContextProvider
import ContextProviderProjectsData from "./context/ContextProviderProjectsData.jsx";

createRoot(document.getElementById("root")).render(
  <ContextProviderProjectsData>
    <App />
  </ContextProviderProjectsData>,
);
