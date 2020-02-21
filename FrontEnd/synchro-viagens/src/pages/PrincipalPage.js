import React from 'react'

import Container from 'react-bootstrap/Container'
import HotelResume from '../components/HotelResume/HotelResume'


class PrincipalPage extends React.Component {
    render(){
        return (
            <Container>
                <h1>Hello World</h1>
                <HotelResume hotelTitle = "Catussaba Resort Hotel"/>
            </Container>
        );
    }
}

export default PrincipalPage