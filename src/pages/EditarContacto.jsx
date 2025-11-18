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
                name: editarContacto.name, email: editarContacto.email, phone: editarContacto.phone, adress: editarContacto.adress
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
        e.preventDedault()
        if (!data.name || !data.email || data.phone || !data.address) {
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
        navigate("/Agenda")
    })
    .catch((error) => console.error("No fue posible actualizar el contacto", error))
}



    return (
        <div className="container">
            <h2>Editar contacto</h2>

            <h2>Editar contacto ID: {contact_id}</h2>
            <p>{data.name}</p>
        </div>
    )


}