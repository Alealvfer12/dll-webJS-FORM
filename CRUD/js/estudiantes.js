console.log("------------CRUD ESTUDIANTES-------------")

let estudiantes=[]

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
}