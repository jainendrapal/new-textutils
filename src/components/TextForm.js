import React, {useState} from "react";

export default function TextForm(props) {

  const [text, setText] = useState('Enter text here');
 const handleOnChange = (event)=>{
     setText(event.target.value);
   }
 const toUpperCase = (event)=>{
  let newText = text.toUpperCase();
  setText(newText);

  }
  
  const toLowerCase =()=>{
let loCase = text.toLowerCase();
setText(loCase);
  }

  const copyText = ()=>{
  let text = document.getElementById('mytext');
     text.select();
     navigator.clipboard.writeText(text.value);
  }

  const removeExtraSpaces = () =>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(' '))

  }
  
  const clearText = ()=>{
    // let clearText = 
    setText("");
  }
  return (
    <>
    <div className="container">
        <h1 style={{color: props.mode === 'dark' ? 'white': 'black'}}>{props.heading}</h1>
       <div className="mb-3">
      <textarea
          className="form-control"
          id="mytext"
          rows="8"
          value={text}
          onChange={handleOnChange}
          style={{backgroundColor:props.mode === 'dark' ? '#6c757d': 'white', color: props.mode === 'dark' ? 'white': 'black'}}
        ></textarea>
      </div>
      <button className="btn  btn-primary mx-2" onClick={toUpperCase}>Convert to upper case</button>
      <button className="btn  btn-primary mx-2" onClick={toLowerCase}>Convert to lower case</button>
      <button className="btn  btn-primary mx-2" onClick={clearText}>Clear text</button>
      <button className="btn  btn-primary mx-2" onClick={copyText}>Copy text</button>
      <button className="btn  btn-primary mx-2" onClick={removeExtraSpaces}>Remove Extra Spaces</button>

    </div>
    <div className="container my-2" style={{color: props.mode === 'dark' ? 'white': 'black'}}>
      <h1>Your text summary</h1>
      <p>{text.split(" ").length !== 0 ?  text.split(" ").length : 0 } words and {text.length} charecters</p>
      <p></p>
      <p>{0.008*text.split(" ").length} minutes to read</p>
      <h3>Preview</h3>
      <p>{text.length>0 ? text: "Enter your text to preview"}</p>
    </div>
    </>
  );
}
