

import React from "react"
import { Link } from "react-router-dom";
import "../CSS/Cricbuzz.css"
import LoginForm from "../Login&SignUp/Login";

function Crickbuzz() {
    return (
        <div className="cribuzz">
            <div className="cricbazz_header">
                <div className="cricbazz_headerIamge">

                    <img src="https://www.cricbuzz.com/images/cb_logo.svg" alt="error" />

                </div>

                <div className="cricbazz_headerOptions">

                    <div className="cricbazz_headerOptions">
                        <Link to="/">
                            <h4>Live Score</h4>
                        </Link>
                    </div>

                    <div className="cricbazz_headerOptions">

                        <h4>Schedule</h4>

                    </div>
                    <div className="cricbazz_headerOptions">

                        <h4>Achieve</h4>

                    </div>

                    <div className="cricbazz_headerOptions">
                        <Link to="/">
                            <h4>News</h4>
                            {/* <ArrowDropDownIcon/> */}
                        </Link>
                    </div>
                    <div className="cricbazz_headerOptions">
                        <Link to="/">
                            <h4>Series </h4>
                            {/* <ArrowDropDownIcon/> */}
                        </Link>
                    </div>
                    <div className="cricbazz_headerOptions">
                        <Link to="/">
                            <h4>Teams</h4>
                            {/* <ArrowDropDownIcon/> */}
                        </Link>
                    </div>
                    <div className="cricbazz_headerOptions">
                        <Link to="/">
                            <h4>Videos</h4>
                            {/* <ArrowDropDownIcon/> */}
                        </Link>
                    </div>
                    <div className="cricbazz_headerOptions">
                        <Link to="/">
                            <h4>Ranking</h4>
                            {/* <ArrowDropDownIcon/> */}
                        </Link>
                    </div>
                    <div className="cricbazz_headerOptions">
                        <Link to="/">
                            <h4>More</h4>
                            {/* <ArrowDropDownIcon/> */}
                        </Link>
                    </div>

                    <div className="cricbazz_headerOptions">

                        <button>Cricbuzz Plus</button>


                    </div>
                    <div className="cricbazz_headerSearchIcon">
                        {/* <SearchIcon style={{
                            color:"white"
                           
                        }}
                        />
                         <input placeholder="Search..."/> */}

                        <img src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/search-512.png" alt="error" />

                    </div>
                    <div className="cricbazz_ProfileIcon">
                        <img onClick={{LoginForm}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkYvq7zWeYgf2yDxPRExBk-l4hhCzk6FyhWA&usqp=CAU" alt="error" />
                    </div>

                    <div className="cricbazz_Login">
                        <Link to="/login">
                            <h4 >Login</h4>
                            {/* <ArrowDropDownIcon/> */}
                        </Link>
                    </div>


                </div>

            </div>





        </div>
    )
}

export default Crickbuzz;