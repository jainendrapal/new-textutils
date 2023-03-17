// import logo from './logo.svg';
// import './App.css';
// import About from './components/About';
import  './components/header/Header';
import Header  from './components/header/Header';
import TextForm from './components/TextForm';
import React, {useState}  from 'react';


function App() {

  const [mode, setMode] = useState('light');

  const toggleMode =()=>{
    console.log('here')
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor= "#6c757d";
    }else{
      setMode('light');
      document.body.style.backgroundColor= "#ccc";
    }

  }


  return (

    <>
    <Header title="Text Utils" about="All About" mode={mode} toggleMode={toggleMode}/>
    <div className='container my-3'>
    <TextForm heading="Enter your text to analyze"  mode={mode} />
    {/* <About/> */}
    </div>
    </>
  );
}

export default App;
