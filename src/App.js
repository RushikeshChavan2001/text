
import './App.css';
import Navbar from './Components/Navbar.js';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import { useState } from 'react';

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert =(message, type)=>{
    setAlert({
      msg:message,
      type:type
    })

    setTimeout(() => {
      setAlert(null);
      
    }, 1500);
  }
 
  return (
    
    <>
    <Navbar  title="TextUtils" About="About me"/>
    <Alert alert={alert}/>
<div className="container">
    <TextForm  showAlert={showAlert}   heading="enter The text Here"/>
    </div>
    
    </>
  );
}

export default App;

