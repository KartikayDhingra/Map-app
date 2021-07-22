import React, { useState } from 'react';
import Navbar from './Navbar';
import InputCity from './InputCity';
import Map from './Map'

const App = () => {

    const [city,newCity] = useState("");

    const cityHandler = (cityProp) => {
        newCity(cityProp);
    }

    return <>
        <Navbar />
        <main style={{position: "relative"}}>
            <InputCity getCity={cityHandler}/>
            <Map city={city}/>
        </main>
    </>
}

export default App;