/* Código javascript para el gestor de proyectos*/

var send_button = document.getElementById("send-button");

var lista_titulos = [];
var lista_tags = [];
var lista_descripcion = [];
var indice = 0;

send_button.onclick = () => {
    /* Crearemos la lógica para que al hace click al boton "Enviar"
    se cree un bloque div donde figuren los datos introducidos y un
    nuevo botón "Done" */
    var newDiv = document.createElement("div");
    newDiv.id = "Task-block";

    var newTitulo = document.createElement("p");
    newTitulo.innerHTML = "Título: " + (document.getElementById("titulo").value) + "\n";
    lista_titulos.push(newTitulo.innerHTML)

    var newTags = document.createElement("p");
    newTags.innerHTML = "Tags: " + (document.getElementById("tags").value) + "\n";
    lista_tags.push(newTags.innerHTML)

    var newDescription = document.createElement("p");
    newDescription.style = "overflow-wrap: break-word;";
    newDescription.innerHTML = "Descripción: " + (document.getElementById("descripcion").value) + "\n";
    lista_descripcion.push(newDescription.innerHTML)

    /*Creamos un boton "Done" que servirá además para identificar a cada uno de los
    bloques div del contenedor ToDo, para así saber*/
    var done_button = document.createElement("button");
    done_button.innerHTML = "DONE"
    done_button.type = "button"
    done_button.id = "done-button"
    done_button.value = indice;
    done_button.onclick = function() {Done(done_button, done_button.value)};
    indice += 1;

    newDiv.appendChild(newTitulo);
    newDiv.appendChild(newTags);
    newDiv.appendChild(newDescription);
    newDiv.appendChild(done_button);

    var currentElement = document.getElementById("ToDo-block2");
    currentElement.appendChild(newDiv)
};

function Done(boton, n){
    boton.onclick = () => {
        var newDiv = document.createElement("div");
        newDiv.id = "Task-block";

        var newTitulo = document.createElement("p");
        newTitulo.innerHTML =  lista_titulos[n];

        var newTags = document.createElement("p");
        newTags.innerHTML = lista_tags[n];

        var newDescription = document.createElement("p");
        newDescription.style = "overflow-wrap: break-word;";
        newDescription.innerHTML = lista_descripcion[n];

        newDiv.appendChild(newTitulo);
        newDiv.appendChild(newTags);
        newDiv.appendChild(newDescription);

        var currentElement = document.getElementById("Done-block2");
        currentElement.appendChild(newDiv)
    }
};
