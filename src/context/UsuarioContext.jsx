import React,{useState,createContext,useContext} from "react";

const UsuarioContext = createContext();


export const UseUser = () => {

    return useContext(UsuarioContext);

}

export const UserProvider = ( {children} )=>{

    const [usuario,setUsuario] = useState(null);


    function login(datosUsu) {

        setUsuario(datosUsu);
    
    }

    function logout() {
        setUsuario(null)
    }

    return <UsuarioContext.Provider value={{usuario,login,logout}}>


        {children}

    </UsuarioContext.Provider>

}


export default UsuarioContext;