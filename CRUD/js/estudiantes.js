console.log("------------CRUD ESTUDIANTES-------------")



function obtenerValores(){
    let id = document.getElementById("id").value
    let nombre = document.getElementById("nombre").value
    let apellido = document.getElementById("apellido").value
    let edad = document.getElementById("edad").value
    let carreras = document.getElementById("carreras").value
    console.log("mi id", id,nombre,apellido,edad,carreras);

    //primera forma
    let miEstudiante={}
    miEstudiante.id =id
    miEstudiante.nombre= nombre
 

    //segunda forma 
    let miEst2 = {id,nombre,apellido,edad,carreras}
    console.log(miEst2)
    return miEst2
}

function crearEstudiante(){
    let estudiante = obtenerValores();
    estudiantes.push(estudiante)
    listarEstudiante();
}
function eliminarEstudiante(index){
    estudiantes.splice(index,1);
    listarEstudiante();
}

let estudiantes = [
]

function listarEstudiante() {
    let lista = document.getElementById("listaEstudiantes");
    let data = "";
    for (let i = 0; i < estudiantes.length; i++) {
        let miEstudiante = estudiantes[i];
        data += "<tr>";
        data += `<td>${miEstudiante.id}</td>`;
        data += `<td>${miEstudiante.nombre} ${miEstudiante.apellido}</td>`;
        data += `<td>${miEstudiante.edad}</td>`;
        data += `<td>${miEstudiante.carreras}</td>`;
        data += `<td><button type="button" onclick="cargarInformacion(${i})" class="btn btn-primary"> Editar </button> </td>`;
        data += `<td> <button type="button" onclick="eliminarEstudiante(${i})" class="btn btn-primary"> Eliminar </button></td>`;

        data += "</tr>";       
    }
    
    lista.innerHTML = data;
    
}
listarEstudiante();

function cargarInformacion(index){
    let estudiante= estudiantes[index]
    document.getElementById("id").value = estudiante.id
    document.getElementById("nombre").value = estudiante.nombre
    document.getElementById("apellido").value = estudiante.apellido
    document.getElementById("edad").value = estudiante.edad
    document.getElementById("carreras").value = estudiante.carreras
    document.getElementById("btnEnviar").style.display="none"
    document.getElementById("btnActualizar").style.display="inline"

    

}

function actualizarEstudiante() {
    let EstActualizado = obtenerValores()
    estudiantes.splice(estudianteTemporal,1,miEstudiante)
    document.getElementById("btnEnviar").style.display="inline"
    document.getElementById("btnActualizar").style.display="none"
    
}

