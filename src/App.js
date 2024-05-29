
import './App.css';
import About from './component/About';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import React, { useState } from 'react'
import Alert from './component/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route


} from "react-router-dom";






function App() {

  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null)
    }, 3000);

  }
  const [mode, setmode] = useState("light");
  const Togglemode = () => {
    if (mode === 'light') {
      setmode("dark");
      document.body.style.backgroundColor = '#0b2137';
      showAlert("dark mode enabled", "success");
      document.title = 'Recap-darkmode'
    }
    else {
      setmode("light");
      document.body.style.backgroundColor = 'white';
      showAlert("light mode enabled", "success");
      document.title = 'Recap-Lighmode'

    }
  }
  const GreenTogglemode = () => {
    if (mode === 'light') {
      setmode("Green");
      document.body.style.backgroundColor = 'Green';
      showAlert("Greenmode enabled", "success");
    }
    else {
      setmode("light");
      document.body.style.backgroundColor = 'white';
      showAlert("light mode enabled", "success");

    }
  }

  return (
    <>
      <Router>

        <Navbar title="Recaap" navigate="About us" mode={mode} Togglemode={Togglemode} GreenTogglemode={GreenTogglemode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />} ></Route>

            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter your Text " mode={mode} />}>
            </Route>
          </Routes>
        </div>
      </Router>

    </>
  );
}





















export default App;
