import React, { useEffect, useState } from "react";

export default function useCurrencyInfo(from,to){
    const [rate,setRate] = useState(null);
    useEffect(()=>{
         fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${from}.json`).then(res=>res.json()).then(data=>setRate(data[from][to]));
    },[from,to]);
    return rate;
}