async function getEvenementActu()
{

    try {
        // Ajout des paramètres dans l'URL pour la requête GET
        const url = `http://localhost:8000/events.php`;

        const response = await fetch(url, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        });

        const data = await response.json();

        console.log(data)

        if (response.status === 200)
        {
            console.log(data.message);

            return data;
        } else {
            alert(data.error);
        }
    } catch (err) {
        console.log(err);
        //alert('Erreur serveur');
    }
}

async function getNewsLetter()
{
    console.log("Ok")

    try {
        // Ajout des paramètres dans l'URL pour la requête GET
        const url = `http://localhost:8000/index.php`;

        const response = await fetch(url, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        });

        const data = await response.json();

        if (response.status === 200)
        {
            console.log(data.message);

            return data;
        } else {
            alert(data.error);
        }
    } catch (err) {
        alert('Erreur serveur');
    }
}


export {getEvenementActu, getNewsLetter};