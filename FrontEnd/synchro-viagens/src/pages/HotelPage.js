import React from 'react'

import FilterBar from "../components/FilterBar/FilterBar";
import HotelSection from '../components/HotelSection/HotelSection';
import FlySection from '../components/FlySection/FlySection';
import RegisteryMenu from "../components/RegisteryMenu/RegisteryMenu";

import Header from "../layout/Header"
import About from "../layout/About"

import HotelApi from "../services/HotelApi"

import { Steps, Result, Button} from 'antd';

const { Step } = Steps;

class HotelPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            hotelName : "",
            flyID : 0,   
            step : 0,
            locationsString : [],
            locationsStringObject : {},
            hotels : []
        }
    }

    onFilterData = (hotels) => {
        this.setState({
            hotels : hotels
        })
    }

    async componentWillMount(){
        const locationsString = []
        const locationsStringObject = {}
        let locationString = ""
        const response = await HotelApi.get("/locations");
        Object.keys(response.data).forEach(function(key){
            locationString = response.data[key]["city"] + ", " + response.data[key]["country"]
            locationsString.push(locationString);
            locationsStringObject[locationString] = response.data[key]
        });
        this.setState({
            locationsString : locationsString,
            locationsStringObject : locationsStringObject
        });
    }

    onHotelDefining = (name) => {
        this.setState({
            hotelName : name,
            step : 1,
        })
    }

    onFlyDefining = (id) => {
        this.setState({
            flyID : id,
            step : 2,
        })
    }

    resetStep = (e) => {
        this.setState({
            hotels : [],
            hotelName : "",
            flyID : 0,   
            step : 0,
        })
    }
    render(){
        const {hotelName, flyID, step, locationsString, locationsStringObject, hotels} = this.state;

        const tempoTotal = 12;
        const meses = [];
        for (var i = 1; i <= Array(tempoTotal).length; i++){
            meses.push(i);
        };

        const stepComponent = (step) => {
            switch(step){
                case 0:
                    return (
                        <div>
                            <FilterBar 
                            meses = {meses} 
                            locations = {locationsString}
                            locationsStringObject = {locationsStringObject}
                            onFilterData = {this.onFilterData}/>
                            <HotelSection hotels = {hotels} onHotelDefining = {this.onHotelDefining} />
                        </div>
                    );
                case 1:
                    return (
                        <FlySection onFlyDefining = {this.onFlyDefining}/>
                    );
                case 2:
                    return (
                        <Result
                        status="success"
                        title="Sua compra com a Synchro Viagens foi finalizada!"
                        subTitle={"Número de compra:" + hotelName.replace(/\s/g, '') + flyID +" emitido com sucesso."}
                        extra={[
                          <Button type="primary" key="buy" onClick = {this.resetStep}>Comprar novamente</Button>,
                        ]}
                      />
                    );
            }
        };
        return (
            <div className = "HotelPage">
                <Header/><br/><br/>
                <div id = "buy-section">
                    <Steps current={step}>
                        <Step title="Hotel" description="Escolha um hotel." />
                        <Step title="Voo" description="Escolha a compania áerea." />
                        <Step title="Finalizado" description="Sua compra está finalizada." />
                    </Steps><br/><hr/><br/>
                    {stepComponent(step)}
                </div>
                <RegisteryMenu 
                meses = {meses}
                locations = {locationsString}
                locationsStringObject = {locationsStringObject}/>
                <About/>
            </div> 
        );
    }
}

export default HotelPage