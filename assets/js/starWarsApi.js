const API = "https://swapi.dev/api/people";

//Obtener los resultados de la API
const getData = (api) =>{
    return fetch(api)
    .then((response)=>response.json)
    .then((json)=>{
        starsWarsData(json.results)
    })
    .catch((error)=>{
        console.log(("Error:", error));
    });
}


//const StarWarsData

const starsWarsData = (data) =>{
    let html = "";

    data.forEach((pj) => {
    html += '<div class="col mt-5">';
    html += '<div class="card" style="width: 18rem;">';
    html += `<img src="" class="card-img-top" alt="">`;
    html += '<div class="card-body">';
    html += `<h5 class="card-title">${pj.name}</h5>`;
    html += `<p class="card-text">Altura: ${pj.height}</p>`;
    html += `<p class="card-text">Peso: ${pj.mass}</p>`;
    html += "</div>";
    html += "</div>";
    html += "</div>";
    });
    document.getElementById("datosPersonajes").innerHTML = html;
}


//Se ejecuta la API
getData(API);