/*var nome = "João Gabriel";
var idade = "13";
var idade2 = "10"
var frase = "Flamengo não é time, é seleção"
lert(idade + idade2 + " anos");
console.log(idade + idade2);
console.log(frase.toLocaleUpperCase());
console.log(frase.replace("não",""));
var n1 = 13;
var n2 = 10;
console.log(n1 * n2);


var lista = ["Uva", "Banana", "Laranja"];
lista.push("Tereré");
lista.pop();
console.log(lista[1]);
console.log(lista.toString());
console.log(lista.join("  "));
//console.log(lista.length)


var fruta = [{nome:"Coxa",cor: "Xablau"},{nome:"xd", cor:"krl"}]
console.log(fruta);


var idade = prompt("Qual sua idade?");
if (idade >= 18) {
    alert("grande");
} else {
    alert("pequeno");
}


var count = 0;
while (count < 5) {
    console.log(count);
    count++;
}


var count = 0;
for (count = 1; count <= 5;count ++) {
    alert(count);
}



var d = new Date()
alert(d.getDay());

var xd = "ha";
var x1 = "ola";

console.log(var 1 + var 2)


function soma(n1,n2) {
    return n1 + n2;
}


function validaIdade(idade) {
    var validar = true;
    if(idade >= 18){
        validar = true;
    }else{
        validar = false;
    }
    return validar;
}
var idade = prompt("Qual sua idade");
console.log(validaIdade(idade));
*/

function botao() {
    document.getElementById("click").innerHTML = "<b>Vlw ai</b>";
    console.log(document.getElementById("click"));
    //alert("Clica mais");
}

function vai() {
    //window.open("https://www.espn.com.br/");
    window.location.href = "https://www.espn.com.br/";
}

function troca(elemento) {
    //document.getElementById("movem").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
    //alert("teste");
}

function voltar(elemento) {
    elemento.innerHTML = "Passe o mouse";
    //document.getElementById("movem").innerHTML = "Passe o mouse";
}