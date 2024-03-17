// Definición de la clase Animal para representar objetos de animales

class Animal {
    // Constructor de la clase Animal.
    constructor(nombre, edad, img, comentarios, sonido) {
      // Propiedades privadas utilizando let y métodos de acceso.
      let Nombre = nombre;
      this.getNombre = () => Nombre;
      let Edad = edad;
      this.getEdad = () => Edad;
      let Img = img;
      this.getImg = () => Img;
      let Comentarios = comentarios;
      this.getComentarios = () => Comentarios;
      let Sonido = sonido;
      this.getSonido = () => Sonido;
          }
  
    // Métodos de acceso para las propiedades privadas.
  
    // Método para obtener el nombre del animal.
    get Nombre() {
      return this.getNombre();
    }
  
    get Edad() {
        return this.getEdad();
    }

    get Img() {
        return this.getImg();
    }

    get Comentarios() {
        return this.getComentarios();
    }

    get Sonido() {
        return this.getSonido();
    }
}


  
  export default Animal; // Exporta la clase Animal para que pueda ser utilizada en otros módulos.