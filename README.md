# Processo seletivo DTI
Desenvolvido como parte do teste prático do processo seletivo da empresa DTI.
##  Sistema de Notas e Frequência
Este projeto é um sistema web para cadastro de alunos, registro de notas e controle de frequência. Ele permite ao professor inserir os dados dos alunos, visualizar médias individuais e da turma, além de identificar alunos com desempenho acima da média e frequência baixa.

## 📌 O problema
Carlos é um professor que precisa organizar as notas e a frequência de seus alunos. Cada aluno tem uma nota para cada uma das cinco disciplinas que Carlos ensina e um registro de presença para cada aula. Crie um sistema onde Carlos possa inserir as notas
de cada aluno (0 a 10) nas cinco disciplinas e a frequência de cada aluno em percentual (0 a 100%). O sistema deve calcular automaticamente a média das notas de cada aluno, a média da turma em cada disciplina e a frequência geral de cada aluno. Além disso, o sistema deve permitir que Carlos veja quais alunos têm uma média de notas acima da média da turma e quais alunos têm uma frequência abaixo de 75%, pois esses alunos precisam de atenção especial.

## 💻 Como Executar o Sistema
### 1. Clone o repositório
git clone https://github.com/iurytaveira/Processo-seletivo-DTI-.git
### 2. Instale as dependências
Backend (Node.js + Express):

cd backend

npm install

npm start

A API ficará disponível em: http://localhost:3001

Frontend (React + Vite + styled-components):

cd ProjetoProfessor

npm install

npm run dev

A aplicação será aberta em: http://localhost:5173

## 🚀 Funcionalidades
1) Cadastro de alunos com nome, notas por disciplina e frequência.

2) Cálculo automático da média individual e da turma.

3) Identificação de alunos com: Nota acima da média da turma e frequência abaixo de 75%.


## 📝 Premissas 
1) Cada aluno possui 5 disciplinas fixas (disciplina 1 a disciplina 5).

2) A frequência é representada como porcentagem (%).

3) As médias são calculadas com 2 casas decimais.

4) Os dados dos alunos são armazenados em memória (sem banco de dados).

## 🧠 Decisões do projeto 
1) Frontend com React + Vite para maior velocidade e experiência moderna.
2) styled-components para manter o CSS organizado e encapsulado por componente.
3) Backend com Node.js e Express por simplicidade e fácil integração com JSON.
4) Uso de estrutura modular para organização:
FormCadastroAluno, ListaAlunos, MediasTurma, etc.
5) Dados fictícios para fins de demonstração e teste.

## 💻 Tecnologias Utilizadas
1. React
2. Vite
3. Styled-components
4. Node.js
5. Express
6. JavaScript
 
## 🖼️ Imagens 
![image](https://github.com/user-attachments/assets/7a00ced8-c0d4-40ec-8a57-70d6392905d9)

![image](https://github.com/user-attachments/assets/fd83ccb1-47f2-4fbd-9be4-f926ef473bfc)

![image](https://github.com/user-attachments/assets/84ff90bc-7f51-4056-8981-eab8b9419935)

![image](https://github.com/user-attachments/assets/d8f6e37b-05f4-4a7b-845a-c7504b83ad38)


## 😄 Autor 
Desenvolvido por Iury Silva Taveira
