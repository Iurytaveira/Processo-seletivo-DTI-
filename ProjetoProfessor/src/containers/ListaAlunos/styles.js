import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

export const Titulo = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  font-size: 1.8rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

export const Tabela = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: center;
  font-size: 1rem;

  th, td {
    border: 1px solid #333;
    padding: 8px;

    @media (max-width: 480px) {
      padding: 4px;
      font-size: 0.8rem;
    }
  }

  th {
    background-color: #f0f0f0;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;
