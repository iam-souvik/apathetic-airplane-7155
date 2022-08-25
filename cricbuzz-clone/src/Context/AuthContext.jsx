import React,{ Children, useState } from "react"


const AuthContext=React.createContext()
 
const AuthContextContainer=({Children})=>{

    const[isAuth,SetisAuth]=useState(true)

    const toggleAuth=()=>{
        SetisAuth(true)
    }

    return(

        <AuthContext.Provider value={{isAuth,toggleAuth}}>
            {Children}

        </AuthContext.Provider>
    )

    
}
export {AuthContext,AuthContextContainer}