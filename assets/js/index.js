import { Leon, Lobo, Oso, Serpiente, Aguila } from "./clases/tipos.js"; // no funcionaba solo porque me faltaba el punto ./
import animalesData from "./animales.js"; // Importa el módulo de datos de animales desde el archivo Animales.js


let animales = []; // Arreglo para almacenar los objetos de animales registrados

// Función para recargar la tabla de animales en la interfaz de usuario
const reloadTable = () => {
    const animalesTemplate = document.getElementById("Animales"); 
    animalesTemplate.innerHTML = ""; 
    
    animales.forEach((p, i) => {
        
        const mainContenedor = document.createElement("div");
        mainContenedor.classList.add("card", "m-1");
        const imagenAnimal = document.createElement("img");
        imagenAnimal.src = p.Img;
        imagenAnimal.alt = p.Nombre;
        imagenAnimal.classList.add("card-img-top", "img-fluid");
        imagenAnimal.addEventListener("click", () => {
            modalDetails(i);
            $('#exampleModal').modal('show'); 
        });
        mainContenedor.appendChild(imagenAnimal);

        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body", "custom-button");
        mainContenedor.appendChild(cardBody);

        const botonSonido = document.createElement("button");
        botonSonido.classList.add("btn");
        botonSonido.textContent = "SONIDO";
        botonSonido.addEventListener("click", () => {
        playSound(p.Nombre);
        });
        cardBody.appendChild(botonSonido);
        animalesTemplate.appendChild(mainContenedor);
    });
};

// Función para reproducir el sonido del animal seleccionado
window.playSound = (nombre) => {
    const animal = animales.find((a) => a.getNombre() == nombre); 
    console.log(animal); 
    nombre == "Leon"
    ? animal.Rugir()
    : nombre == "Aguila"
    ? animal.Chillar()
    : nombre == "Lobo"
    ? animal.Aullar()
    : nombre == "Oso"
    ? animal.Grunido()
    : nombre == "Serpiente"
    ? animal.Siseo()
       : undefined;
};

// Función para mostrar los detalles de un animal en el modal
window.modalDetails = (i) => {
    const modalBody = document.getElementsByClassName("modal-body")[0]; 
    const animal = animales[i];  
    modalBody.innerHTML = "";    
    const imagen = document.createElement("img");
    imagen.src = animal.Img;
    imagen.alt = animal.Nombre;
    imagen.classList.add("img-fluid");
    const nombre = document.createElement("h5");
    nombre.textContent = animal.Nombre;
    const edad = document.createElement("p");
    edad.textContent = `Edad: ${animal.Edad}`;
    const comentarios = document.createElement("p");
    comentarios.textContent = `Comentarios: ${animal.Comentarios}`;
    modalBody.appendChild(imagen);
    modalBody.appendChild(nombre);
    modalBody.appendChild(edad);
    modalBody.appendChild(comentarios);
};



// Variable para almacenar la ruta de la imagen del animal seleccionado
let imagenSrc ="";
// Variable para almacenar el sonido del animal seleccionado
let sonido = "";

// Evento de cambio en la selección del tipo de animal
document.getElementById("animal").addEventListener("change", async (e) => {
    const animalSelected = e.target.value; 
    const animales = await animalesData.getData(); 
    const animalObject = animales.find((a) => a.name == animalSelected); 
    imagenSrc = `/assets/imgs/${animalObject.imagen}`; 
    sonido = animalObject.sonido; 
    const preview = document.getElementById("preview"); 
    preview.parentElement.classList.remove("p-5"); 
    preview.style.backgroundImage = `url(${imagenSrc})`; 
});

// Evento de clic en el botón de registro de animal
document.getElementById("btnRegistrar").addEventListener("click", () => {

    //obtener valores del formulario 
    const nombreAnimal = document.getElementById("animal").value;
    const edad = document.getElementById("edad").value;
    const comentarios = document.getElementById("comentarios").value;

    //verificando llenado de formulario
    if(nombreAnimal && edad && comentarios){
        //si el formulario esta completo, procederemos a crear instancias
        //se utiliza switch para crear una opción para cada clase hija según el tipo de animal agregado
        let newAnimal;
        switch(nombreAnimal){
            case "Leon":
                newAnimal = new Leon(nombreAnimal, edad, imagenSrc, comentarios, sonido);
                break;
            case "Lobo":
                newAnimal = new Lobo(nombreAnimal, edad, imagenSrc, comentarios, sonido);
                break;
            case "Oso":
                newAnimal = new Oso(nombreAnimal, edad, imagenSrc, comentarios, sonido);
                break;
            case "Serpiente":
                newAnimal = new Serpiente(nombreAnimal, edad, imagenSrc, comentarios, sonido);
                break;
            case "Aguila":
                newAnimal = new Aguila(nombreAnimal, edad, imagenSrc, comentarios, sonido);
                break;
        }
        
        animales.push(newAnimal);
        document.getElementById("animal").selectedIndex = 0;
        document.getElementById("edad").selectedIndex = 0;
        document.getElementById("comentarios").value = "";
        reloadTable();
    }
    else{
        alert("Faltan datos por completar");
    }
});