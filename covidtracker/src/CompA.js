import React  ,{useState} from 'react'
import axios from "axios"
const CompA =()=>{
    

        const [country, setcountry] = useState()
       const [ToConfim, setToConfim] = useState()
       const [Recover, setRecover] = useState()

       const [death, setdeath] = useState()

     const getData =()=>{
            async function  cases(){
            const res =  await axios.get(`https://api.covid19api.com/summary`);
            setcountry(res.data.Countries[75].Country)

            setToConfim(res.data.Countries[75].TotalConfirmed)
            setRecover(res.data.Countries[75].TotalRecovered)

            setdeath(res.data.Countries[75].TotalDeaths)
               }
             cases();

     }
    return(
        <>
        <div className="maindiv">
          <h1>COVID-19 Country:{country} </h1>
           <button onClick={getData}>Get Data</button>
            <h2>Total cases:  {ToConfim}</h2>
            <h2>Total Recovered:  {Recover}</h2>
            <h2>To Death: {death}</h2>
         </div>
         </>
    )
}
export default CompA;
