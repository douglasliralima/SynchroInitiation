import React from "react";

import { Pagination, List, Card } from "antd";

import FlyResume from "../FlyResume/FlyResume"


class FlySection extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const data = [
      {flyId : 0, flyCompany : "Azul", flyAvaliation : 4, flyPrice : 500},
      {flyId : 0, flyCompany : "Azul", flyAvaliation : 4, flyPrice : 500},
      {flyId : 0, flyCompany : "Azul", flyAvaliation : 4, flyPrice : 500},
      {flyId : 0, flyCompany : "Azul", flyAvaliation : 4, flyPrice : 500},
      {flyId : 0, flyCompany : "Azul", flyAvaliation : 4, flyPrice : 500},
      {flyId : 0, flyCompany : "Azul", flyAvaliation : 4, flyPrice : 500},
      {flyId : 0, flyCompany : "Azul", flyAvaliation : 4, flyPrice : 500},
      {flyId : 0, flyCompany : "Azul", flyAvaliation : 4, flyPrice : 500},
      {flyId : 0, flyCompany : "Azul", flyAvaliation : 4, flyPrice : 500}
    ];
    return (
      <div>
        <List
        grid={{ gutter: 30, column: 3 }}
        dataSource={data}
        renderItem={item => (
          <List.Item>
            {/* Dentro do FlyResume nos precisamos atualizar o props, já que a alteração
            é feita nela, isso é feito pelo método componentDidUpdate */}
            <FlyResume 
            flyId = {item.flyId} 
            flyCompany = {item.flyCompany} 
            flyAvaliation = {item.flyAvaliation} 
            flyPrice = {item.flyPrice}
            onFlyDefining = {this.props.onFlyDefining}
            />
          </List.Item>
        )}
        />
      </div>
    );
  }
}

export default FlySection;