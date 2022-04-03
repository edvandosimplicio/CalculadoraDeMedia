//primeira variável é para entrada do 1 valor
var notaUm = document.querySelector("#nota-um");

//segunda variável é para entrada do 2 valor
var notaDois = document.querySelector("#nota-dois");

//terceira variável é para entrada do 3 valor
var notaTres = document.querySelector("#nota-tres");

//quarta variável é para entrada de das horas por dias trabalhados
var resposta = document.querySelector("#resposta");
var situacao = document.querySelector("#resultado");




function calcularMediaAluno() {
  var media = (notaUm.valueAsNumber + notaDois.valueAsNumber + notaTres.valueAsNumber) /  3;
resposta.textContent = media;
  //resultado de aprovado ou reprovado
  if( media < 6) {
  var a = "Reprovado"
  return situacao.textContent = a;
}
  else{
   var b = "Aprovado"
   return  situacao.textContent = b;
  }
  
  
}