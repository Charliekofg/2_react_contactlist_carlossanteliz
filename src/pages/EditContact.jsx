import React, { useEffect, useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { Link, useNavigate, useParams } from "react-router-dom";


export const EditContact = () => {
    const { store, dispatch } = useGlobalReducer();
    const navigate = useNavigate();
    const {contact_id} = useParams();

    let [data, setData] = useState({
        name: "", email: "", phone: "", address: "",
    })
    
    useEffect(() => {
        const editarContacto = store.contacts.find(contact => contact.id == contact_id);
        if (editarContacto) {
            setData({
                name: editarContacto.name, email: editarContacto.email, phone: editarContacto.phone, address: editarContacto.address
            })
        }
        else {
            console.log("El contacto que buscas no pudo ser encontrado");
        }
    },[contact_id]);

    const formChange = (e) => {
        setData({...data, [e.target.name]: e.target.value})
    }
    const forSubmit = (e) => {
        e.preventDefault()
        if (!data.name || !data.email || !data.phone || !data.address) {
            alert("Todos los campos deben de ser completados")
            return;

    }

    fetch(`https://playground.4geeks.com/contact/agendas/Carlossan/contacts/${contact_id}`, {
    method: "PUT",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        ...data, agenda_slug: "Carlossan"
    })
})
    .then((response)=> {
        if (!response.ok){
            throw new Error("No fue posible actualizar el contacto")
        }
        return response.json()
    })
    .then((updatedContact)=>{
        dispatch({
            type: "edit_contact",
            payload: updatedContact
        })
        navigate("/")
    })
    .catch((error) => console.error("No fue posible actualizar el contacto", error))
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
                    <button type="submit" className="btn btn-primary">Editar contacto</button>
                </div>
            </form>
        </div>
    )


}