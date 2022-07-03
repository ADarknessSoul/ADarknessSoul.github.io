document.addEventListener('DOMContentLoaded', function() {
    iniciarGaleria();
});

function iniciarGaleria() {
    crearGaleria();
    reproducirAudio();
    agregarPuerta();
    navegacionFija();
    scrollNav();
}

function navegacionFija() {
    const barra = document.querySelector('.header');
    const body = document.querySelector('body');
    const canciones = document.querySelector('.canciones');

    window.addEventListener('scroll', function() {
        if(canciones.getBoundingClientRect().top < 0) {
            barra.classList.add('fijo');
            body.classList.add('body-scroll');
        } else {
            barra.classList.remove('fijo');
            body.classList.remove('body-scroll');
        }
    });
}

function scrollNav() {
    const enlaces = document.querySelectorAll('.navegacion-principal a');
    enlaces.forEach( enlace => {
        enlace.addEventListener('click', function(e) {
            //console.log(e.target.attributes.href.value);

            e.preventDefault(); //Se previene la acción por default para que no nos lleve de golpe al id

            const seccionScroll = e.target.attributes.href.value;  //Asignamos el valor del href a una variable
            const seccion = document.querySelector(seccionScroll);
            seccion.scrollIntoView({behavior: "smooth"}); //Objeto de configuración
        });
    });
}

function crearGaleria() {
    const galeria = document.querySelector('.galeria-imagenes');

    for(let i = 1; i <= 9; i++) {
        const imagen = document.createElement('picture');

        imagen.innerHTML = 
        `
        <source srcset="build/img/thumb/${i}.avif" class="imagen" type="image/avif">
        <source srcset="build/img/thumb/${i}.webp" class="imagen" type="image/webp">
        <img class="imagen" loading="lazy" width="200" height="300" src=build/img/thumb/${i}.jpg" alt="Imagen de omori">
        `;

        imagen.onclick = function() {
            mostrarImagen(i);
        }

        galeria.appendChild(imagen);
    }
}

function mostrarImagen(id) {
    const imagen = document.createElement('picture');

        imagen.innerHTML = `
        <source srcset="build/img/grande/${id}.avif" type="image/avif">
        <source srcset="build/img/grande/${id}.webp" type="image/webp">
        <img loading="lazy" width="200" height="300" src=build/img/grande/${id}.jpg" alt="Imagen de omori">
        `;

        //Crear overlay con imágen
        const overlay = document.createElement('DIV');
        overlay.appendChild(imagen);
        overlay.classList.add('overlay');
        overlay.onclick = function() {
            overlay.remove(); //Método de javascript para eliminar el elemento
            const body = document.querySelector('body');
            body.classList.remove('fijar-body');
        }

        //Añadirlo al HTML
        const body = document.querySelector('body');
        body.appendChild(overlay);
        body.classList.add('fijar-body');
}

function reproducirAudio() {

    //Botones
    const Boton = document.querySelector('.button-1');
    const Boton2 = document.querySelector('.button-2');
    const Boton3 = document.querySelector('.button-3');

    const Pausar = document.createElement('BUTTON');

    //Monitorear estado del botón
    let Estado = 0;

    Pausar.classList.add('boton-pausar');
    Pausar.innerHTML = 'Pausar';

    //Canción
    const Cancion = document.createElement('AUDIO');

    Boton.onclick = function() {
        if(Estado == 0) {
            reproducirAugustwater(Pausar, Cancion);
        }
        Estado = 1;
    }
    Boton2.onclick = function() {
        if(Estado == 0) {
            reproducirWhitePillars(Pausar, Cancion);
        }
        Estado = 1;
    }
    Boton3.onclick = function() {
        if(Estado == 0) {
            reproducirCalm(Pausar, Cancion);
        }
        Estado = 1;
    }
    Pausar.onclick = function() {
        removerCancion(Pausar, Cancion);
        Estado = 0;
    }

}

function reproducirAugustwater(Pausar, augustwater) {

        const body = document.querySelector('body');
        const pausa = document.querySelector('.pausar');

        augustwater.setAttribute("src", "../musica/augustWater.mp3");
        augustwater.setAttribute("autoplay", "autoplay");
        augustwater.setAttribute("loop", "loop");
        
        body.appendChild(augustwater);
        pausa.appendChild(Pausar);

}
function reproducirWhitePillars(Pausar, WhitePillars) {

        const body = document.querySelector('body');
        const pausa = document.querySelector('.pausar');

        console.log('desde whitepillars');
        
        WhitePillars.setAttribute("src", "../musica/WhitePillars.mp3");
        WhitePillars.setAttribute("autoplay", "autoplay");
        WhitePillars.setAttribute("loop", "loop");
        
        body.appendChild(WhitePillars);
        pausa.appendChild(Pausar);

}
function reproducirCalm(Pausar, Calm) {

        const body = document.querySelector('body');
        const pausa = document.querySelector('.pausar');

        Calm.setAttribute("src", "../musica/Calm.mp3");
        Calm.setAttribute("autoplay", "autoplay");
        Calm.setAttribute("loop", "loop");
        
        body.appendChild(Calm);
        pausa.appendChild(Pausar);

}

