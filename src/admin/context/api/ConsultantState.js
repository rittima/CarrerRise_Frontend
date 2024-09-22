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
    if (!id) {
      console.error("Error: Consultant ID is undefined.");
      return;
    }
  
    //api call
    try
    {      
      const response = await fetch(
      `http://localhost:5000/api/consultant/updateconsultants/${id}`,
      {
        
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "auth-token":localStorage.getItem('token')
          // "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbiI6eyJpZCI6IjY2ZWQzYjc1NTZjYTIxOGNiNjllZWZlMiJ9LCJpYXQiOjE3MjY4MjM1NDl9.KaSgcaRd8zRG0D8sYYB6HyPJpsQRE9mVkrxg5BxOl50"
        },
        body: JSON.stringify({name, email,company,role }),
      }
    );

    if (!response.ok) {
      const text = await response.text(); // Get the response as text
      try {
        const errorMessage = JSON.parse(text); // Try to parse it as JSON
        throw new Error(errorMessage.error || "Something went wrong!");
      } catch (err) {
        throw new Error("Server error: " + text); // If it fails, throw the raw text
      }
    }

    const updatedConsultant = await response.json();
    setConsultant(prevCons =>
      prevCons.map(cons => (cons._id === id ? updatedConsultant : cons))
    );

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
    console.log("Consultant updated successfully: "+updatedConsultant);
    
  }
  catch (error) {
    // Catch and handle any errors
    console.error("Error updating consultant:", error.message);
    // showAlert("Failed to update consultant: " + error.message, "danger"); // Example: show an alert
  }
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
