function mudarModo(){
   mudarClasses();
   mudarTexto();
}

function mudarClasses(){
    button.classList.toggle("dark-mode");
    h1.classList.toggle("dark-mode");
    body.classList.toggle("dark-mode");
    footer.classList.toggle("dark-mode");
}

function mudarTexto(){
    if(body.classList.contains("dark-mode")){
        button.innerHTML = "Ligth Mode";
        h1.innerHTML =  "Dark Mode" + " ON"
        return;
        }

        button.innerHTML = "Dark Mode";
        h1.innerHTML =  "Ligth Mode" + " ON"
}
const button = document.getElementById("mode-selector");
const h1 = document.getElementById("page-title");
const body = document.getElementsByTagName("body")[0];
const footer = document.getElementsByTagName("footer")[0];

button.addEventListener("click", mudarModo);