function removerCancion(Pausar, Cancion) {

    Pausar.remove();
    Cancion.remove();
}
function agregarPuerta() {
    
    const Puerta1 = document.querySelector('.puerta1');
    const Puerta2 = document.querySelector('.puerta2');
    const Puerta3 = document.querySelector('.puerta3');
    
    //Crear la puerta abierta 1
    const Puerta1R = document.createElement('picture');

         Puerta1R.innerHTML = 
         `
         <source srcset="build/img/blackspace-puertaabierta.avif" type="image/avif">
         <source srcset="build/img/blackspace-puertaabierta.webp" type="image/webp">
         <img loading="lazy" width="200" height="300" src=build/img/blackspace-puertaabierta.jpg" alt="Imagen de puerta">
         `;

    Puerta1R.classList.add('puerta1');

    //Crear la puerta cerrada 1
    const Puerta1O = document.createElement('picture');

        Puerta1O.innerHTML = 
        `
        <source srcset="build/img/blackspace-puerta.avif" type="image/avif">
        <source srcset="build/img/blackspace-puerta.webp" type="image/webp">
        <img loading="lazy" width="200" height="300" src=build/img/blackspace-puerta.jpg" alt="Imagen de puerta">
        `;

    Puerta1O.classList.add('puerta1');

    //Crear la puerta abierta 2
    const Puerta2R = document.createElement('picture');

         Puerta2R.innerHTML = 
         `
         <source srcset="build/img/blackspace-puertaabierta.avif" type="image/avif">
         <source srcset="build/img/blackspace-puertaabierta.webp" type="image/webp">
         <img loading="lazy" width="200" height="300" src=build/img/blackspace-puertaabierta.jpg" alt="Imagen de puerta">
         `;

    Puerta2R.classList.add('puerta2');

    //Crear la puerta cerrada
    const Puerta2O = document.createElement('picture');

        Puerta2O.innerHTML = 
        `
        <source srcset="build/img/blackspace-puerta.avif" type="image/avif">
        <source srcset="build/img/blackspace-puerta.webp" type="image/webp">
        <img loading="lazy" width="200" height="300" src=build/img/blackspace-puerta.jpg" alt="Imagen de puerta">
        `;

    Puerta2O.classList.add('puerta2');

    //Crear la puerta abierta
    const Puerta3R = document.createElement('picture');

         Puerta3R.innerHTML = 
         `
         <source srcset="build/img/blackspace-puertaabierta.avif" type="image/avif">
         <source srcset="build/img/blackspace-puertaabierta.webp" type="image/webp">
         <img loading="lazy" width="200" height="300" src=build/img/blackspace-puertaabierta.jpg" alt="Imagen de puerta">
         `;

    Puerta3R.classList.add('puerta3');

    //Crear la puerta cerrada
    const Puerta3O = document.createElement('picture');

        Puerta3O.innerHTML = 
        `
        <source srcset="build/img/blackspace-puerta.avif" type="image/avif">
        <source srcset="build/img/blackspace-puerta.webp" type="image/webp">
        <img loading="lazy" width="200" height="300" src=build/img/blackspace-puerta.jpg" alt="Imagen de puerta">
        `;

    Puerta3O.classList.add('puerta3');

    //Eventos
     Puerta1.addEventListener('mouseover', function() {
         cambiarPuerta1(Puerta1, Puerta1R);
     });
    

    Puerta1R.addEventListener('mouseout', function() {
        cambiarPuerta1_1(Puerta1R, Puerta1O);
    });

    Puerta1O.addEventListener('mouseover', function() {
        cambiarPuerta1(Puerta1O, Puerta1R);
    });

    //Eventos 2
    Puerta2.addEventListener('mouseover', function() {
         cambiarPuerta2(Puerta2, Puerta2R);
     });
    

    Puerta2R.addEventListener('mouseout', function() {
        cambiarPuerta2_1(Puerta2R, Puerta2O);
    });

    Puerta2O.addEventListener('mouseover', function() {
        cambiarPuerta2(Puerta2O, Puerta2R);
    });

    //Eventos 3
    Puerta3.addEventListener('mouseover', function() {
        cambiarPuerta3(Puerta3, Puerta3R);
    });
   
   Puerta3R.addEventListener('mouseout', function() {
       cambiarPuerta3_1(Puerta3R, Puerta3O);
   });

   Puerta3O.addEventListener('mouseover', function() {
       cambiarPuerta3(Puerta3O, Puerta3R);
   });
}

//Funciones puerta 1
function cambiarPuerta1 (Puerta1, Puerta1R) {
    const Enlace1 = document.querySelector('.puertaA1');

    Puerta1.remove();

    Enlace1.appendChild(Puerta1R);
}

function cambiarPuerta1_1(Puerta1R, Puerta1O) {

    const EnlaceR = document.querySelector('.puertaA1');

        Puerta1R.remove();

        EnlaceR.appendChild(Puerta1O);
}

//Funciones puerta 2
function cambiarPuerta2 (Puerta2, Puerta2R) {
    const Enlace1 = document.querySelector('.puertaA2');

    Puerta2.remove();

    Enlace1.appendChild(Puerta2R);
}

function cambiarPuerta2_1(Puerta2R, Puerta2O) {

    const EnlaceR = document.querySelector('.puertaA2');

        Puerta2R.remove();

        EnlaceR.appendChild(Puerta2O);
}

//Funciones puerta 3
function cambiarPuerta3 (Puerta3, Puerta3R) {
    const Enlace1 = document.querySelector('.puertaA3');

    Puerta3.remove();

    Enlace1.appendChild(Puerta3R);
}

function cambiarPuerta3_1(Puerta3R, Puerta3O) {

    const EnlaceR = document.querySelector('.puertaA3');

        Puerta3R.remove();

        EnlaceR.appendChild(Puerta3O);
}