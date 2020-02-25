import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'

import "./HotelResume.css"

import temporaryImage from "./imgHotel.webp"
class HotelResume extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            hotelTitle : this.props.hotelTitle
        }
    }

    render(){
        return (
            <div class = 'hotel-resume'>
                <Row>
                <img src = {temporaryImage} alt = {this.state.hotelTitle + 'image'}/>
                    <Col>
                        <h3>{this.state.hotelTitle}</h3>
                        <p>Dados geográficos descritivos</p>
                        <a href = '#'>ver mapa</a>

                        <ul>
                            <li>Nota</li>
                            <li>pontuação em estrelas</li>
                            <li>Cortesias do hotel</li>
                        </ul>
                    </Col>
                    <Col>
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
            </div>
        );
    }
}

export default HotelResume