import React, { useState } from 'react'
import ConsultantContext from "./ConsultantContext";

const ConsultantState = (props) => {
    const datas=[];
    const [consultants,setConsultant] = useState(datas)

    //GET Consultant
    const getConsultant = async() =>{
      const response = await fetch(`http://localhost:5000/api/consultant/getConsultant`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token":localStorage.getItem('token')
        },
      });
      const json = await response.json();
      setConsultant(json);
    }

    //ADD Consultant
    const addConsultant = async (name,email,company,role) =>{
      //api call
      const response = await fetch(`http://localhost:5000/api/consultant/addConsultant`, {
        method: "POST",
        body: JSON.stringify({ name,email,company,role }),
        headers: {
          "Content-Type": "application/json",
          "auth-token":localStorage.getItem('token')
        },
      });
      console.log("ADD");
      
      const json = await response.json();    
      setConsultant(consultants.concat(json));
    };

    //Delete note
    const deleteConsultant = async (id) => {
      //api call
      const response = await fetch(
        `http://localhost:5000/api/consultant/delete/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "auth-token":localStorage.getItem('token')
          },
        }
      );
      const json = await response.json();
      console.log(json);
      const newCons = consultants.filter((consultant) => { return consultant._id !== id })
      setConsultant(newCons);
    }

    //Edit note
  const updateConsultant = async (id,name,email,company,role) => {
    console.log("update");
    //api call
    const response = await fetch(
      `http://localhost:5000/api/consultant/updateconsultants/${id}`,
      {
        method: "PUT",
        body: JSON.stringify({name, email,company,role }),
        headers: {
          "Content-Type": "application/json",
          "auth-token":localStorage.getItem('token')
        },
      }
    );

    const json = await response.json();
    console.log(json);
    
    let newCons=JSON.parse( JSON.stringify(consultants))
    //logic to edit
    for (let index = 0; index < newCons.length; index++) {
      const element = newCons[index];
      if (element._id === id) {
        newCons[index].name = name;
        newCons[index].email = email;
        newCons[index].company = company;
        newCons[index].role = role;
        break;
      }
    }
    setConsultant(newCons)
  };

  return (
    <div>
      <ConsultantContext.Provider value={{consultants,getConsultant,addConsultant,deleteConsultant,updateConsultant}}>
        {props.children}
      </ConsultantContext.Provider>
    </div>
  )
}

export default ConsultantState
