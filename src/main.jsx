import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import PhotosProvider from "./assets/context/PhotosContext.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <PhotosProvider>  {/* aqui se importa el PhotosProvider que esta en PhotosContext */}
      <App />
    </PhotosProvider>
    </BrowserRouter>
  </React.StrictMode>
);