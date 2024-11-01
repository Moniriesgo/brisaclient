import React from 'react'
import { useEffect,useState } from 'react'
import { FaRegPlusSquare } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaTrashAlt } from "react-icons/fa";

function PanelDeControl() {

    const [velas,setVelas] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:3000/admin').then(res => res.json())
        .then(datos =>{
            setVelas(datos)
        })
    },[]);

    
  return (
    <>

    {velas.map( vela => {

        return <div key={admin.id_admin}>

        <h2>{admin.nombre}</h2>
        <Link to={'/borrarGuia/' + vela.id_vela}><FaTrashAlt /></Link>
        </div>

    })}
    
    <p>Añadir nueva guia: <Link to={'/nuevaGuia'}><FaRegPlusSquare /></Link></p>

    </>
  )
}

export default PanelDeControl