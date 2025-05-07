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

export const Lista = styled.div`
  margin: 15px 0;

  h3 {
    margin-bottom: 8px;
    font-size: 1.3rem;

    @media (max-width: 480px) {
      font-size: 1.1rem;
    }
  }

  ul {
    padding-left: 20px;
  }

  li {
    margin-bottom: 4px;
    font-size: 1rem;

    @media (max-width: 480px) {
      font-size: 0.9rem;
    }
  }

  div {
    margin-bottom: 10px;
    font-size: 1rem;

    @media (max-width: 480px) {
      font-size: 0.9rem;
    }
  }
`;
