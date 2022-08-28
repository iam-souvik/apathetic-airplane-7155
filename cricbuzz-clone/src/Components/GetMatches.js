
import React, { useEffect, useState } from "react"
import { getMatchInfo } from "../API/Api"
import { Link } from "react-router-dom";
import "../CSS/Cricbuzz.css"
import "../CSS/Lda_Match.css"
import "../CSS/Team_news.css"

import { Data_map } from "./data_map"


export default function GetMatches() {
    const [matches, SetMatches] = useState([])

    useEffect(() => {
        getMatchInfo()
            .then((res) => {
                console.log(res)
                SetMatches(res.data)
            })
            .catch((err) =>
                console.log(err))
    }, [])

    // const data2 = [
    //     {
    //         title: "MATCHES",
    //         flag: true
    //     },
    //     {
    //         title: "RSA vs ENG Stumps",
    //         flag: true,
    //     },
    //     {
    //         title: "GM vs BLB Complete",
    //         flag: true,

    //     },

    //     {
    //         title: "RSA vs ENG Stumps",
    //         flag: true,
    //     },
    //     {
    //         title: "RSA vs ENG Stumps",
    //         flag: true,
    //     },

    //     {
    //         title: "RSA vs ENG Stumps",
    //         flag: true,
    //     },
    //     {
    //         title: "All 🢛",
    //         flag: true,
    //     },

    // ]
    return (
        <>



            {/* <div id="main_data_div">


                {data2.map((res) =>
                    <Data_map title={res.title} flag={res.flag} />

                )} */}




                {/* {matches.map((souvik) =>

                    <h1>{souvik.name}</h1>

                )} */}


                

                <div id="main_data_div">
                    <div>
                        <div>MATCHES</div>
                    </div>
                    <div>
                        <div>JIM vs AUS-Live</div>
                    </div>
                    <div>
                        <Link to ="/teamNews"><div>GM vs BLB Complete</div></Link>
                    </div>
                    <div>
                        <Link to="/LDA_Match"><div>LDN vs OVL -OVL Win</div></Link>
                    </div>
                    <div>
                        <div>SL vs AFG -AFG Win</div>
                    </div>
                    <div>
                        <div>RSA vs ENG Stumps</div>
                    </div>
                    <div>
                        <div>All 🢛</div>
                    </div>
                </div>






            {/* </div> */}



        </>
    )
}