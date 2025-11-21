import React from "react";
import { Link } from "react-router-dom";




const Card = (props) => {
    return (
        <div>
            <div className="card mb-3" style={{maxWidth:"540px"}}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuoNhLLrMbvLAnq171uZy1g8scWm67SoTP8Q&s" className="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Nombre: {props.informacion.name}</h5>
                            <p className="card-text">Teléfono: {props.informacion.phone}</p>
                            <p className="card-text">Email: {props.informacion.email}</p>
                            <p className="card-text">Direccion: {props.informacion.address}</p>
                            <div className="card-icons">
                                <Link to={`/editcontact/${props.informacion.id}`}>
                                    <div><i className="fa-solid fa-pen-to-square edit-icon" ></i></div>
                                </Link>
                                <div><i className="fa-solid fa-trash-can delete-icon"></i></div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Card