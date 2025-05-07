const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());


let alunos = [];

app.post('/alunos', (req, res) => {
  const { nome, nota1, nota2, nota3, nota4, nota5, frequencia } = req.body;

  if (!nome || nota1 == null || nota2 == null || nota3 == null || nota4 == null || nota5 == null || frequencia == null) {
    return res.status(400).json({ error: 'Dados incompletos.' });
  }

  const novoAluno = {
    nome,
    nota1: Number(nota1),
    nota2: Number(nota2),
    nota3: Number(nota3),
    nota4: Number(nota4),
    nota5: Number(nota5),
    frequencia: Number(frequencia)
  };

  alunos.push(novoAluno);
  res.status(201).json({ message: 'Aluno cadastrado com sucesso!', aluno: novoAluno });
});


function calcularMedia(aluno) {
  const notas = [aluno.nota1, aluno.nota2, aluno.nota3, aluno.nota4, aluno.nota5];
  const soma = notas.reduce((acc, val) => acc + val, 0);
  return (soma / notas.length).toFixed(2);
}


app.get('/alunos', (req, res) => {
  const alunosComMedia = alunos.map(aluno => ({
    ...aluno,
    media: calcularMedia(aluno)
  }));

  res.json(alunosComMedia);
});


app.get('/medias-gerais', (req, res) => {
  const totalAlunos = alunos.length;
  if (totalAlunos === 0) return res.json({ message: 'Nenhum aluno cadastrado.' });

  const somas = {
    nota1: 0, nota2: 0, nota3: 0, nota4: 0, nota5: 0,
    frequencia: 0
  };

  const alunosComMedia = alunos.map(aluno => {
    const media = (aluno.nota1 + aluno.nota2 + aluno.nota3 + aluno.nota4 + aluno.nota5) / 5;
    somas.nota1 += aluno.nota1;
    somas.nota2 += aluno.nota2;
    somas.nota3 += aluno.nota3;
    somas.nota4 += aluno.nota4;
    somas.nota5 += aluno.nota5;
    somas.frequencia += aluno.frequencia;
    return { ...aluno, media };
  });

  const mediaTurmaGeral = (
    (somas.nota1 + somas.nota2 + somas.nota3 + somas.nota4 + somas.nota5) / (5 * totalAlunos)
  );

  const medias = {
    disciplina1: (somas.nota1 / totalAlunos).toFixed(2),
    disciplina2: (somas.nota2 / totalAlunos).toFixed(2),
    disciplina3: (somas.nota3 / totalAlunos).toFixed(2),
    disciplina4: (somas.nota4 / totalAlunos).toFixed(2),
    disciplina5: (somas.nota5 / totalAlunos).toFixed(2),
    frequenciaGeral: (somas.frequencia / totalAlunos).toFixed(2)
  };

  const alunosAcimaMedia = alunosComMedia.filter(aluno => aluno.media > mediaTurmaGeral);
  const alunosFrequenciaBaixa = alunosComMedia.filter(aluno => aluno.frequencia < 75);

  res.json({
    medias,
    alunosAcimaMedia,
    alunosFrequenciaBaixa
  });
});


app.listen(PORT, () => {
  console.log(`Servidor backend rodando em http://localhost:3001`);
});
