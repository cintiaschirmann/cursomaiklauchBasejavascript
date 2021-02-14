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
  },
  {
    nome:'Mais um aluno',
    nota: 10,
  },
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
  },
  {
    nome:"Novo aluno",
    nota: 5
  }

]

function calculaMedia(alunos) {

  let soma = 0;
  for (let i = 0; i < alunos.lenght; i++) {
      soma = soma + alunos[i].nota
  }

  const media = soma / alunos.lenght
  return media

}

const media1 = calculaMedia (alunosDaTurmaA)
const media2 = calculaMedia (alunosDaTurmaB)




function enviaMensagem(media, turma) {
if (media > 5) {
  console.log(`a media da turma ${turma} foi de ${media}. Parabens`)
 }  else {
 
 console.log(`a media da turma ${turma} é menor que 5`)
 
 }
 
 console.log(media < 5
   )
 
}

enviaMensagem(media1, 'turmaA')
enviaMensagem(media2, 'turmaB')


function marcarComoReprovado(aluno){
  aluno.reprovado = false;
  if (aluno.nota < 5) {
    aluno.reprovado = true;
  }

}

function enviaMensagemReprovado (aluno) {
  if(aluno.reprovado) {
    console.log(`o aluno ${aluno.nome} esta reprovado!`)
  }
}

function alunoReprovado (alunos) {
  for (let aluno of alunos) {
    marcarComoReprovado(aluno);
    enviaMensagemReprovado(aluno); 
  }
}

alunoReprovado(alunosDaTurmaA)
alunoReprovado(alunosDaTurmaB)

