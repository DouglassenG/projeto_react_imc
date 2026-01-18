# ⚖️ React Health - Calculadora de IMC

![Status](https://img.shields.io/badge/Status-Finalizado-green)
![React](https://img.shields.io/badge/Framework-React-61DAFB?logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Build_Tool-Vite-646CFF?logo=vite&logoColor=white)
![CSS3](https://img.shields.io/badge/Style-CSS_Modules-blue?logo=css3&logoColor=white)

> Uma Single Page Application (SPA) focada na saúde e bem-estar, demonstrando a capacidade de criar interfaces interativas e cálculos dinâmicos com React.js.

## 🎯 Motivação e Propósito

Aplicações de saúde exigem precisão e feedback imediato. O propósito deste projeto foi criar uma ferramenta de cálculo de **Índice de Massa Corporal (IMC)** que fosse além do simples input/output, oferecendo uma experiência de usuário fluida.

O projeto resolve o problema da necessidade de cálculos manuais para avaliação física. Ele implementa a lógica matemática do IMC ($peso / altura^2$) diretamente no Frontend, classificando o usuário instantaneamente (Abaixo do peso, Normal, Obesidade, etc.) sem a necessidade de requisições ao servidor.

## 🖼️ Demonstração Visual

https://projeto-react-imc-nine.vercel.app/

## 🛠️ Tecnologias Utilizadas

A stack tecnológica foi escolhida visando performance e modularidade:

* **[ReactJS](https://react.dev/):** Biblioteca core da interface.
    * **Hooks (`useState`):** Para armazenar e atualizar os dados de peso, altura e resultado.
    * **Event Handling:** Captura de eventos de input e submissão de formulário.
* **[Vite](https://vitejs.dev/):** Ferramenta de build de próxima geração para um ambiente de desenvolvimento rápido.
* **[CSS Modules](https://github.com/css-modules/css-modules):** Estratégia de estilização para evitar conflitos de classes globais, garantindo que o estilo de um componente não afete outro.
* **[JavaScript (ES6+)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript):** Lógica matemática e manipulação de strings.

## ✨ Funcionalidades

A aplicação conta com as seguintes *features*:

1.  **Cálculo em Tempo Real/On Submit:** Processamento imediato dos dados inseridos.
2.  **Tabela de Classificação:** Renderização de uma tabela informativa que destaca a linha correspondente ao resultado do usuário.
3.  **Validação de Dados:** Prevenção de erros matemáticos (como divisão por zero ou altura em formato incorreto).
4.  **Interface Responsiva:** Layout adaptável para uso em dispositivos móveis e desktops.

## 📂 Estrutura de Arquivos

O projeto segue a arquitetura de componentes funcionais, separando lógica, visualização e estilos:

```text
projeto_react_imc/
├── src/
│   ├── components/
│   │   ├── Formulario/      # Componente de Input de dados
│   │   │   ├── index.jsx
│   │   │   └── Formulario.module.css
│   │   ├── Tabela/          # Componente de Exibição de resultados
│   │   │   ├── index.jsx
│   │   │   └── Tabela.module.css
│   ├── App.jsx              # Componente Raiz (Lógica de Estado)
│   ├── main.jsx             # Ponto de entrada do React
│   └── global.css           # Reset CSS e estilos globais
├── public/                  # Assets estáticos
├── index.html               # Entry point
└── package.json             # Dependências e Scripts
