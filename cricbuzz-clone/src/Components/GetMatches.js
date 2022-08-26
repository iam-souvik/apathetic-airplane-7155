
import React, { useEffect, useState } from "react"
import { getMatchInfo } from "../API/Api"
import "../CSS/Cricbuzz.css"

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

    const data2 = [
        {
            title: "MATCHES",
            flag: true
        },
         { title: "RSA vs ENG Stumps",
         flag:true,
         },
         {
            title:"RSA vs ENG Stumps",
            flag:true,
         },

        {
           title:"RSA vs ENG Stumps",
           flag:true,
        },
        {
            title:"RSA vs ENG Stumps",
            flag:true,
         },

        {
           title:"RSA vs ENG Stumps",
           flag:true,
        },
        {
            title:"All",
            flag:true,
         },

        ]
    return (
        <>

            <div id="main_data_div">


                {data2.map((res)=>
               <Data_map   title={res.title}  flag={res.flag} />
                
               )}


               
               





                {/* {matches.map((souvik) =>

                    <h1>{souvik.name}</h1>

                )} */}




            </div>



        </>
    )
}