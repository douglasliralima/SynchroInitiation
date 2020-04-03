import React from "react"

import {Select, Tooltip  } from 'antd';

import HotelApi from "../../services/HotelApi"
import flyApi from "../../services/FlyApi"

const { Option } = Select;


function onBlur() {
  console.log('blur');
}

function onFocus() {
  console.log('focus');
}

function onSearch(val) {
  console.log('search:', val);
}

class FilterBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            origin : "",
            destiny : "",
            departure : 0,
            arrival : 0
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const {arrival, departure, destiny} = this.state;

        const response = await HotelApi.get("/hotel/city-hotels", {
            params : {
                city : this.props.locationsStringObject[destiny]['city']
            }
        });
        /*
            Preciso ver entre o arrival e o departure, se só existem 1s naquele range no array,
            os que não tiverem saem fora
        */
       const hotels = [];
       Object.keys(response.data).forEach(function(key) {
           let hotelViability = true;
            for(var i = departure - 1; i <= arrival - 1; i++){
                if(response.data[key]["viabilities"][i] != 1){
                    hotelViability = false; 
                }
            }
            if (hotelViability){
                //Isso é para termos uma avaliação aleatória enquanto não tem interação com usuário
                response.data[key]['evaluation'] = Math.floor(Math.random() * 5) + 1
                //Deixando no formato que a gente usa para renderizar
                hotels.push({
                    hotelTitle : response.data[key]["name"],
                    hotelPrice : response.data[key]["price"],
                    hotelAvaliation : response.data[key]["evaluation"],
                    hotelLocation : destiny
                })
            }
       })
        //console.log(response.data);
        this.props.onFilterData(hotels);
        // console.log('A name was submitted: ', this.state);
    };

    handleOriginChange = (value) => {
        this.setState({origin: value});
    }

    handleDestinyChange = (value) => {
        this.setState({destiny: value});
    }

    handleDepartureDateChange = (value) => {
        this.setState({departure: value});
    }

    handleArriveDateChange = (value) => {
        this.setState({arrival: value});
    }

    render(){
        const locations = this.props.locations;
        
        const meses = this.props.meses;

        return (
            <div id = "filter-bar" className = "filter-bar">
                <form className = "travelling-filter" onSubmit={this.handleSubmit}>
                    <h1 className = "heading-filter">
                        <span className = "heading-filter--main">Synchro</span>
                        <span className = "heading-filter--sub">Escolha o seu destino</span>
                    </h1>
                    <label>
                        <span className= "travelling-filter__input-description">Origem</span><br/>
                        <Select
                            style={{ 
                                width: "20rem" 
                            }}
                            placeholder="Selecione sua origem"
                            onChange={this.handleOriginChange}
                            onFocus={onFocus}
                            onBlur={onBlur}
                            onSearch={onSearch}
                        >
                            {locations.map((item) => (
                                <Option value={item}>{item}</Option>
                            ))}
                        </Select>
                    </label>
                    <label>
                        <span className= "travelling-filter__input-description">Destino</span><br/>
                        <Select
                            style={{
                                width: "20rem" 
                            }}
                            placeholder="Selecione seu destino"
                            onChange={this.handleDestinyChange}
                            onFocus={onFocus}
                            onBlur={onBlur}
                            onSearch={onSearch}
                        >
                            {locations.map((item) => (
                                <Option value={item}>{item}</Option>
                            ))}
                        </Select>
                    </label>
                    <label>
                        <span className = "travelling-filter__input-description">Datas</span><br/>
                        <Select
                            style={{ 
                                width: "10rem",
                                display : "block",
                                marginTop : ".5rem"
                            }}
                            placeholder="Saída"
                            onChange={this.handleDepartureDateChange}
                            onFocus={onFocus}
                            onBlur={onBlur}
                            onSearch={onSearch}
                        >
                            {meses.map((item) => (
                                <Option value={item}>{item}</Option>
                            ))}
                        </Select>

                        <Select
                            style={{ 
                                width: "10rem",
                                display : "block",
                                marginTop : ".5rem"
                            }}
                            placeholder="Chegada"
                            onChange={this.handleArriveDateChange}
                            onFocus={onFocus}
                            onBlur={onBlur}
                            onSearch={onSearch}
                        >
                            {meses.map((item) => (
                                <Option value={item}>{item}</Option>
                            ))}
                        </Select>
                    </label>    
                    <Tooltip title="Buscar">
                        <input 
                        className = "btn btn--white btn--filter"
                        type="submit" value="Pesquisar"/>
                    </Tooltip>
                </form>
            </div>
        );
    }
}

export default FilterBar