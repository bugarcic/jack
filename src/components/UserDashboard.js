import logo from '../Assets/logo_1.png';
import Example from './Example.js'
import { useState } from 'react';

const UserDashboard = () => {
  //fetch all users queries from database and store them in state
  const [queries, setQueries] = useState([
    {
      keywords: ["Toyota","Camry", "2005"],
      price: "$6500",
      alerts: "1"
    },
    {
      keywords: ["Suzuki", "GSXR", ""],
      price: "$7500",
      alerts: "1"
    },
    {
        keywords: ["Derek", "Jeter", "Baseball"],
        price: "$500",
        alerts: "1"
    },
    {
        keywords: ["Schwinn", "Caliente", "6-Speed"],
        price: "$750",
        alerts: "0"
    },
    {
        keywords: ["Guitar", "Hero", "Controller"],
        price: "$50",
        alerts: "0"
    }
])
  const saveQuery = (query) => {
    setQueries([...queries, query])
  }

  return (
    <div>
      <div className=''>
        <div className='flex justify-center'>
          <img src={logo} alt='logo' className='logo-wrap'></img>
        </div>
        <div className='flex justify-center'>
         <Example queries={queries} setQuery={saveQuery}></Example>
         </div>
      </div>
    </div>
  );
}

export default UserDashboard;
