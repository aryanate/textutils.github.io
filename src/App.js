import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, {useState} from 'react'
import Alert from './Components/Alert';
import About from './Components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"; 


function App() {
  const [mode, setmode] = useState('light');
  const [btnstate, setbtnstate] = useState("Enable Dark");
  const [alert, setalert] = useState(null);

  const showalert =(message,type) =>{
      setalert({
        msg:message,
        type:type
      })
      setTimeout(() => {
        setalert(null);
      }, 1000);
  }
  const toggleMode= ()=>{
    if (mode==='light'){
        setmode("dark");
        setbtnstate("Disable Dark ");
        document.body.style.backgroundColor = "#042743";
        showalert("Dark Mode has been Enabled.",'success')
    }
    else{
      setmode('light');
      setbtnstate("Enable Dark")
      document.body.style.backgroundColor = "white";
      showalert("Dark Mode has been Disabled.",'success')
    }
  }
  return (
    <>
    <Router>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} btntxt={btnstate}/>
    <Alert alttext={alert}/>
    <div className="container my-3">
      <Routes>
        <Route exact path='/' element={<TextForm showalert={showalert} heading="Enter your Text below" mode={mode}/>} />
        <Route exact path='/about' element={<About/>}/>
        </Routes>
    </div>
    </Router>
    </>
    );
}


export default App;
