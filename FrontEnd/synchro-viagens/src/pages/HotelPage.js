import React from 'react'

import HotelApi from "../services/HotelApi"

import FilterBar from "../components/FilterBar/FilterBar"
import HotelResume from '../components/HotelResume/HotelResume'

class HotelPage extends React.Component {
    async componentDidMount(){

    }

    render(){
        return (
            <div className = "HotelPage">
                <FilterBar/>
                <HotelResume hotelTitle = "Catussaba Resort Hotel" hotelPrice = {1200}/>
            </div> 
        );
    }
}

export default HotelPage