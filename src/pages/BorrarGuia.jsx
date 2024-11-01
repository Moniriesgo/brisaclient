import React from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
function BorrarGuia() {

    let {id} = useParams();
    const navegador = useNavigate();

    function noBorrar() {
        navegador('/panel');
    }

    function siBorrar() {
        
        let opciones = {
            method: 'DELETE'
        }

        fetch('http://localhost:3000/guias?id='+id,opciones).then(res => res.json()).then(data =>{
            if (data.mensaje == 'Ok') {
                navegador('/');
            }
        })

    }

  return (
    <>
    
    <h2>Estás seguro que quieres borrar la guia con la id {id}</h2>
    <button type="button" onClick={siBorrar}>Si</button>
    <button type="button" onClick={noBorrar}>No</button>

    </>
  )
}

export default BorrarGuia