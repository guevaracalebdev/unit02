let questions, posicion = 0;
document.addEventListener("DOMContentLoaded",() => {
    questions = [
        {qleft: '1. ', qright: ' some books on the shelf..', answer:'', correct:'THERE ARE'},
        {qleft: '2.', qright: 'very little money left in the box.', answer:'', correct:'THERE IS'},
        {qleft: '3.', qright:'only one student in the lab now.', answer:'', correct:'THERE IS'},
        {qleft: '4.', qright:'very few people at the conference.', answer:'', correct:'THERE ARE'},
        {qleft: '5.', qright:'no more milk in the jug.', answer:'', correct:'THERE IS'},
        {qleft: '6.', qright:'no more cassettes in the box', answer:'', correct:'THERE ARE'},
        {qleft: '7.', qright:'no time left.', answer:'', correct:'THERE IS'},
        {qleft: '8.', qright:'several helicopters in the airfield.', answer:'', correct:'THERE ARE'},
        {qleft: '9.', qright:'some letters for you on the desk.', answer:'', correct:'THERE ARE'},
        {qleft: '10.', qright:'a lot of mistakes in your composition.', answer:'', correct:'THERE ARE'}
    ];
    mostrarPregunta(posicion); 

    document.getElementById('btnprev').addEventListener('click',() => {
        if(posicion !=0) {
             posicion--;
              mostrarPregunta(posicion);
        }
    })

     document.getElementById('btnnext').addEventListener('click',() => {
        if(posicion != questions.length-1) {
             posicion++;
              mostrarPregunta(posicion);
        }
    })
    
})
function mostrarPregunta(posicion){
    const question = document.getElementsByClassName('question')[0];
    question.innerHTML = `
     <p>${questions [posicion].qleft}</p>
     <input type="text" id="q1" name="q1" value="${questions[posicion].answer}" readonly ondrop="soltarTexto(event)" ondragover="permitirSoltar(event)">
     <p>${questions[posicion].qright}</p>

    `;
}

function iniciarArrastre(evento){
    //dataTransfer.seData se utiliza para almacenar informacion en la cache de a navegador
    //trimp() se utiliza para eliminar espacis al inicio y al final de un string 
    evento.dataTransfer.setData("text/plain", evento.target.textContent.trim());
}

function permitirSoltar(evento) {
    evento.preventDefault();
}

function soltarTexto(evento){
     evento.preventDefault();
    const datos = evento.dataTransfer.getData("text/plain");
    questions[posicion].answer = datos;
    evento.target.value = datos;
}

function verificarRespuestas() {
    let aciertos = 0;

    for (let i = 0; i < questions.length; i++) {
        if (questions[i].answer === questions[i].correct) {
            aciertos++;
        }
    }

    alert(
        `Acertaste ${aciertos} de ${questions.length} preguntas.\n` +
        `Puntuación: ${aciertos}/${questions.length}`
    );
}