import React from 'react'

import Container from 'react-bootstrap/Container'

import FilterBar from "../components/FilterBar/FilterBar"
import HotelResume from '../components/HotelResume/HotelResume'


class PrincipalPage extends React.Component {
    render(){
        return (
            <Container>
                <FilterBar/>
                <HotelResume hotelTitle = "Catussaba Resort Hotel"/>
                <HotelResume hotelTitle = "Catussaba Resort Hotel"/>

            </Container>
        );
    }
}

export default PrincipalPage