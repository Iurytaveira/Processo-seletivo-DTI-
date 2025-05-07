import React, { useEffect, useState } from 'react';
import { Container, Tabela, Titulo } from './styles';

export default function ListaAlunos() {
  const [alunos, setAlunos] = useState([]);

  useEffect(() => {
    async function carregarAlunos() {
      const resposta = await fetch('http://localhost:3001/alunos');
      const dados = await resposta.json();
      setAlunos(dados);
    }
    carregarAlunos();
  }, []);

  return (
    <Container>
      <Titulo>Lista de Alunos</Titulo>
      <Tabela>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Nota 1</th>
            <th>Nota 2</th>
            <th>Nota 3</th>
            <th>Nota 4</th>
            <th>Nota 5</th>
            <th>Frequência (%)</th>
            <th>Média</th>
          </tr>
        </thead>
        <tbody>
          {alunos.map((aluno, index) => (
            <tr key={index}>
              <td>{aluno.nome}</td>
              <td>{aluno.nota1}</td>
              <td>{aluno.nota2}</td>
              <td>{aluno.nota3}</td>
              <td>{aluno.nota4}</td>
              <td>{aluno.nota5}</td>
              <td>{aluno.frequencia}%</td>
              <td>{aluno.media}</td>
            </tr>
          ))}
        </tbody>
      </Tabela>
    </Container>
  );
}
