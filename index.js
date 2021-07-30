const API_URL = "https://rickandmortyapi.com";
const HTMLResponse = document.getElementById("app");


function data(pagina){
    fetch(`${API_URL}/api/character?page=${pagina}`)
     .then((response) => response.json())
     .then((data) => {
         htmlContent(data);    
    });
}

function searchName(){
    HTMLResponse.innerHTML="";
    var search = document.getElementById("search").value;
    console.log(search);
    fetch(`${API_URL}//api/character/?name=${search}`)
     .then((response) => response.json())
     .then((data) => {
         htmlContent(data);
    });
}

function htmlContent(data){
    let elements = data.results;
        console.log(data);
      
        elements.forEach(element => {
            let elem = document.createElement("li");
            let img = document.createElement("img");
            elem.appendChild(
                document.createTextNode(`${element.name} - 
                                         ${element.gender} -
                                         ${element.status} -
                                         ${element.species}`)
            );
            img.src = `${element.image}`;
            HTMLResponse.appendChild(elem);
            HTMLResponse.appendChild(img);
        }) 
}

function getNumberPage(option){
    HTMLResponse.innerHTML="";
    data(option);
}

