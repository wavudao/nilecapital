import React,{useEffect,useState} from "react";
// import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';import { useNavigate } from "react-router-dom";
import useBodyClass from "../../hooks/useBodyClass";
import axios from "axios";
import {auth} from "../../firebase"

import Container from "../../components/Container";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import { useNavigate } from "react-router-dom";
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

    const user = auth.currentUser;

export const Account = () => {
  useBodyClass("p-auth");

  const navigate = useNavigate()

  const [Investment,setInvestment] = useState()
  const [perform, setPerformance] = useState()
  const [pastInvestment,setPastInvestment] = useState()
  const [address, setAddress] = useState()


 
 useEffect(() => {
  if(user == null)navigate('/login')
  console.log(user)
  let  pubKey =  user && user.uid
  setAddress(pubKey)
  async function fetch () {
     
    let response = await axios.get(`https://api-dawn-2-phase-2.solrise.finance/api/v3/wallet/${pubKey}`)
    let invest = await axios.get(`https://api-dawn-2-phase-2.solrise.finance/api/v3/wallet/${pubKey}/investment-history?page=0&pageSize=10&sortField=lastActivityTimestamp&sortDirection=DESC`)
    const performance = await axios.get(`https://api-dawn-2-phase-2.solrise.finance/api/v3/wallet/${pubKey}/performance?performancePeriod=all`)
    console.log(invest.data.data)
    setPastInvestment(invest.data.data)
    setPerformance(performance.data.data)
    let data  = await response.data.data
  
    setInvestment(data)
  
    
  }
    fetch()
    const interval=setInterval(()=>{
      fetch()
     },7000)
       
       
     return()=>clearInterval(interval)
 },[navigate])
 console.log( Investment && Investment)
  return (
    <main  className="p-article-box">
    <Container>
    <ToastContainer />
    <p>{address}</p>
    <table>
      <thead>
        <td>{`current Investment \n \n `}</td>
        <td>{`Current Value`}</td>
        <td> {`Current profit`}</td>
        <td>{`Current ROI`}</td>
        <td></td>
      </thead>
      <tbody>
        <td> {Investment && (parseFloat(Investment.initialInvestment)).toFixed(2)}</td>
        <td> {Investment && (parseFloat(Investment.currentValue)).toFixed(2)}</td>
        <td> {Investment && (parseFloat(Investment.totalEarnedUi)).toFixed(2)} </td>
        <td> {Investment && ((parseFloat(Investment.performance)*100)).toFixed(2)}%</td>
      </tbody>

    </table>
    <LineChart width={1000} height={500} data={perform} >
   
    <Line type="monotone" dataKey="value" stroke="#8884d8" />
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    <XAxis dataKey="time"  />
    <YAxis  />
    <Tooltip />
    </LineChart>
    </Container>
    <table>
      <thead>
        <td>{`Fund  \n \n `}</td>
        <td>{`Invested`}</td>
        <td>{`ExitValue`}</td>
        <td>{`Earning`}</td>
        <td>{`ROI`}</td>
        <td>{`Exit Time`}</td>
      </thead>
      <tbody>
      { pastInvestment && pastInvestment.map(( listValue, index ) => {
          return (
            <tr key={index}>
            <td>{listValue.info.name} {listValue.manager.username}</td>
             <td> {((listValue.initialInvestment)/1000000).toFixed(2)}</td>
             <td> {((listValue.exitValue)/1000000).toFixed(2)} </td>
             <td> {((listValue.investmentEarnings)/1000000).toFixed(2)} </td>
             <td> {(((listValue.investmentEarnings)/1000000)/((listValue.initialInvestment)/1000000)).toFixed(2)} </td>
             <td> { new Date(listValue.lastActivity).toLocaleDateString()} </td>
            </tr>
          );
        })}
      </tbody>

    </table> 


    </main>
  
  );
};

// export default Signup


// this code has been written by a novice frontend dev ,   kindly adjust where needed considering performance   you can replace address for testing 
    // const user = auth.currentUser;
    








   // https://api-dawn-2-phase-2.solrise.finance/api/v3/funds/9zART5211mn51x9raDojtHcmfEU6SQ58xMCFDe5479VQ/aum?performancePeriod=all
   //https://api-dawn-2-phase-2.solrise.finance/api/v3/funds/9zART5211mn51x9raDojtHcmfEU6SQ58xMCFDe5479VQ/performance?performancePeriod=all
   //https://api-dawn-2-phase-2.solrise.finance/api/v3/funds/9zART5211mn51x9raDojtHcmfEU6SQ58xMCFDe5479VQ/performance?performancePeriod=1d

//  const fetchInfo = async () => {
  
//    let Investment = await axios.get('https://api-dawn-2-phase-2.solrise.finance/api/v3/wallet/DaMeLur5PYcLHfGMTexLowVuP91mKmvhGLbeEV2wKzDr/investments')
//   //  console.log(Investment)
//    return Investment.data.data[0]
//  }

//https://api-dawn-2-phase-2.solrise.finance/api/v3/wallet/DaMeLur5PYcLHfGMTexLowVuP91mKmvhGLbeEV2wKzDr/investments
// https://api-dawn-2-phase-2.solrise.finance/api/v3/funds?page=0&pageSize=1000&owner=Db9EN9KHvQ8ePitn4LKzCUrUcBDVGa4Q86Hj64rstQ1p&sortField=lastActivityTimestamp&sortDirection=DESC
