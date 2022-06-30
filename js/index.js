var imagenes = ['../img/1.png', '../img/2.png', '../img/3.png', '../img/4.png'],
    cont = 0;

function carrusel(carru){
    carru.addEventListener('click', e => {
        let atras = carru.querySelector('.atras'),
            siguiente = carru.querySelector('.siguientte'),
            img = carru.querySelector('img'),
            tgt = e.target;


        if(tgt = atras){
            if(cont > 0){
                img.src = imagenes[cont - 1];
                cont--;
            }else{
                img.src = imagenes[imagenes.length -1];
                cont = imagenes.length - 1;
            }
        }else if(tgt = siguiente){
            if(cont < imagenes.length - 1){
                img.src = imagenes[cont + 1];
                cont++;
            }else{
                img.src = imagenes[0];
                cont = 0;
            }
        }

    })

}

document.addEventListener("DOMContentLoaded", () =>{
    let conten = document.querySelector('.carru');

carrusel(conten);
});