import Header from "../composants/Header";
import Footer from "../composants/Footer";
import FormulaireContact from "../composants/FormulaireContact";
import React from "react";

function Contact()
{
    return (
        <div>
            <Header></Header>
            <FormulaireContact></FormulaireContact>
            <Footer></Footer>
        </div>
    );
}

export default Contact;