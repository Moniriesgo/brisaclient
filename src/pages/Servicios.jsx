import React from 'react'
import { useEffect,useState } from 'react'

function Servicios() {

    const [velas,setVelas] = useState([])

    useEffect(()=>{

        fetch('http://localhost:3000/velas').then(res => res.json())
        .then(data => {
            setVelas(data)
        })

    },[])

  return (
    <section>

        {velas.map( vela => {

            return <div key={vela.id_vela}>

                <h2>{vela.nombre}</h2>
                <p>{vela.descripcion}</p>
                <img src={"http://localhost:3000/"+vela.foto}/>
            </div>

        })}

    </section>
  )
}

export default Servicios