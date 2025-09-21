//Programa Principiante de Oracle Next Education. G9.
//Participante: Darimar García.
// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];
const campoNombre = document.getElementById('amigo');

function actualizarArrayAmigos(nombre){
  let existe = false;

  //Obtener el elemento de la lista  
  const listaAmigos = document.getElementById('listaAmigos'); 
  //Validar que no exista el nombre en la lista
  for (let i = 0; i < amigos.length; i++) {
     if (amigos.length !== 0 && amigos[i] == nombre) {
       alert(`Ya el nombre ${nombre} existe en la lista`); 
       existe = true;
       break;        
     } 
  }
  // Agregar elemento a listaAmigos y al arreglo amigos.
  if (existe == false) {
    //Agregar elemento a la lista
    const item = document.createElement('li'); 
    item.textContent = nombre;     
    listaAmigos.appendChild(item);
    //Actualizar el array amigos
    amigos.push(nombre);  
  }
}

//Inicializa el elemento resultado
function inicializarResultado(){
  if (resultado.length !== 0){
      resultado.innerHTML = "";
      resultado.textContent = "";
    }
}

function agregarAmigo(){ 
  // Capturar el campo de entrada y quitar los espacios en blanco
  const nombreAmigo = campoNombre.value.trim(); 
  //Validar la entrada no esté en blanco
  if (nombreAmigo == "") {                     
    alert("Por favor, inserte un nombre");
  } else {
  //Actualizar el array amigos
    actualizarArrayAmigos(nombreAmigo);
  // Limpiar el campo de entrada y resultado (cuando sea necesario) 
    campoNombre.value = "";
    campoNombre.focus(); 
    inicializarResultado();
  }            
}

function sortearAmigo(){
  const resultado = document.getElementById('resultado'); 
  //Validar que la lista amigos tenga algún elemento
  if (amigos.length !== 0) {   
    //Determinar el amigo secreto aleatoriamente
    let amigoElegido = parseInt(Math.random() * amigos.length);  
    //Limpiar la lista existente
    listaAmigos.innerHTML = "";   
    //Mostrar el amigo elegido
    resultado.textContent = `El amigo secreto es ${amigos[amigoElegido]}`;
    //Limpia el arreglo amigos para una nueva jugada
    amigos.length = 0;
  } else {
    //Si el arreglo amigos está vacío orienta al usuario para que agregue a los amigos
    alert("Si desea seguir jugando debe insertar el nombre de los amigos");
    campoNombre.focus(); 
    inicializarResultado();
  }
}

