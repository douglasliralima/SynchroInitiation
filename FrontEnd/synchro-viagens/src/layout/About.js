import React from "react"
import { Layout } from 'antd';

import SynchroLogo from "../assets/logo.png"


const { Footer } = Layout;
class About extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className = "footer">
                <Footer style={{ textAlign: 'center' }}>
                    <div>
                        <img className = "footer__logo" src = {SynchroLogo}/>
                    </div>
                    Synchro Viagens ©2020 Created by Douglas Lima
                </Footer>
            </div>
        );
    }
}

export default About;