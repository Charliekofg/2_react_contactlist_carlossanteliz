import React from "react";
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
                            <h5 className="card-title">nombr: {props.informacion.name}</h5>
                            <p className="card-text">telefono: {props.informacion.phone}</p>
                            <p className="card-text">email: {props.informacion.email}</p>
                            <p className="card-text">direccion: {props.informacion.address}</p>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Card