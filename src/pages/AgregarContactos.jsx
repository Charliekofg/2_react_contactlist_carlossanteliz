import React, { useState } from "react"
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useNavigate } from "react-router-dom";

const AgregarContactos = () => {
    const {store, dispatch} =useGlobalReducer()
    let [data, setData] = useState({
        name:"", email:"", phone:"", address:""
    }    
    )
    const navigate = useNavigate()
    const formChange = (e) => {
        setData({...data,[e.target.name]:e.target.value})
    }
    const forSubmit = (e) => {
        e.preventDefault()
        fetch("https://playground.4geeks.com/contact/agendas/Carlossan/contacts", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({...data, agenda_slug:"Carlossan"})
        })
            .then((response)=> {
                if (!response.ok) {
                    throw new Error ("Error al crear el contacto")
                }
                return response.json()
            })
            .then ((newContact) => {
                dispatch({
                    type: "add_contact",
                    payload: newContact
                })
                navigate("/")
            })
            .catch((error) => console.log("Error creando el contacto", error));
            
    }
    return (
        <div>
            <form className="row g-3" onSubmit={forSubmit}>                
                <div className="col-md-6">
                    <label htmlFor="inputPassword4" className="form-label">Name</label>
                    <input type="text" className="form-control" id="inputName4" placeholder="Provide your name" name="name" onChange={formChange} value={data.name}/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputEmail4" className="form-label">Email</label>
                    <input type="email" className="form-control" id="inputEmail4" placeholder="something@something.com" name="email" onChange={formChange} value={data.email}/>
                </div>                
                <div className="col-12">
                    <label htmlFor="inputPhone2" className="form-label">Phone</label>
                    <input type="text" className="form-control" id="inputPhone2" placeholder="###-#####-###" name="phone" onChange={formChange} value={data.phone}/>
                </div>
                <div className="col-12">
                    <label htmlFor="inputAddress" className="form-label">Address</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" name="address" onChange={formChange} value={data.address}/>
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-primary">Agregar usuario</button>
                </div>
            </form>
        </div>
    )
}
export default AgregarContactos;