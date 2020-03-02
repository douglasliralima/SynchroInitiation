import React from 'react'

import "./HotelResume.css"

import temporaryImage from "./imgHotel.webp"
class HotelResume extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            hotelTitle : this.props.hotelTitle,
            geographicData : this.props.geographicData,
            hotelAvaliation : this.props.hotelAvaliation,
            hotelAmenities : this.props.hotelAmenities,
            hotelPrice : this.props.hotelPrice
        }
    }

    render(){
        const {hotelTitle, geographicData, hotelAvaliation, hotelAmenities, hotelPrice} = this.state;
        return (
            <div className = 'hotel-resume'>
                <div className = "image-description">
                    <img src = {temporaryImage} alt = {hotelTitle + 'image'}/>
                </div>
                <section className = "resume-description">
                    <h3>{hotelTitle}</h3>
                    <p>{geographicData}</p>
                    <a href = '#'>ver mapa</a>
                    <ul>
                        <li>{hotelAvaliation}</li>
                        <li>pontuação em estrelas</li>
                        <li>{hotelAmenities}</li>
                    </ul>
                </section>
                <section className = "payment-description">
                    <div className = "price">
                        <h3>Preço por pessoa</h3>
                        <p>R${hotelPrice}</p>
                    </div>
                    <div className = "continuation-button">
                        <button type = "button">Avançar</button>
                    </div>
                </section>
            </div>
        );
    }
}

export default HotelResume