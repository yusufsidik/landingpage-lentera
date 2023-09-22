import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./Navbar/Navbar";
import Jumbotron from "./Jumbotron/Jumbotron";
import Partner from "./Partner/Partner";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="w-full h-screen">
      <Navbar></Navbar>
      <Jumbotron></Jumbotron>
      <Partner></Partner>
    </div>
  </React.StrictMode>
);
