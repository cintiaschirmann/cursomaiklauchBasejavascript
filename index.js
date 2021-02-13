// criar um programa que calcula media
// das notas ente os alunos e envia
// mensagem e calculo de media


const alunosDaTurmaA = [
  {
    nome: "Mayk",
    nota: 9.8
  },
  {
    nome: "Diego",
    nota: 10
  },
  {
    nome: "Fulano",
    nota: 2
  }
]

const alunosDaTurmaB = [
  {
    nome: "Cleiton",
    nota: 10
  },
  {
    nome: "Robson",
    nota: 10
  },
  {
    nome: "Siclano",
    nota: 2
  }
]

function calculaMedia(alunos) {

return ( alunos[0].nota + alunos[1].nota + alunos[2].nota) / 3

}

const media1 = calculaMedia (alunosDaTurmaA)
const media2 = calculaMedia (alunosDaTurmaB)




function enviaMensagem(media, turma) {
  // se a media for maior que 5 parabenizar a turma
if (media > 5) {
  console.log(`a media da turma ${turma} foi de ${media}. Parabens`)
 }  else {
 
 console.log(`a media da turma ${turma} é menor que 5`)
 
 }
 
 console.log(media < 5
   )
 
}

//PARAMETROS DA FUNÇÃO
enviaMensagem(media1, 'turmaA')
enviaMensagem(media2, 'turmaB')


