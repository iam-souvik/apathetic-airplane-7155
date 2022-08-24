
const API_KEY="ef409e08-4a51-4777-b9d7-df0963683c16"

  export const getMatchInfo=()=>{

    // const url =`https://api.cricapi.com/v1/currentMatches/${API_KEY}`
    const url=`https://api.cricapi.com/v1/currentMatches/${API_KEY}&offset=0`

    return fetch(url)
    .then((res)=>res.json())
    
    .catch((err)=>console.log(err))
}

     export const getMatchScore=(id)=>{

        const url=`https://api.cricapi.com/v1/currentMatches?apikey=${API_KEY}&id=${id}`

        return fetch(url)
        .then((res)=>res.json())
        .catch((err)=>console.log(err))
     } 

    // "https://cricapi.com/api/marches"