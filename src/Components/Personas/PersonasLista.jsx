import React from 'react';

const PersonasLista = (props) => {
    return (
        <div>
            <ul className="collection with-header">
                <li className="collection-header"><h4><strong>Contactos</strong></h4></li>
                
                {
                    props.listaPersonas.map((element)=>{
                        return (
                            <li className="collection-item" 
                                key={element._id}
                                onClick={props.actualizarPersona.bind(this, element)}
                                style={{
                                    'cursor': 'pointer'
                                }}
                            >{element.nombre} {element.cantidad}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default PersonasLista;
