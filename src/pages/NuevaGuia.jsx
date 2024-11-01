import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
function NuevaGuia() {

    const [nuevaGuia,setNuevaGuia] = useState( {nombre:'',descripcion:'',precio:0} );

    const navigate = useNavigate();

    function cambiarCampo(e) {

        let nombreCampo = e.target.name;

        let valorCampo = e.target.value;

        setNuevaGuia({...nuevaGuia, [nombreCampo]: valorCampo})
        
    }

    function enviarFormulario(e) {
        
        e.preventDefault();
        console.log(nuevaGuia);
        let opciones = {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(nuevaGuia)
        };
        console.log(opciones);
        fetch('http://localhost:3000/guias',opciones).then(res => res.json()).then(data=>{
            if (data.mensaje == 'Ok') {
                navigate('/');
            }
        })

    }

  return (
    
    <>
    <form action="#" method="post" onSubmit={enviarFormulario}>
        <label htmlFor="Nom">Nombre de la guía: </label>
        <input type="text" name="nombre" id="Nom" onChange={cambiarCampo}/> <br />

        <label htmlFor="desc">Descripción de la actividad: </label>

        <textarea name="descripcion" id="desc" cols="30"  onChange={cambiarCampo}></textarea> <br />

        <label htmlFor="pre">Precio de la actividad</label>
        <input type="number" name="precio" id="pre" onChange={cambiarCampo}/>
        <br />
        <input type="submit" value="Crear" />
    </form>
    
    </>

  )
}

export default NuevaGuia