import React from 'react'
import {Row, Col} from 'react-bootstrap'

class HotelResume extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            hotelTitle : this.props.hotelTitle
        }
    }

    render(){
        return (
            //First, lets struturize the component
            <Row>
                <Col sm  = {3}>
                    <img src = './imgHotel.webp' alt = {this.state.hotelTitle + 'image'}/>
                </Col>
                <Col sm  = {3}>
                    <h3>{this.state.hotelTitle}</h3>
                    <p>Dados geográficos descritivos</p>
                    <a href = '#'>ver mapa</a>

                    <ul>
                        <li>Nota</li>
                        <li>pontuação em estrelas</li>
                        <li>Cortesias do hotel</li>
                    </ul>
                </Col>
                <Col sm  = {3}>
                    <h3>{this.state.hotelTitle}</h3>
                    <p>Dados geográficos descritivos</p>
                    <a href = '#'>ver mapa</a>

                    <ul>
                        <li>Nota</li>
                        <li>pontuação em estrelas</li>
                        <li>Cortesias do hotel</li>
                    </ul>
                </Col>
            </Row>
        );
    }
}

export default HotelResume