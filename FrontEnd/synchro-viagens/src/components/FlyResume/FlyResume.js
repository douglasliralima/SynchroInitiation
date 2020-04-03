import React from 'react';

import iconFly from "./iconFly.jpg";

import { Card, Avatar, Rate} from "antd";

const { Meta } = Card;

class FlyResume extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            flyId : this.props.flyId,
            flyCompany : this.props.flyCompany,
            flyAvaliation : this.props.flyAvaliation,
            flyPrice : this.props.flyPrice
        }
    }

    onFlyDefining = (e) => {
        this.props.onFlyDefining(this.state.flyId)
    }

    async componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):
        if (this.props.flyId !== prevProps.flyId) {
          this.setState({
            flyId : this.props.flyId,
            flyCompany : this.props.flyCompany,
            flyAvaliation : this.props.flyAvaliation,
            flyPrice : this.props.flyPrice
          });
        }
      }

    render(){
        let {flyCompany, flyAvaliation, flyPrice} = this.state;

        const flyDescription = "R$" + flyPrice;
        return (
            <div className = 'fly-resume'>
                
                <Card
                    hoverable
                    onClick = {this.onFlyDefining}
                >
                    <Meta 
                    avatar={<Avatar shape = "square" size={64} src={iconFly} />}
                    title={flyCompany} 
                    description={flyDescription} 
                    />
                    <Rate style = {{
                        marginTop : "1rem"
                    }}
                    disabled defaultValue={parseInt(flyAvaliation)} />
                </Card>
            </div>
        );
    }
}

export default FlyResume;