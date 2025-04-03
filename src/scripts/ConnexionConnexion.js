export async function envoyerConnexion(infoConnexion) {
    try {
        const url = `http://localhost:8000/user_update.php`;


        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ infoConnexion }),
        });

        const data = await response.json();

        if (response.status === 200) {

            console.log(data.message);


        } else {
            alert(data.error);
        }

    } catch (err) {
        alert('Erreur serveur');
    }

}