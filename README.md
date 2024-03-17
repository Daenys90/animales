# animales
Descripción:

Esta aplicación web permite registrar los comentarios de los investigadores que trabajan con animales salvajes en Australia. La aplicación utiliza el paradigma POO para crear instancias de las diferentes clases de animales, con sus atributos y métodos específicos.

Tecnologías:

JavaScript
POO
HTML
CSS
Funcionalidades:

Agregar animales a la tabla: Los usuarios pueden agregar animales a una tabla, especificando su nombre, especie, ubicación y estado.
Mostrar la lista de animales: Se puede mostrar una lista de todos los animales en investigación, con su información completa.
Clases:

Animal:
Atributos: nombre, especie, ubicación, estado (en investigación, en observación, liberado).
Métodos:
Constructor para inicializar los atributos.
Mostrar información del animal en formato de tabla.
Investigador:
Atributos: nombre, especialidad.
Métodos:
Agregar un animal a la investigación.
Mostrar la lista de animales en investigación.

Funciones:

Crear instancia de Animal: Crea una nueva instancia de la clase Animal con los datos proporcionados por el usuario.
Agregar animal a la tabla: Agrega un nuevo animal a la tabla, mostrando su información en formato de tabla.
Mostrar lista de animales: Muestra una lista de todos los animales en investigación, con su información completa.
Técnicas:

Funciones autoejecutables IIFE: Se utilizan para encapsular el código y evitar la contaminación del espacio global.
Funciones async/await: Se utilizan para manejar las llamadas a la API de forma asincrónica.
Obtención y modificación de elementos del DOM: Se utilizan para interactuar con la interfaz de usuario.
