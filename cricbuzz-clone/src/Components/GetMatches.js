
    import  React, { useEffect, useState } from "react"
import { getMatchInfo } from "../API/Api"
import Crickbuzz from "./crickbuzz"

    export default function GetMatches(){
        const [ matches,SetMatches]=useState([])

        useEffect(()=>{
            getMatchInfo()
            .then((res)=>{
                console.log(res)
            })
            .catch((err)=>
            console.log(err))
        },[])

        return(
            <>

               <div>

                {/* {res.daatmap((el)=>

                  <h1 key={el.id}>{el.name}</h1>
                )} */}

                   

               </div>

               

            </>
        )
    }