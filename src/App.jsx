
import './App.css'
import React, { useEffect, useState } from "react";
import axios from "axios";
import PieReact from './PieReact'
import DrawerAppBar from './DrawerAppBar'


function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('https://api.data.gov.in/resource/726502ae-ac37-49c9-b843-900b94ff323e?api-key=579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b&format=json&limit=6').then((res) => {
      // console.log(res.data.records)
      setData({
        data: res.data.records.map((record) => {
          return {
            vBoys: Math.round(record.all_categories___classes_i_v___boys),
            vGirls: Math.round(record.all_categories___classes_i_v___girls),
            viiiBoys: Math.round(record.all_categories___classes_i_viii___boys),
            viiiGirls: Math.round(record.all_categories___classes_i_viii___girls),
            xBoys: Math.round(record.all_categories___classes_i_x___boys),
            xGirls: Math.round(record.all_categories___classes_i_x___girls)
          }
        }),
        states: res.data.records.map((record) => {
          return record.states_union_territories
        })
      }
      )
    }).catch((err) => {
      console.log(err)
    })
  }, []);

  console.log(data)

  return (
    <div className='app'>
      <DrawerAppBar />
      <PieReact pieData={data} />
    </div>
  )
}

export default App