import { Route, Routes } from "react-router-dom";
import LoginForm from "../Login&SignUp/Login";
import Homepage from "../Home_Page/Home_Page"
import SignupForm from "../Login&SignUp/SignUp";
import Team_news from "../Components/GMVSBLB";
import Lda_Match from "../Components/Lda_Match";


export default function AllRoute(){

    return(
        <div>
            <Routes>
                <Route path="/login" element={<LoginForm/>}/>
                <Route path="/" element={<Homepage/>}/>
                <Route path="/signup" element={<SignupForm/>}/>
                <Route path="/teamNews" element={<Team_news/>}/>
                <Route path="/LDA_Match" element={<Lda_Match/>}/>
            </Routes>

        </div>
    )
}