<H1 align="center"> Instituto Tecnológico de Costa Rica  </H1>

</br></br>
<H1 align="center"> IC 4001:
Introducción al Diseño de Interfaces Gráficas de Usuario</H1>

</br></br>
<H1 align="center"> Escuela de Ingeniería en Computación </H1>


</br></br>
<H1 align="center">Profesor: Armando Arce</H1>

</br></br>
<H1 align="center">Proyecto 1: Editor de archivos Markdown </H1>

</br></br></br>
<H2 align="center">Integrantes: </H2>

<H2 align="center">Jorge Chavarría Rodríguez. 201066559 </H2>

<H2 align="center">Robert Oses Méndez. 201014769 </H2>

</br></br>
<H2 align="center">I Semestre </H2>

<H2 align="center">2012 </H2>


</br>
</br>

> 1. Introducción: 
===============

A lo largo de la historia de han creado multiples lenguajes, tanto para programación como para generar diferentes archivos, debido a esto, para facilidad de las personas que escriben bajo estas normas, se han creado editores que facilitan su desarrollo.
	
 Por esto, en el curso de Introducción al desarrollo de Interfaces de Usuario, dada como electiva en el Instituto Tecnológico de Costa Rica impartido por el profesor Armando Arce Orozco, se nos solicita como proyecto del curso, desarrollar una aplicación utilizando el ambiente Mozilla XUL y basado en el lenguaje CoffeeScript junto con la librería D3.js. El primero es un transcompilador de Javascript que es implementado como parte de un navegador web permitiendo mejoras en la interfaz de usuario y páginas web dinámicas. Por otra parte, la libreria es perteneciente a Javascript que permite la manipulación de documentos basados en informacion o datos. 

La aplicacion es un editor de texto en forrmato Markdown, el cual debe mostrar el texto leido desde un archivo de tipo .mkd y posteriormente mostrar el texto convertido a formato html a un lado de dicho texto.  

</br>
</br>

> 2. Descripción del Contenido a desplegar:
=====


Markdown: Es un leguaje de marcado ligero, que convierte el texto marcado en documentos HTML bien formados. Tratando de conseguir la máxima legibilidad y publicidad tanto en sus formas de entrada como de salida.

- La principal funcionalidad de la aplicación será suministrar al usuario un editor/diseñador del lenguaje "Markdown" y que a su vez genere el codigo HTLM correspondiente. 

En dicha aplicación se muestra una pantalla con 2 campos texto uno editable y el otro no:
	
- Primer campo (editable): Editor de markdown:
Este campo es el disponible para colocar el código de markdown, este es un campo editable en el cual se le muestra el código leido desde el archivo, además se puede modificar al gusto del usuario, para asi programar en este lenguaje y generar el nuevo código html.

- Segundo Campo (no editable): HTML generado:
Este campo es el utilizado para mostrarle al usuario el código html que se genera cuando se escribe en el editor de markdown que se encuentra a la izquierda de este mismo. 


Dicha funcionalidad de actualizado inmediato y salvado del archivo modificado se estará realizando para la segunda parte del proyecto.

</br>
</br>

> 3. Definición de Estructura de Datos 
==

+ Para la realización de este proyecto, se utlizaron diferentes estructuras implementadas en los diferentes tutoriales utilizados en las practicas de laboratorio acerca de pequeños editores que permiten la lectura y exploracion de  de XML, tales como mostrar datos en un campo de texto, datos desde archivos, funciones para conectar archivos en formato XML con coffeescript .

+ La estrutura principal utilizada para la conversion del texto markdown a html fue la función de la libreria llamada "makeHtlm", la cual recibe  como parametro el texto que se desea convertir y retorna el texto convertido a formato html. Este texto es el que se le muestra al usuario en el lado derecho del editor . Para posteriores versiones del programa, ademas de mostrar el texto en html, debe permitir al usuario editar el markdown y seguidamente se iran haciendo los cambios. 

</br>
</br> 

> 4. Formas de Compilación, ejecución y utilización de la aplicación. 
==

Se deben seguir una serie de pasos para lograr el exitosa ejecución de la aplicación:

1. Se requiere copiar todo la carpeta del proyecto llamada "editor_markdown" en el disco C de su computadora, o donde se encuentre instalado Mozilla Firefox. (Preferiblemente deben estar los dos en el mmismo disco (C:)

2. Abrir la consola de windows (cmd)

3. Direccionarse desde la consola hasta la carpeta donde se encuentra el archivo main.coffee, seria esta dirección C:\editor_markdown\chrome\content

4. Compilar este archivo de la siguiente manera: coffee -c main.coffee

5. Ejecutar la siguiente instucción en consola: "C:\Program Files\Mozilla Firefox\firefox.exe" -app "C:\editor_markdown\application.ini"

6. Y de esta menera se ejecutará al aplicación:

7. Se debe utilizar el botón abrir, y guiarse con el explorador de windows y de esta manera seleccinar el archivo de tipo markdown que se desea visualizar.

8. Inmediatamente se le mostrarán los 2 cuadros de texto con la información explicada anteriormente en el punto 2.

</br>
</br>

> 5. Ejemplos de Datos a utlizar como pruebas 
==

A lo largo de desarrollo de la aplicación se utilizaron múltiples archivos de prueba, esto para garantizar el 100% de funcionalidad. Pero como ejemplo suministramos el siguiente texto en markdown leido desde un archivo, así como también el  html que se genera a partir de este .mkd .
 
---
Tech
-----------

Dillinger uses a number of open source projects to work properly:

* [Ace Editor] - awesome web-based text editor
* [Showdown] - a port of Markdown to JavaScript
* [Twitter Bootstrap] - great UI boilerplate for modern web apps
* [node.js] - evented I/O for the backend
* [Express] - fast node.js network app framework [@tjholowaychuk]
* [keymaster.js] - awesome keyboard handler lib by [@thomasfuchs]
* [jQuery] - duh 

Installation
--------------

NOTE: currently the `app.js` file expects a Redis instance to be up and running and available.  It is used for session storage and will be used in the future.

1. Clone the repo
2. `cd dillinger`
3. `npm i`
4. `mkdir -p public/files`
5. `mkdir -p public/files/md && mkdir -p public/files/html`
6. `sudo node app`


License
-

MIT

---

Desarrollo de XUL
==

+ Javascript
+ Cofeescript
+ Firefox

---

Titulo Principal
===============
Subtitulo
---------

Y este es el cuepo del texto, con **negritas**  y  palabras o frases
_destacadas_.

Y  con algun que [otro enlace](http://www.google.com)

* Una lista 

	En este caso una lista sin enumerar
	
	* Podria ser enumerada 

---

</br>
</br>

>6. Limitaciones obervadas y posibles mejoras
==

Entre algunas cosas que limitaron el correcto desarrollo de la aplicación estan: 

+ XUL en ocaciones no permite la modificación de componentes de interfaz que están creados en el archivo de coffeescript, por lo que algunos elementos se deben crear directamente desde el archivo .coffee.

+ Se puede incorporar al proyecto la funcionalidad que muestre además de  el codigo html, el documento que se genera en el momento de abrirlo en el navegador web. 

+ Solo se puede habrir un archivo a la vez, en caso de querer abrir un nuevo archivo .mkd, se debe cerrar la aplicación y ejecutarla de nuevo.