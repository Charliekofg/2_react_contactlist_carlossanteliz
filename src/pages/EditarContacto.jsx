import React, { useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useNavigate, useParams } from "react-router-dom";


export const EditContact = () => {
    const { store, dispatch } = useGlobalReducer()

    return (
        <div className="container">
            <h2>Editar contacto</h2>

            <h2>Editar contacto ID: {contact_id}</h2>
            <p>{data.name}</p>
        </div>
    )


}