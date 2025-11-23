import React from "react";
import { Link } from "react-router-dom";




const Card = (props) => {

    const randomId = Math.floor(Math.random() * 100);
    const randomPhoto = `https://randomuser.me/api/portraits/men/${randomId}.jpg`
    return (
        <div>
            <div className="card mb-3" style={{maxWidth:"540px"}}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={randomPhoto} className="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Nombre: {props.informacion.name}</h5>
                            <p className="card-text">Teléfono: {props.informacion.phone}</p>
                            <p className="card-text">Email: {props.informacion.email}</p>
                            <p className="card-text">Direccion: {props.informacion.address}</p>
                            <div className="card-icons">
                                <Link to={`/editcontact/${props.informacion.id}`}>
                                    <i className="fa-solid fa-pen-to-square edit-icon edit-icon" ></i>
                                </Link>
                                <i className="fa-solid fa-trash-can delete-icon" 
                                onClick={() => props.onDelete(Number(props.informacion.id))}></i>
                                

                                
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Card