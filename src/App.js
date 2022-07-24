import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
  Routes,
  Route, 
  // Routes
  // Link 
  } from "react-router-dom"
// export{ Switch } from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  const [mode, setMode] = useState("light"); // whether dark mode is on or not
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
      // document.title = "Textutils-Darkmode";
    }
     else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      // document.title = "Textutils-Lightmode";
    }
  };
  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            {/* <Routes> */}
            <Route path="/about" element={<About mode={mode}/>} />
            <Route path="/" element={<TextForm showAlert={showAlert} mode={mode} heading="try textutils to remove extra spaces ,covert lower case to uppercase
            count word and letter "/>} />
            {/* </Routes> */}
          </Routes>
        </div>
      </Router>
    </>
  );
  }

export default  App;
