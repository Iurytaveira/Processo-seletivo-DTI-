import styled from 'styled-components';

export const Container = styled.div`
  border: 2px solid black;
  min-height: 100vh;
`;

export const Header = styled.header`
  border-bottom: 2px solid black;
`;

export const Title = styled.h1`
  text-align: center;
  margin: 10px 0;
  font-size: 2rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  border-top: 2px solid black;
  border-bottom: 2px solid black;
`;

export const NavItem = styled.div`
  padding: 10px 20px;
  border-right: 2px solid black;
  cursor: pointer;

  &:last-child {
    border-right: none;
  }

  @media (max-width: 480px) {
    padding: 8px 12px;
    font-size: 0.9rem;
  }
`;

export const Content = styled.main`
  padding: 20px;

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;
