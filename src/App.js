/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import {Cards, Chart, CountryPicker } from "./components"
import styles from "./App.module.css"
import { fetchData,fetchCountries } from "./api"

const App = () => {

  const [data, setData] = useState({});
  const [country ,setCountry] =useState()

  useEffect(() => {
    const getData = async () => {
      const data = await fetchData();
      setData(data);

     

     
    }
    getData();
  }, []);


  const handleCountryChange = async (country) =>{
    const getData = async () => {
      const data = await fetchData(country);
      setData(data);
      setCountry(country);    
    
  }
  getData();
}
  return (
    <div className={styles.container}>
      <Cards data={data}/>
      <CountryPicker handleCountryChange={handleCountryChange}/>
      <Chart data={data} country={country} />
    </div>
  )

}

export default App
