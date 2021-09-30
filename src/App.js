/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import {Cards, Chart, CountryPicker } from "./components"
import styles from "./App.module.css"
import { fetchData } from "./api"

const App = () => {

  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const fetchedData = await fetchData();
      setData({data: fetchedData});
    }
    getData();
  }, [])

  return (
    <div className={styles.container}>
      <Cards data={data}/>
      <CountryPicker />
      <Chart />
    </div>
  )

}
export default App
