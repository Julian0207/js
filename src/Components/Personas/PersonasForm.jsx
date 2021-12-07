import axios from 'axios';
import React from 'react';

class PersonasForm extends React.Component{

    constructor(props){
        super(props)
        this.state={}
    }
    
    //Funcion para enviar request POST al endpoint
    submitNuevaPersona(e){
        //Anular comportamiento por defecto del form
        e.preventDefault();
        //peticion con axios
        axios.post('http://localhost:5001/contactos/', {
            nombre: this.refs.nombre.value,
            apellido: this.refs.cantidad.value,
            email: this.refs.email.value,
            telefono: this.refs.telefono.value,
            empresa: this.refs.empresa.value
        }).then(res=>console.log(res.data)).catch(err=>console.log(err));
    }

    render(){
        return (
            <div className="container" style={{
                'backgroundColor': '#eeeeee',
                'padding': '40px 40px',
                'marginBottom': '40px',
                'borderRadius': 'px'
            }}>
               <div className="row">
                   <h4 className="center"><strong>Productos Nuevos</strong></h4>
                    <form className="col s12" onSubmit={this.submitNuevaPersona.bind(this)}>
                        <div className="row">
                            <div className="input-field col s6">
                                <input id="nombre" ref="nombre" type="text" className="validate" />
                                <label htmlFor="nombre">Nombre: </label>
                            </div>
                            <div className="input-field col s6">
                                <input id="cantidadd" ref="cantidad" type="number" className="validate" />
                                <label htmlFor="cantidad">cantidad: </label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s6">
                                <input id="email" ref="email" type="email" className="validate" />
                                <label htmlFor="email"> Tu Email: </label>
                            </div>
                            <div className="input-field col s6">
                                <input id="telefono" ref="telefono" type="number" className="validate" />
                                <label htmlFor="telefono">Telefono/Celular: </label>
                            </div>
                            <div className="input-field col s6">
                                <input id="empresa" ref="empresa" type="text" className="validate" />
                                <label htmlFor="empresa">Empresa: </label>
                            </div>
                            
                        </div>
                        <div>
                            <button type="submit" name="action" className="waves-effect waves-purple btn">Enviar</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
   
}

export default PersonasForm;
