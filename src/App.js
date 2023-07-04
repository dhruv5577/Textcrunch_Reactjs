import './App.css';
import ABC from './ABC';
import About from './components/About';
import TextForms from './components/TextForms'
import React, { useState } from 'react'
import Alerts from './components/Alerts'
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  const [mode, setmode] = useState('light');

  const [alert, setalert] = useState('null');

  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type

    })
    setTimeout(() => {
      setalert('null');
    }, 2000);
  }
  const togglemode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = '#042743';
      showalert("dark mode is enabled", "success");
      // document.title = 'textutils-dark mode';
    }
    else {

      setmode('light');
      document.body.style.backgroundColor = 'white';
      showalert("light mode is enabled", "danger");
      // document.title = 'textutils-dark mode';

    }

  }
  return (
    <>
      <BrowserRouter>

        <ABC mode={mode} title="Textcrunch" aboutus="More About us" togglemode={togglemode} />
        <div className="container my-3" >

          <Alerts alert={alert} />
          <Routes>
            <Route exact path='/' element={<TextForms key='Textarea' showalert={showalert} heading="Textarea" mode={mode} />} />
            <Route exact path='/about' element={<About key='about' />} />
          </Routes>
        </div>
      </BrowserRouter>

    </>
  );
}

export default App;
