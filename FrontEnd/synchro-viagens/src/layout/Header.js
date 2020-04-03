import React from "react"

function Header(){
    return(    
    <section className = "header">
    <div className = "header__text-box">
        <h1 className = "heading-primary">
            <span className = "heading-primary--main">Synchro Viagens</span>
            <span className = "heading-primary--sub">A aventura está lá fora</span>
        </h1>
        <a href = "#buy-section" className = "btn btn--white btn--bottom-animated">
            Procure um pacote
        </a>
    </div>
</section>);


    
}

export default Header;