import React , {useState} from 'react';


export default function TextForm(props) {
const handleUpClick = () =>{
  setText(text.toUpperCase());
  props.showalert("Converted to Upper Case!",'success');
}
const handleLoClick = () =>{
  setText(text.toLowerCase());
  props.showalert("Converted to Lower Case!",'success');
}
const handleClearClick = () =>{
  setText("");
  props.showalert("Text Clear!",'success');
}
const handleCapitalClick = () =>{
  let text1 = text.toLowerCase();
  const arr = text1.split(" ");
  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  const str2 = arr.join(" ");
  setText(str2);
  props.showalert("Converted to Capitalize",'success');
}
const handleCopyClick =() =>{
  var copyText = document.getElementById("Mybox");
  copyText.select();
  navigator.clipboard.writeText(copyText.value);
  props.showalert("Text copied!",'success');
}
const handleRSClick =() =>{
  setText(text.split(/[ ]+/).join([" "]));
  props.showalert("Extra Space Remove!",'success');
}
const handleChange =(event) =>{
  setText(event.target.value);
}

  const[text,setText] = useState("Enter Text here")
  return (
    <>
    <div className='container'>
    <h2 style={{color: props.mode === 'dark'? "white" : 'black'}}>{props.heading}</h2>
    <div className="mb-3">
    <textarea className="form-control" id="Mybox" onChange={handleChange} style={{backgroundColor: props.mode === 'dark'? "#4a475e" : 'white', color: props.mode === 'dark'? "white" : 'black'}} value={text} rows="8"></textarea>
    </div>
    <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
    <button  disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Convert to LowerCase</button>
    <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>Clear</button>
    <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCapitalClick}>Captalize</button>
    <button disabled={text.length===0} className='btn btn-primary mx-2 my-1' onClick={handleCopyClick}>Copy</button>
    <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleRSClick}>Remove Space</button>
    </div>
    <div className="container my-4">
      <h3 style={{color: props.mode === 'dark'? "white" : 'black'}}>Text Summary </h3>
      <p style={{color: props.mode === 'dark'? "white" : 'black'}}>{text.split(/\s+/).filter((element)=>{return element.length !==0 }).length} word and {text.length} character</p>
      <p style={{color: props.mode === 'dark'? "white" : 'black'}}>{0.08*text.split(" ").filter((element)=>{return element.length !==0 }).length} minutes</p>
      <h4 style={{color: props.mode === 'dark'? "white" : 'black'}}>Preview</h4>
      <p style={{color: props.mode === 'dark'? "white" : 'black'}}>{text}</p>
    </div>
    </>
  );
}
