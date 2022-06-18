senha_cores = new Array(); // é um, array numérico de 4 posições onde cada número corresponde a uma cor.
acertos = 0;
tentativas = 7;
pontos = 0;




function iniciar(){
  gerar_senha_cores();
  atualizar();
}

function gerar_senha_cores() {
  for (let c = 0; c <= 3 ; c++) {
    let n1 = Math.floor(Math.random() * 8);
    senha_cores[c] = n1;
  }
}




function escolher(cor,numero){
  //primeiro preciso descobrir qual é a posição do array senha_cores q estamos tentando adivinhar
  //para isso faço um switch do número de acertos
  switch(acertos) {
    case 0:
      id = "s1";
      break;
    case 1:
      id = "s2";
      break;
    case 2:
      id = "s3";
      break;
    case 3:
      id= "s4";
      break;
    default:
      finalizar();
      break;
  }
  numero = numero * 1; //só para me certificar que recebi o número correspondente a cor lá do html
  if (numero == senha_cores[acertos]) {
    document.getElementById(id).style.backgroundColor = cor;
    document.getElementById(id).src = "";
    acertos++;
    tentativas = 7;
    pontos++;
    aparecer_desaparecer();
    atualizar();
  }
  else {
    desaparecer();
    tentativas--;
    atualizar();
  }
  }

  function atualizar(){
    document.getElementById("tentativas").innerHTML = tentativas;
    document.getElementById("pontuacao").innerHTML = pontos;
    if (acertos >= 4 || tentativas <= 0) {
      document.getElementById("reiniciar").style.display = "block";
    }

  }


function aparecer(){
  $('#erro').hide();
}

function desaparecer() {
  $('#erro').show();
  setTimeout(aparecer,1500)
}

function aparecer_desaparecer() {
  $('#acerto').show();
  setTimeout(() => {
    $('#acerto').hide()
  }, 1500);
}