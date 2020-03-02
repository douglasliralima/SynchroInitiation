import React from "react"

import "./FilterBar.css"

import SynchroLogo from "../../assets/logo.png"

//Seria bacana na minha API, ela retornar os lugares que estão com hoteis registrados
//assim isso aqui pode ser feito dinamicamente
//Precisa colocar um nome
function SelectLocation(){
    return (
        <select>
            <option selected value="São Paulo, Brasil">São Paulo, Brasil</option>
            <option value="Recife, Brasil">Recife, Brasil</option>
            <option value="Rio de Janeiro, Brasil">Rio de Janeiro, Brasil</option>
            <option value="Belo Horizonte, Brasil">Belo Horizonte, Brasil</option>
            <option value="João Pessoa, Brasil">João Pessoa, Brasil</option>
        </select>
    );
}

class FilterBar extends React.Component {
    render(){
        return (
            <div className = "filter-bar">
                <img className = "synchro-logo" alt = "Synchro logo" src = {SynchroLogo}/>
                <form className = "travelling-filter">
                    <label>
                        <span aria-label= "location">Origem:</span><br/>
                        <SelectLocation/>
                    </label>
                    <label>
                        <span aria-label= "location">Destino:</span><br/>
                        <SelectLocation/>
                    </label>
                    <label>
                        <span aria-label = "date">Datas:</span><br/>
                        <input name = "beginning-date" type = "date"/><br/>
                        <input name = "Ending-date" type = "date"/>
                    </label>                    
                    <input type = "submit"/>
                </form>
            </div>
        );
    }
}

export default FilterBar