let modal = document.getElementById("modal2");
let modalImg = document.getElementById("gallery-image");
let captionText = document.getElementById("caption");
let title1 = document.getElementById("title");
let desc1 = document.getElementById("description");
let title2 = document.getElementById("title2");
let desc2 = document.getElementById("description2");

const span = document.getElementById("close-modal");

function playVideo(playBut, playId) {
  let video = document.getElementsByClassName("video")[playBut];

    video.play();
    document.getElementById(playId).style.display = "none";
}

function stopVideo(playBut, playId){
let video = document.getElementsByClassName("video")[playBut];

  video.pause();
  document.getElementById(playId).style.display = "block";
}

span.addEventListener("click", function () {
  modal.style.display = "none";
});

let expandImg = function (id) {
  const img = document.getElementById(id);
  modal.style.display = "block";
  modalImg.src = img.src;
  captionText.innerHTML = img.alt;
};

function changeText(type) {
  let texto = "video";
  switch (type) {
    case "title1":
      (title1.innerText = "Lancera Pyro de Liyue"),
        (desc1.innerText =
          "Concepto inspirado en el juego «Genshi Impact», proveniente de la región llamada Liyue, inspirada en la cultura china. Este personaje hace uso de una «visión Pyro», representando la habilidad de realizar ataques inbuidos en fuego. Los Personajes que poseen una visión Pyro, suelen ser apasionados e intensos con sus ambiciones.");
      break;
    case "title2":
      (title1.innerText = "La guerrera roja"),
        (desc1.innerText =
          "Personaje basado en el folclore japones, los «oni» son criaturas que comparten muchas similitudes con los demonios y ogros.\n\n Dentro del folclore existe una historia corta, sobre un oni rojo y uno azul, la historia cuenta el oni rojo queria ser amigo de los humanos pero estos siempre le tenian miedo, por lo que el oni azul le ofrece ayuda, el azul causaria estragos y el oni rojo ayudaria a los humanos, asi ganandose su confianza.");
      break;
    case "title3":
      (title1.innerText = "El hoyo negro"),
        (desc1.innerText = 
          'Representa el sentimiento de dolor y enojo al mismo tiempo, por cosas que vivio en vida. Guarda rencores por los que siente desprecio y desea venganza, a su vez siente una tristeza profunda y no deja de sufrirlos.\n \n  Amarrada a estos sentimientos, se consume a si misma.');
      break;
    case "title4":
      (title1.innerText = "Eso"),
        (desc1.innerText =
          'Representa la cosificación y deshumanización que a veces le damos a las personas, idealizando y creando escenarios inexistentes, que finalmente terminan creando una imagen borrosa y cortada de la persona.');
      break;
    case "anim1":
      (title2.innerText = "Unreal: introducción"),
        (desc2.innerText =
          'Esta animación pertenece al proyecto previamente mencionado «Unreal» como escena introductoria al juego. Podemos observar al protagonista escapando de "algo", al tenerlo cara a cara revela la forma de este "algo", representada por un ser grande, musculoso y con ciertas caracteristicas de una calaca. Logra ponerse de piel de nuevo y se encierra en el primer lugar que encuentra, para asi encontrarse con nuestro primer aliado que representa la esquizofrenia.');
      break;
    case "anim2":
      (title2.innerText = "Livin' Amazin'"),
        (desc2.innerText = 
          "Esta animación fue una comisión para un pequeño productor de musica, que me contacto para animar un loop para su video musical en youtube. \n \n La animación estilo pixel art presenta a mi cliente recorriendo una carretera cerca de la ciudad de noche, en un auto mientras fuma un cigarrillo.\n \n  https://www.youtube.com/watch?v=I3aoPA97bLU");
      break;
    case "anim3":
      (title2.innerText = "Unreal: animación caminar"),
        (desc2.innerText =
          "Esta animación pertenece al proyecto previamente mencionado «Unreal», utilizada como animación en loop cuando el personaje camina hacia enfrente y hacia atras.");
      break;
    case "anim4":
      (title2.innerText = "Animación iddle"),
        (desc2.innerText =
          "Esta animación fue una comisión para un cliente que requeria su personaje estilo pixel art con un movimiento simple y parpadeo en sus ojos.");
      break;
    case "anim5":
      (title2.innerText = "Mosca caminar"),
        (desc2.innerText =
          "Esta animación pertenece a un pequeño proyecto que comence a desarrollar, en el cual el protagonista era una mosca que habia perdido las ganas de seguir 'haciendo cosas de moscas', por lo cual ahora caminaba en dos patas y realizaba 'acciones de humanos'.");
      break;
  }
}

function change(src, type) {
  if (type === "icon") document.getElementById("main-image").src = src;
  else if (type === "animacion")
    document.getElementById("main-video").src = src;
}
