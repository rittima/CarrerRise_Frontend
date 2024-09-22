import { BrowserRouter, Route, Routes}from "react-router-dom";
import Profile from "./admin/page/home/Profile";
import Dashboard from "./admin/page/home/Dashboard";
import './App.css';
import ConsultantState from "./admin/context/api/ConsultantState";
import Register from "./admin/authentication/Register";
import Login from "./admin/authentication/Login";
import Alert from "./admin/components/Alert";
import { useState } from "react";
import AddConsultant from "./admin/page/consultant/AddConsultant";
import Navbar1 from "./admin/components/Navbar1";

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      msg:message,
      type:type
    });
    setTimeout(()=>{
      setAlert(null);
    },1500);
  }

  return (    
    <div className="App ">
      <ConsultantState>
      <BrowserRouter>
        <Navbar1/>
        <div className="container " style={{paddingTop:"6%"}}>
        <Alert alert={alert}/>
        
         <Routes>
          <Route exact path="/login"  element={<Login showAlert={showAlert}/>} />
          <Route exact path="/register"  element={<Register showAlert={showAlert}/>} />
          <Route exact path="/"  element={<Profile  showAlert={showAlert}/>} />
          <Route exact path="/dashboard"  element={<Dashboard showAlert={showAlert}/>}/>
          {/* <Route exact path="/consultant-list"  element={<ConsultantList showAlert={showAlert}/>}/> */}
          <Route exact path="/consultant-add"  element={<AddConsultant showAlert={showAlert}/>}/>
        </Routes>    
        </div>
      </BrowserRouter>
      </ConsultantState>
    </div>
  )
}

export default App;

     