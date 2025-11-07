import React, { useState } from "react"
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

const AgregarContactos = () => {
    const {store, dispatch} =useGlobalReducer()
    let [data, setData] = useState({
        name:"", email:"", phone:"", address:""
    }    
    )
    const formularioDelInput
    return (
        <div>
            <form className="row g-3" onSubmit={crear}>                
                <div className="col-md-6">
                    <label htmlFor="inputPassword4" className="form-label">Name</label>
                    <input type="text" className="form-control" id="inputName4" placeholder="Provide your name" name="name" onChange={formularioDelInput} value={data.name}/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputEmail4" className="form-label">Email</label>
                    <input type="email" className="form-control" id="inputEmail4" placeholder="something@something.com" name="email" onChange={formularioDelInput} value={data.email}/>
                </div>                
                <div className="col-12">
                    <label htmlFor="inputAddress2" className="form-label">Phone</label>
                    <input type="number" className="form-control" id="inputPhone2" placeholder="###-#####-###" name="phone" onChange={formularioDelInput} value={data.phone}/>
                </div>
                <div className="col-12">
                    <label htmlFor="inputAddress" className="form-label">Address</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" name="address" onChange={formularioDelInput} value={data.address}/>
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-primary">Agregar usuario</button>
                </div>
            </form>
        </div>
    )
}
export default AgregarContactos;