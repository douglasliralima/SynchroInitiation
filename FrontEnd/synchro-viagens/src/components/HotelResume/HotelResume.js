import React from 'react';

import temporaryImage from "./imgHotel.webp";
import iconHotel from "./iconHotel.png";

import { Card, Avatar, Rate} from "antd";

const { Meta } = Card;

class HotelResume extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            hotelTitle : this.props.hotelTitle,
            hotelLocation : this.props.hotelLocation,
            hotelAvaliation : this.props.hotelAvaliation,
            hotelAmenities : this.props.hotelAmenities,
            hotelPrice : this.props.hotelPrice
        }
    }

    onHotelDefining = (e) => {
        this.props.onHotelDefining(this.state.hotelTitle)
    }

    async componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):
        if (this.props.hotelTitle !== prevProps.hotelTitle) {
          this.setState({
            hotelTitle : this.props.hotelTitle,
            hotelLocation : this.props.hotelLocation,
            hotelAvaliation : this.props.hotelAvaliation,
            hotelAmenities : this.props.hotelAmenities,
            hotelPrice : this.props.hotelPrice
          });
        }
      }

    render(){
        let {hotelTitle, hotelLocation, hotelAvaliation, hotelAmenities, hotelPrice} = this.state;
        // let starAvaliation = "";
        // for(var i = 1; i <= 5; i++){
        //     if (i <=parseInt(hotelAvaliation)) {
        //         starAvaliation += "★";
        //     } else{
        //         starAvaliation += "☆";
        //     }
        // }
        const hotelDescription = " R$" + hotelPrice + '\n' + hotelLocation;
        return (
            <div className = 'hotel-resume'>
                
                <Card
                    hoverable
                    style={{ width: 280}}
                    cover={<img alt="Imagem do Hotel"
                    src={temporaryImage} 
                    />}
                    onClick = {this.onHotelDefining}
                >
                    <Meta 
                    avatar={<Avatar size="large" src={iconHotel} />}
                    title={hotelTitle} 
                    description={hotelDescription} 
                    />
                    <Rate style = {{
                        marginTop : "1rem"
                    }}
                    disabled defaultValue={parseInt(hotelAvaliation)} />
                </Card>
            </div>
        );
    }
}

export default HotelResume