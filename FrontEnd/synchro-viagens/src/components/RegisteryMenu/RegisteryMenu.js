import React from "react"

import { Row, Col} from 'antd';
import { Radio } from 'antd';

import RegisteryHotel from "./RegisteryHotel"
import RegisteryFly from "./RegisteryFly"


class RegisteryMenu extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            layout : "hotel",
        }
    }

    onRadioChange = e => {
        console.log("Valor", e.target.value)
        this.setState({
            layout : e.target.value
        })
      };

    render(){

        let formLayout;
        if(this.state.layout === "hotel"){
            formLayout = <RegisteryHotel 
            locations = {this.props.locations} 
            meses = {this.props.meses}
            locationsStringObject = {this.props.locationsStringObject}
            />;
        } else if(this.state.layout === "compania"){
            formLayout = <RegisteryFly 
            locations = {this.props.locations}  
            meses = {this.props.meses}
            locationsStringObject = {this.props.locationsStringObject}
            />;
        }

        return(
            <div>
                <Row style = {{
                    margin : "5rem 0"
                }}
                gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col className="gutter-row" span={12}>
                    <div className = "registery__left-side side-image">
                        <h1 className = "heading-primary">
                            <span className = "heading-primary--sub">
                                Trabalhe conosco
                            </span>
                        </h1>
                    </div>
                </Col>

                <Col className="gutter-row" span={12}>
                    <Row>
                        <Radio.Group 
                        onChange = {this.onRadioChange} 
                        value={this.state.layout}
                        >
                            <Radio.Button value="hotel">Hotel</Radio.Button>
                            <Radio.Button value="compania">Compania Áerea</Radio.Button>
                        </Radio.Group>
                    </Row><br/>
                    <Row>
                        {formLayout}
                    </Row>
                </Col>
                </Row>
            </div>
        );
    }
}

export default RegisteryMenu