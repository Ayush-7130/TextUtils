// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import React, { useState } from 'react'
import Alert from './Components/Alert';
import About from './Components/About';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState('white')
  const [alert, setalert] = useState(null)
  const [text, settext] = useState('Dark')
  const [textcol, settextcol] = useState('black')
  const [button, setbutton] = useState('Enable')
  // document.body.style.backgroundColor = '#ebebeb'

  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null)
    }, 2000);
  }

  const ToggleMode = () => {
    if (mode === 'white') {
      setmode('black')
      settext('Light')
      settextcol('white')
      setbutton('Disable')
      showalert('Enabled Dark Mode', 'success')
      document.body.style.backgroundColor = 'rgb(39 41 42)'
    }
    else {
      setmode('white')
      settext('Dark')
      settextcol('black')
      setbutton('Enable')
      showalert('Enabled Light Mode', 'success')
      document.body.style.backgroundColor = 'white'
    }
  }
  return (
    <>
      <BrowserRouter>
        <Navbar title="Textutils" Mode={mode} Textcol = {textcol} Text={text} ToggleMode={ToggleMode} Button={button} />
        <Alert alert={alert} />
        <div className={`container my-3 `}>
          <Routes>
            <Route path="/" element={<Textform showalert={showalert} heading='Enter the text to analyze' Text={text} Textcol = {textcol} />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
