import { BrowserRouter, Route, Routes}from "react-router-dom";
import Profile from "./admin/page/home/Profile";
import Dashboard from "./admin/page/home/Dashboard";
import ConsultantList from "./admin/page/consultant/ConsultantList";
import './App.css';
import SideNavbar from "./admin/components/SideNavbar";
import ConsultantState from "./admin/context/api/ConsultantState";
import Register from "./admin/authentication/Register";
import Login from "./admin/authentication/Login";
import Navbar from "./admin/components/Navbar";
import Alert from "./admin/components/Alert";
import { useState } from "react";
import AddConsultant from "./admin/page/consultant/AddConsultant";

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
    <div className="App">
      <>
      <ConsultantState>
      <BrowserRouter>
      <SideNavbar>
        <Navbar/>
        <Alert alert={alert}/>
        <div className="container">
         <Routes>
          <Route exact path="/login"  element={<Login showAlert={showAlert}/>} />
          <Route exact path="/register"  element={<Register showAlert={showAlert}/>} />
          <Route exact path="/"  element={<Profile name="Hrick" email="hrick@gma.in" company="House Husband" role="Dishwasher" showAlert={showAlert}/>} />
          <Route exact path="/dashboard"  element={<Dashboard showAlert={showAlert}/>}/>
          <Route exact path="/consultant-list"  element={<ConsultantList showAlert={showAlert}/>}/>
          <Route exact path="/consultant-add"  element={<AddConsultant showAlert={showAlert}/>}/>
        </Routes>    
        </div>    
        </SideNavbar>
      </BrowserRouter>
      </ConsultantState>

      </>
    </div>
  )
}

export default App;

     