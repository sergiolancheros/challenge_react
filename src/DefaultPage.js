import React, { Component } from "react";
import Header from "./Componentes/Header";
import Footer from "./Componentes/Footer"

class DefaultPage extends Component {
    render(){
        return(
                <div>
                    <Header />
                    <Footer />
                </div>
        );
    }
}

export default DefaultPage;