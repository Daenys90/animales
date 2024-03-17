import Animal from "./animal.js"; // Importa la clase Animal desde el archivo Animal.js

const audioPlayer = document.getElementById("player"); // Obtiene el elemento de audio del documento HTML

// Clase para representar un León, que extiende la clase Animal.
class Leon extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido); // Llama al constructor de la clase Animal con super().
  }

  Rugir() {
    console.log(this.getSonido()); // Imprime el sonido del león en la consola.
    audioPlayer.src = `assets/sounds/${this.getSonido()}`; // Establece la ruta del archivo de sonido del león.
    audioPlayer.play(); // Reproduce el sonido del león.
  }
}

// los otors animales

class Aguila extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido)
    }
    Chillar() {
    console.log(this.getSonido()); // 
    audioPlayer.src = `assets/sounds/${this.getSonido()}`; // 
    audioPlayer.play(); // 
    }
}

class Lobo extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido)
    }
    Aullar() {
    console.log(this.getSonido()); // 
    audioPlayer.src = `assets/sounds/${this.getSonido()}`; // 
    audioPlayer.play(); 
    }
}

class Oso extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido)
    }
    Gruñir() {
        console.log(this.getSonido()); // 
        audioPlayer.src = `assets/sounds/${this.getSonido()}`; // 
        audioPlayer.play(); 
    }
}

class Serpiente extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido)
    }
    Sisear() 
    {
        console.log(this.getSonido()); // 
        audioPlayer.src = `assets/sounds/${this.getSonido()}`; // 
        audioPlayer.play();     
    }
}

//exportar

export { 
    Leon,
    Aguila,
    Lobo,
   Oso,
    Serpiente,
}