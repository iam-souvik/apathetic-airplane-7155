

import React from "react"
import { Link } from "react-router-dom";
import "../CSS/Cricbuzz.css"
import LoginForm from "../Login&SignUp/Login";
import "../CSS/Lda_Match.css"

function Crickbuzz() {
    return (
        <div className="cribuzz">
            <div className="cricbazz_header">
                <div className="cricbazz_headerIamge">

                    <img src="https://www.cricbuzz.com/images/cb_logo.svg" alt="error" />

                </div>

                <div className="cricbazz_headerOptions">

                    <div className="cricbazz_headerOptions">
                        <Link to="/LDA_Match">
                            <h4>Live Score</h4>
                        </Link>
                    </div>

                    <div className="cricbazz_headerOptions">

                        <h4>Schedule</h4>

                    </div>
                    <div className="cricbazz_headerOptions">

                        <h4>Achieve</h4>

                    </div>

                    <div id="News" className="cricbazz_headerOptions">
                        <Link to="/">
                            <h4>News

                                <div id="News_hover">

                                    <a>All Stories</a>
                                    <a>Crickbuzz Plus</a>
                                    <a>Latest News</a>
                                    <a>Topics</a>
                                    <a>Spot Light</a>
                                    <a>Opinions</a>
                                    <a>Specials</a>
                                    <a>Interview</a>
                                    <a>Live Blogs</a>

                                </div>
                            </h4>

                        </Link>
                    </div>
                    <div id="Series" className="cricbazz_headerOptions">
                        <Link to="/">
                            <h4>Series </h4>
                            <div id="Series_hover">
                                <a>Asia Cup 2022</a>
                                <a>South Africa tour of England, 2022</a>
                                <a>zimbabwe tour of Australia, 2022</a>
                                <a>New Zealand A tour of India, 2022</a>
                                <a>Caribbean Premier League 2022</a>
                                <a>The Hundred Mens Competition 2022</a>
                                <a>Royal London One-day Cup 2022</a>
                                <a>The Hundred Womens Competition 2022</a>
                            </div>
                        </Link>
                    </div>
                    <div className="cricbazz_headerOptions" id="Teams">
                        <Link to="/">
                            <h4>Teams</h4>
                            <div id="Teams_hover">
                                <h2>TEST TEAMS</h2>
                                <div>
                                    <div>
                                        <a>India</a>
                                        <a>Afghanistan</a>
                                        <a>Ireland</a>
                                        <a>Pakistan</a>
                                        <a>Australia</a>
                                        <a>Sri Lanka</a>
                                        <a>Bangladesh</a>
                                        <a>England</a>
                                        <a>West Indies</a>
                                        <a>South Africa</a>
                                        <a>Zimbabwe</a>
                                        <a>New Zealand</a>
                                    </div>

                                    <div>
                                        <a>India</a>
                                        <a>Afghanistan</a>
                                        <a>Ireland</a>
                                        <a>Pakistan</a>
                                        <a>Australia</a>
                                        <a>Sri Lanka</a>
                                        <a>Bangladesh</a>
                                        <a>England</a>
                                        <a>West Indies</a>
                                        <a>South Africa</a>
                                        <a>Zimbabwe</a>
                                        <a>New Zealand</a>
                                    </div>
                                </div>

                            </div>
                        </Link>
                    </div>
                    <div id="Videos" className="cricbazz_headerOptions">
                        <Link to="/">
                            <h4>Videos</h4>
                            <div id="Videos_hover" >
                                <a>All Videos</a>
                                <a>Categories</a>
                                <a>PlayList</a>

                            </div>

                        </Link>
                    </div>
                    <div id="Ranking" className="cricbazz_headerOptions">
                        <Link to="/">
                            <h4>Ranking</h4>

                            <div id="Ranking_hover">
                                <a>Icc Ranking - Man</a>
                                <a>Icc Ranking -Woman</a>
                            </div>
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
                       <Link to="/login">
                       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkYvq7zWeYgf2yDxPRExBk-l4hhCzk6FyhWA&usqp=CAU" alt="error" />
                       </Link>
                    </div>

                    {/* <div className="cricbazz_Login">
                        <Link to="/login">
                            <h4 >Login </h4>
                           
                        </Link>
                    </div> */}


                </div>

            </div>





        </div>
    )
}

export default Crickbuzz;