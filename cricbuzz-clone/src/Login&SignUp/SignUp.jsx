
// import { useContext, useEffect, useState } from "react"

// import { AuthContext } from "../Context/AuthContext"
// import { checkDataSignup } from "./utiliss"
import { Link, Navigate, NavLink } from "react-router-dom"

import { useContext, useEffect, useState } from "react"
import { checkDataSignup } from "./utilis"
// import { AuthContext } from "../Context/AuthContext"
import LoginForm from "./Login"

const intialFormData = {
    name: "",
    email: "",
    password: ""
}
let arr = []



export default function SignupForm()
{

    const [data,setData] = useState(intialFormData)
    const [formData,setFormData] = useState([])
    const [signup,setSignup] = useState(false)
     

    // const {isAuth,user,toggleAuth,saveUser} = useContext(AuthContext)
    useEffect(()=>{
        arr = JSON.parse(localStorage.getItem("user")) || []
    },[])

    if(signup)
    {
        return <Navigate to= "/login"/>
    }
    const handleChange =(e)=>{
        const {name:key,value} = e.target
        setData({
            ...data,
            [key]:value
        })
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        if(checkDataSignup(arr,data)==false)
        {
            setFormData([...formData,data])
            arr.push(data)
            localStorage.setItem("user",JSON.stringify(arr))
            setData(intialFormData)
            alert("Registration sucessfull")
           setSignup(true)
        }
        else{
            alert("Account Already Exist")
            setData(intialFormData)
        }
        
    }
   
    return (
        
        <div className="form">
        <div className="fl">
            <form onSubmit={handleSubmit} action="">
                <div>
                    <label htmlFor="">Name</label>
                    <input name="name" value={data.name} onChange={handleChange} type="text" placeholder="Enter Your Name" />
                </div>
                <div>
                    <label htmlFor="">Email</label>
                    <input name="email" value={data.email} onChange={handleChange} type="email" placeholder="Enter Your Email" />
                </div>
                <div>
                    <label htmlFor="">Password</label>
                    <input name="password" value={data.password} onChange={handleChange} type="password" placeholder="Enter Your Password" />
                </div>
                <input className="fs" type="submit" value="signup" />
                <p className="fp">Already Have an Account ? <NavLink className="linkTo" to="/login"> Login</NavLink> </p>
            </form>
            
        </div>
        <div className="fr">

        </div>
      </div>
    )
}