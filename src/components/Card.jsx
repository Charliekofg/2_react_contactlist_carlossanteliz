import React from "react";
const Card = (props) => {
    return (
        <div>
            <div className="card mb-3" style={{maxWidth:"540px"}}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src="..." className="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{props.informacion.name}</h5>
                            <p className="card-text">{props.informacion.phone}</p>
                            <p className="card-text">{props.informacion.email}</p>
                            <p className="card-text">{props.informacion.address}</p>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Card