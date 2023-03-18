import React, {useState} from "react";

export default function TextForm(props) {

  const [text, setText] = useState('Enter text here');
 const handleOnChange = (event)=>{
     setText(event.target.value);
   }
 const toUpperCase = (event)=>{
  let newText = text.toUpperCase();
  setText(newText);
  props.showAlert('Converted to uppercase!',"success");

  }
  
  const toLowerCase =()=>{
let loCase = text.toLowerCase();
setText(loCase);
props.showAlert('Converted to lowercase!',"success");
  }

  const copyText = ()=>{
  let text = document.getElementById('mytext');
     text.select();
     navigator.clipboard.writeText(text.value);
     if(text.value.length > 1 ){
      console.log(text.value.length);
      props.showAlert('Text copied!',"success");
    } else {
      props.showAlert('Please enter text to copy!',"warning");
    }
    
  }

  const removeExtraSpaces = () =>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(' '));
    if(newText.length > 1){
      console.log(newText);
      props.showAlert('Extra spaces has been removed!',"success");
    } else {
      props.showAlert('No text found!',"warning");
    }
    

  }
  
  const clearText = ()=>{
    // let clearText = 
    setText("");
    if(text.length > 1){
      props.showAlert('Text has been cleared',"success");
    } else {
      props.showAlert('No text found!',"warning");
    }
    
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
