import Header from "../composants/Header";
import Footer from "../composants/Footer";
import FormulaireContact from "../composants/FormulaireContact";
import ListeMembreBDE from "../composants/ListeMembreBDE";
import React from "react";

function Contact()
{
    return (
        <div>
            <Header></Header>
            <ListeMembreBDE></ListeMembreBDE>
            <FormulaireContact></FormulaireContact>
            <Footer></Footer>
        </div>
    );
}

export default Contact;