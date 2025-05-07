import React, { useState } from 'react';
import { Container, Header, Title, Nav, NavItem, Content } from './styles';
import CadastrarAluno from '../FormCadastroAluno';
import ListaAlunos from '../ListaAlunos';
import Medias from '../MediasTurma';

export default function Home() {
  const [paginaAtual, setPaginaAtual] = useState('home');

  const renderPagina = () => {
    switch (paginaAtual) {
      case 'cadastrar':
        return <CadastrarAluno />;
      case 'lista':
        return <ListaAlunos />;
      case 'medias':
        return <Medias />;
      default:
        return <p style={{ textAlign: 'center', fontSize: '50px' }}>Bem-vindo ao sistema de notas e frequência!</p>;
    }
  };

  return (
    <Container>
      <Header>
        <Title>Sistema de nota e frequência</Title>
        <Nav>
          <NavItem onClick={() => setPaginaAtual('home')}>Home</NavItem>
          <NavItem onClick={() => setPaginaAtual('cadastrar')}>Cadastrar alunos</NavItem>
          <NavItem onClick={() => setPaginaAtual('lista')}>Lista de alunos</NavItem>
          <NavItem onClick={() => setPaginaAtual('medias')}>Médias</NavItem>
        </Nav>
      </Header>
      <Content>
        {renderPagina()}
      </Content>
    </Container>
  );
}
