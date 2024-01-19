$(document).ready(function (){  //Cuando el documento se carge correctamente
    //Añadimos los parrafos para escribir
    $('textarea').after('<p><strong>Characters: </strong><i id="number1"></i></p>');
    $("textarea").countCharacters();  //Contara por primera vez el numero de letras
});

let count = 0;
jQuery.fn.countCharacters = function(){ 

    //Si alguno no tienen datos aun en data, se agregara automaticamente con la longuitud
    let info0 = $('textarea').data().length0 ?? $('textarea')[0].textLength;
    let info1 = $('textarea').data().length1 ?? $('textarea')[1].textLength;

    $(this).each((index, datos) => {

        let elemento = $(this); //Recogemos el objeto con elemento
        elemento.data("length"+index, elemento[index].textLength);   //Recogemos la informacion a data()

        if(count < 2) {  //Que pase solo una vez

            //Si hay algun dato que no este se actualiza automaticamente
            if($('textarea').data().length1 == undefined || $('textarea').data().length1 == undefined) {
                elemento.data("length0", info0);  //Añadimos los datos a data()
                elemento.data("length1", info1);

                $('i')[0].append($('textarea').data().length0);  //Lo añadimos a la i del parrafo
                $('i')[1].append($('textarea').data().length1);
            }
            count++;  //Para que pase solo una vez

        } else {
            //Actualizamos el contador por i's
            if(index == 0 && info0 != $('textarea').data().length0) {
                $('i')[0].innerHTML = $('textarea').data().length0;
            } else if(index == 1 && info1 != $('textarea').data().length1){
                $('i')[1].innerHTML = $('textarea').data().length1;
            }
        }
    });
}


$("textarea").on('keyup', (e) => {  //Se contara cada vez que levanten la tecla
    e.preventDefault();

    $("textarea").countCharacters();  
});