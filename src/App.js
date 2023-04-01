// import logo from './logo.svg';
// import './App.css';
import About from './components/About';
import  './components/header/Header';
import Header  from './components/header/Header';
import TextForm from './components/TextForm';
import React, {useState}  from 'react';
import Alert from './components/Alert';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
document.title = 'TextUtils';
  const toggleMode =()=>{
    console.log('here')
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor= "#6c757d";
      showAlert("Dark mode has been enabled","success");
    }else{
      setMode('light');
      document.body.style.backgroundColor= "#ccc";
      showAlert("Light mode has been enabled","success");
    }

  }
const showAlert = (message,type) =>{
  setAlert({
   msg:message,
   type:type
  });
}

  return (

    <>
    <BrowserRouter>
    <Header title="TextUtils" about="All About" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className='container my-3'>
      <Routes>
        <Route path='/' element={<TextForm heading="Enter your text to analyze"  mode={mode}  showAlert={showAlert}/>}/>
        
        <Route exact path='/about' element={   <About/>}/>
      
      </Routes>
  </div>
  </BrowserRouter>
    </>
  );
}

export default App;
