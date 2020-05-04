/*
escreval("Digite o nome do aluno: ")
leia(nome)
escreval("Digite a nota 01 do aluno: ")
leia(nota01)
escreval("Digite a nota 02 do aluno: ")
leia(nota02)
media = (nota01 + nota02) / 2

se media >= 50 entao
    escreval("Aprovado!")
senao
    escreval("Reprovado!")
fimse
*/
var nome, nota01, nota02;
nome = prompt('Digite o nome do aluno: ')
nota01 = prompt("Digite a nota 01 do aluno: ")
nota02 = prompt("Digite a nota 02 do aluno: ")
/*Tem que colocar parseInt, para transformar o numero
que e chamado no prompt para intenger. 
*/
media = (parseInt(nota01) + parseInt(nota02)) / 2;

if (media >= 50) {
    alert("Você "+nome+" foi Aprovado! sua media foi: "+media)
}else {
    alert("Você "+nome+" foi Reprovado! sua media foi: "+media)
}