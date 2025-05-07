import React, { useEffect, useState } from 'react';
import { Container, Titulo, Lista } from './style';

export default function MediasTurma() {
  const [medias, setMedias] = useState({
    medias: {},
    alunosAcimaMedia: [],
    alunosFrequenciaBaixa: [],
  });

  useEffect(() => {
    const fetchMedias = async () => {
      try {
        const response = await fetch('http://localhost:3001/medias-gerais');
        const data = await response.json();

        if (data.medias && data.alunosAcimaMedia && data.alunosFrequenciaBaixa) {
          setMedias(data);
        } else {
          console.error("Dados não encontrados ou mal estruturados", data);
        }
      } catch (error) {
        console.error('Erro ao carregar as médias', error);
        alert('Erro ao carregar as médias.');
      }
    };

    fetchMedias();
  }, []);

  
  if (!medias.medias || !medias.alunosAcimaMedia || !medias.alunosFrequenciaBaixa) {
    return <div>Carregando...</div>;
  }

  return (
    <Container>
      <Titulo>Médias da Turma</Titulo>

      <Lista>
        <h3>Média por Disciplina:</h3>
        {Object.entries(medias.medias).map(([disciplina, media]) => (
          <div key={disciplina}>
            <strong>{disciplina}: </strong>
            <span>{media !== undefined ? parseFloat(media).toFixed(2) : 'Não disponível'}</span>
          </div>
        ))}
      </Lista>

      <Lista>
        <h3>Alunos Acima da Média:</h3>
        {medias.alunosAcimaMedia.length > 0 ? (
          medias.alunosAcimaMedia.map((aluno, index) => (
            <div key={index}>
              <strong>{aluno.nome}</strong>
              <div>
                <span>Nota Média: {aluno.media}</span>             
              </div>
            </div>
          ))
        ) : (
          <p>Nenhum aluno acima da média encontrado.</p>
        )}
      </Lista>

      <Lista>
        <h3>Alunos com Frequência Baixa:</h3>
        {medias.alunosFrequenciaBaixa.length > 0 ? (
          medias.alunosFrequenciaBaixa.map((aluno, index) => (
            <div key={index}>
              <strong>{aluno.nome}</strong>
              <div>          
                <span>Frequência: {aluno.frequencia}%</span>
                <div>
                  {aluno.acimaDaMedia && <span>Acima da Média</span>}
                  {aluno.frequenciaBaixa && <span>Frequência Baixa</span>}
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>Nenhum aluno com frequência baixa encontrado.</p>
        )}
      </Lista>
    </Container>
  );
}
