
import { Navigate, NavLink } from "react-router-dom"
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { checkData } from "./utilis";
import "../CSS/Login.css"

const intialFormData = {
    email: "",
    password: ""
}
let arr =[];


  
export default function LoginForm() {
    const [data, setData] = useState(intialFormData)
    const [login,setLogin] = useState(false)
    // const {isAuth,user,toggleAuth,saveUser} = useContext(AuthContext)
        useEffect(()=>{
        arr = JSON.parse(localStorage.getItem("user"))
        },[])
        if(login)
        {
            return <Navigate to= "/"/>
        }
   const handleChange =(e) =>{
    const {name:key,value} = e.target
    setData({
        ...data,
        [key]:value
    })
   } 
    const handleSubmit = (e) => {
        e.preventDefault()
        if(arr==null){
            alert("Accounts does Not Exits")
        }else{
            if(checkData(arr,data)===true)
            {
                // toggleAuth()
                // saveUser(data.email)
               setLogin(true)
            }else{
                alert("Credential Does Not Match")
            }

        }
       
    }
    
    return (
        <div className="form">
            <div className="fl">
                <form onSubmit={handleSubmit} action="">
                    <div>
                        <label htmlFor="">Email</label>
                        <input name="email" value={data.email} onChange={handleChange} type="email" placeholder="Enter Your Email" />
                    </div>
                    <div>
                        <label htmlFor="">Password</label>
                        <input name="password" value={data.password} onChange={handleChange} type="password" placeholder="Enter Your Password" />
                    </div>
                    <input className="fs" type="submit" value="login" />
                    <p className="fp">Does not Have any Account ?<NavLink className="linkTo" to="/signup"> Signup</NavLink> </p>
                </form>
                
            </div>
            <div className="fr">

            </div>
        </div>
    )
}