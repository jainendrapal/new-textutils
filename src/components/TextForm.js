import React, {useState} from "react";
import "./../css/Textform.css";

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

    {/* <!-- Content section--> */}
        <section className="py-5">
            <div className="container my-5">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <h2>Full Width Backgrounds</h2>
                        <p className="lead">A single, lightweight helper class allows you to add engaging, full width background images to sections of your page.</p>
                        <p className="mb-0">The universe is almost 14 billion years old, and, wow! Life had no problem starting here on Earth! I think it would be inexcusably egocentric of us to suggest that we're alone in the universe.</p>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- Image element - set the background image for the header in the line below--> */}
        <div className="py-5 bg-image-full bkImage">
            {/* <!-- Put anything you want here! The spacer below with inline CSS is just for demo purposes!--> */}
            <div className="gap-div"></div>
        </div>
        {/* <!-- Content section--> */}
        <section className="py-5">
            <div className="container my-5">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <h2>Engaging Background Images</h2>
                        <p className="lead">The background images used in this template are sourced from Unsplash and are open source and free to use.</p>
                        <p className="mb-0">I can't tell you how many people say they were turned off from science because of a science teacher that completely sucked out all the inspiration and enthusiasm they had for the course.</p>
                    </div>
                </div>
            </div>
        </section>


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
      <p>{text.trim(" ").length } words and {text.length} charecters</p>
      <p></p>
      <p>{0.008*text.split(" ").length} minutes to read</p>
      <h3>Preview</h3>
      <p>{text.length>0 ? text: "Enter your text to preview"}</p>
    </div>

    {/* <footer className="py-5 bg-light">
            <div className="container"><p className="m-0 text-center text-white">Copyright &copy; Jai Trading Comapny 2023</p></div>
        </footer> */}
    </>
  );
}
