import React, { Component } from "react";

import { Pagination, List, Card } from "antd";

import HotelResume from "../HotelResume/HotelResume"

function dynamicSort(property) {
  var sortOrder = 1;
  if(property[0] === "-") {
      sortOrder = -1;
      property = property.substr(1);
  }
  return function (a,b) {
      /* next line works with strings and numbers, 
       * and you may want to customize it to your needs
       */
      var result = (a[property] > b[property]) ? -1 : (a[property] < b[property]) ? 1 : 0;
      return result * sortOrder;
  }
}

class HotelSection extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    // const data = [
    //   {hotelTitle : "Catussaba Resort Hotel", hotelPrice : 1200, hotelAvaliation : 2, hotelLocation : "Salvador, bahia"},
    //   {hotelTitle : "Hotel 1", hotelPrice : 1200, hotelAvaliation : 2, hotelLocation : "Salvador, bahia"},
    //   {hotelTitle : "Hotel 2", hotelPrice : 1200, hotelAvaliation : 2, hotelLocation : "Salvador, bahia"},
    //   {hotelTitle : "Hotel 3", hotelPrice : 1200, hotelAvaliation : 2, hotelLocation : "Salvador, bahia"},
    // ];

    const data = this.props.hotels;
    data.sort(dynamicSort("hotelAvaliation"))
    return (
      <div>
        <List
        grid={{ gutter: 30, column: 3 }}
        pagination={{
          onChange: page => {
            console.log(page);
          },
          position: "both",
          showSizeChanger: true,
          defaultPageSize : 6,
          pageSizeOptions: ["3", "6", "9"],
        }}
        dataSource={data}
        renderItem={item => (
          <List.Item>
            {/* Dentro do HotelResume nos precisamos atualizar o props, já que a alteração
            é feita nela, isso é feito pelo método componentDidUpdate */}
            <HotelResume 
            hotelTitle = {item.hotelTitle} 
            hotelPrice = {item.hotelPrice} 
            hotelAvaliation = {item.hotelAvaliation} 
            hotelLocation = {item.hotelLocation}
            onHotelDefining = {this.props.onHotelDefining}
            >qualquer coisa</HotelResume>
          </List.Item>
        )}
        />
      </div>
    );
  }
}

export default HotelSection;
