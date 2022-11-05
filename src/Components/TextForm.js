import React,{useState} from 'react'

export default function TextForm(props) {

    const handleUpClick=()=>{
      //console.log("upper case clicked"+ text);
     let newText=text.toUpperCase();
     setText(newText)
     props.showAlert("Converted to Uppercase","success");
       
    }

    
    const handleOnClick=()=>{
      //console.log("upper case clicked"+ text);
     let newText=text.toLowerCase();
     setText(newText)
     props.showAlert("Converted to LowerCase","success");
       
    }
       

    const handleOnChange=(event)=>{
       // console.log("on Change");
        setText(event.target.value)
      

     
    }

    const handleOnCopy=()=>{
       let text=document.getElementById("exampleFormControlTextarea1");
       text.select();
       navigator.clipboard.writeText(text.value);
       props.showAlert("Copy to Clipbord","success");
    }

    const handleOnRemoveSpace=()=>{
      let newtext=text.split(/[ ]+/);
      setText(newtext.join(" "));
      props.showAlert("Extra Space removed","success");
    } 

    const handleOnClear=()=>{
      setText("");
      props.showAlert("Text Clear","success");
    }

    
    const [text, setText] = useState("");


  
  return (
    <>
    
<div>
     <h1>{props.heading}</h1>
    
    <div className="my-3">
    <textarea className="form-control" value={text} onChange={handleOnChange}  id="exampleFormControlTextarea1" rows="8"></textarea>
    </div>
  <button className="btn btn-primary"  onClick={handleUpClick}>Convert To UpperCase</button>
  <button className="btn btn-primary mx-3"  onClick={handleOnClick}>Convert To LowerCase</button>
  <button className="btn btn-primary mx-3"  onClick={handleOnCopy}>Copy To Clipboard</button>
  <button className="btn btn-primary mx-3"  onClick={handleOnRemoveSpace}>Remove Space</button>

  <button className="btn btn-primary mx-3"  onClick={handleOnClear}>Clear Text</button>

  </div>

  <div className="container">
    <h2>Your text summury</h2>
    <p>{text.split(" ").length} words and {text.length} Character</p>
    <p>{0.8*text.split(" ").length} sec words to reading</p>
    <h2>Preview</h2>
    <p>{text}</p>
  </div>

  </>
  )
}
