
// const API_KEY="ef409e08-4a51-4777-b9d7-df0963683c16"
const API_KEY="b2e9c484-619c-4ea8-b9cc-781d8345bf2c"

  export const getMatchInfo=()=>{

    // const url =`https://api.cricapi.com/v1/currentMatches/${API_KEY}`
    const url=`https://api.cricapi.com/v1/matches?apikey=b2e9c484-619c-4ea8-b9cc-781d8345bf2c&offset=0`

    return fetch(url)
    .then((res)=>res.json())
    
    
}

     export const getMatchScore=(id)=>{

        const url=`https://api.cricapi.com/v1/currentMatches?apikey=${API_KEY}&id=${id}`

        return fetch(url)
        .then((res)=>res.json())
        .catch((err)=>console.log(err))
     } 

    // "https://cricapi.com/api/marches"