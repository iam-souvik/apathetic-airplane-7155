import { Route, Routes } from "react-router-dom";
import LoginForm from "../Login&SignUp/Login";
import Homepage from "../Home_Page/Home_Page"
import SignupForm from "../Login&SignUp/SignUp";


export default function AllRoute(){

    return(
        <div>
            <Routes>
                <Route path="/login" element={<LoginForm/>}/>
                <Route path="/" element={<Homepage/>}/>
                <Route path="/signup" element={<SignupForm/>}/>
            </Routes>

        </div>
    )
}