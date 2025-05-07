import React, { useState } from 'react';
import { Form, Input, Button } from './styles';

export default function FormCadastroAluno() {
  const [form, setForm] = useState({
    nome: '',
    nota1: '',
    nota2: '',
    nota3: '',
    nota4: '',
    nota5: '',
    frequencia: ''
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/alunos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });

      const data = await response.json();
      alert(data.message || 'Erro ao cadastrar aluno');

   
      setForm({
        nome: '',
        nota1: '',
        nota2: '',
        nota3: '',
        nota4: '',
        nota5: '',
        frequencia: ''
      });
    } catch (error) {
      alert('Erro de conexão com o servidor.');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        name="nome"
        placeholder="Nome"
        value={form.nome}
        onChange={handleChange}
        required
      />
      {[1, 2, 3, 4, 5].map(i => (
        <Input
          key={i}
          name={`nota${i}`}
          placeholder={`Nota ${i}`}
          type="number"
          min="0"
          max="10"
          step="0.1"
          value={form[`nota${i}`]}
          onChange={handleChange}
          required
        />
      ))}
      <Input
        name="frequencia"
        placeholder="Frequência (%)"
        type="number"
        min="0"
        max="100"
        value={form.frequencia}
        onChange={handleChange}
        required
      />
      <Button type="submit">Cadastrar</Button>
    </Form>
  );
}