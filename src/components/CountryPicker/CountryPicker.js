/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React ,{ useState, useEffect}from 'react'
import { NativeSelect,formControl, FormControl } from '@material-ui/core'
import styles from "./CountryPicker.module.css"
import { fetchCountries, handleCountryChange } from '../../api'


const CountryPicker = ({handleCountryChange}) => {
    const [fetchedCountries, setFetchedCountries] = useState([])

    useEffect(() => {
       
        const fetchAPI = async () =>{

            setFetchedCountries(await fetchCountries());

        }
        fetchAPI();
        
    }, [setFetchedCountries]);
    return (
       
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
                <option value="">Global</option>
                {fetchedCountries.map((country,i) => <option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker
