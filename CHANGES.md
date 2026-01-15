## index.html
Creamos clases para que podamos reutilizar código y variables también reutilizables.


## syles.css
Normalización básica de estilos, para que todos los elementos HTML partan de las mismas reglas:

\* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
} 

convertimos los id a clases -> #list{} pasa a ser .list{}


## app.js
El código estaba usando eventos en línea, es mejor delegación de eventos para controlar los eeventos del documento.
La verdad que he cambiado todo el código prácticamente.
He puesto el documento a la escucha de eventos de click y he modificado las funciones de render() y add()

en add() he añadido una pequeña validación para que no se puedan insertar palabras vacías.

en render() primero el innerhtml= "" lo externalizado a una función para borrar el contenido del elemento del dom que le pasemos. eliminarElementosDOM(elementoDOM)
tambien he declarado un fragmento que posteriormente uso en la función render() de está manera no accedemos al DOM cada vez que queremos pintar  \<li\> con el boton; guardamos todos en el fragmento y luego lo volcamos.

Al botón de eliminar le asignamos el dataset id donde almacenamos el indice del usuario en la lista y lo usamos en el evento de click del boton de borrado para enviarselo a la función remove(i)

