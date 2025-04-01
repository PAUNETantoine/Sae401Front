import Header from "../composants/Header";
import Footer from "../composants/Footer";
import FormulaireContact from "../composants/FormulaireContact";
import ListeMembresBDE from "../composants/ListeMembresBDE";
import React from "react";

function Contact()
{
    return (
        <div>
            <Header></Header>
            <ListeMembresBDE></ListeMembresBDE>
            <FormulaireContact></FormulaireContact>
            <Footer></Footer>
        </div>
    );
}

export default Contact;