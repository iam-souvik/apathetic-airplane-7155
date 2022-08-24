
    import  React, { useEffect, useState } from "react"
import { getMatchInfo } from "../API/Api"
import Crickbuzz from "./crickbuzz"

    export default function getMatches(){
        const [ matches,SetMatches]=useState([])

        useEffect(()=>{
            getMatchInfo()
            .then((data)=>{
                SetMatches(data.matches)
                console.log(data)
            })
            .catch((err)=>
            console.log(err))
        },[])

        return(
            <>
            <Crickbuzz/>
            </>
        )
    }