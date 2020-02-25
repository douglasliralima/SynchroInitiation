import React from "react"
import {Row, Col} from "react-bootstrap"

import "./FilterBar.css"

import SynchroLogo from "../../assets/logo.png"

class FilterBar extends React.Component {
    render(){
        return (
            <div id = "filter-bar">
                <Row>
                    <img src = {SynchroLogo}/>
                    <form id = "Travelling-Filter">
                        <Col sm = {2}>
                            <p>Origem</p>
                            <input type = "text"
                            name = "Origem"
                            placeholder = "Origem"
                            />
                        </Col>
                    </form>
                </Row>
            </div>
        );
    }
}

export default FilterBar