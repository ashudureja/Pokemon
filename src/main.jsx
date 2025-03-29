import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { store } from "./Store/Store.jsx";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(
  <Provider store={store} >
    <BrowserRouter>
    <Routes>
      <Route path="/*" element={<App/>}/>

      
    </Routes>
     
    </BrowserRouter>
  </Provider>
);
