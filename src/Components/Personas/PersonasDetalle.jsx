import axios from 'axios';
import React from 'react';

const PersonasDetalle = (props) => {
    const submitDelete=()=>{
        
            axios.delete(`http://localhost:5001/contactos/${props.personita._id}`)
            .then(()=>{
                alert('El registro se ha eliminado Correctamente');
                window.location.reload();
            })
            .catch((err)=>alert(`Ha ocurrido un error ${err}`));
    }

    return (
        <div>
            <div className="row">
                <div className="col s12 m6">
                    <div className="card blue">
                        <div className="card-content white-text">
                            <span className="card-title"><strong>{props.personita.nombre} {props.personita.cantidad}</strong></span>
                            <p>{props.personita.email}</p>
                            <p>{props.personita.empresa}</p>
                            <p>{props.personita.telefono}</p>
                        </div>
                        <div className="card-action">
                            <button name="action" className="waves-effect red btn" onClick={submitDelete}>Eliminar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PersonasDetalle;
