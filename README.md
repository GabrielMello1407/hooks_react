# React Hooks - Guia de Utilização
Este projeto tem como objetivo demonstrar o uso de cinco dos hooks mais populares no React: useState, useEffect, useRef, useReducer e useContext. A seguir, você encontrará uma explicação sobre o que são e como funcionam esses hooks.

Índice
useState
useEffect
useRef
useReducer
useContext
## Como Executar o Projeto
### useState
O useState é um dos hooks mais básicos e mais utilizados no React. Ele permite adicionar um estado (variáveis que controlam os dados do seu componente) em componentes funcionais. Com o useState, você pode definir o valor inicial de uma variável de estado e criar uma função para atualizá-la.

Esse hook retorna um valor e uma função de atualização. O valor é o estado atual, e a função é usada para alterá-lo. Quando o estado é alterado, o componente é re-renderizado, refletindo as mudanças.

Exemplo prático:
Você pode usá-lo para criar uma variável que conta cliques em um botão, ou para armazenar informações inseridas pelo usuário em um formulário.

### useEffect
O useEffect é um hook que permite realizar efeitos colaterais em componentes funcionais. Efeitos colaterais são tarefas que acontecem fora do fluxo principal de renderização do React, como chamadas a APIs, assinaturas de eventos, manipulação de timers, etc.

Com o useEffect, você pode controlar quando esses efeitos devem ser executados, como por exemplo, depois de uma renderização ou quando um valor específico mudar.

Exemplo prático:
Você pode usar o useEffect para buscar dados de uma API assim que o componente for montado ou quando um estado específico for alterado.

### useRef
O useRef permite que você crie uma referência mutável a um valor ou a um elemento DOM. Ele pode ser usado para armazenar dados que não causam uma re-renderização quando alterados.

Embora o useRef seja comumente usado para acessar diretamente elementos do DOM, como inputs ou botões, também pode ser útil para armazenar valores temporários ou persistentes durante o ciclo de vida do componente.

Exemplo prático:
Você pode usar o useRef para manter uma referência a um input, para que você possa acessar e modificar suas propriedades (como dar foco) sem causar uma re-renderização do componente.

### useReducer
O useReducer é uma alternativa ao useState quando se trata de gestão de estados mais complexos. Ao invés de simplesmente armazenar um valor, o useReducer permite que você defina uma função redutora (um tipo de função que recebe um estado e uma ação e retorna um novo estado).

Esse hook é útil quando o estado é um objeto ou precisa ser modificado por várias ações diferentes. Ele oferece mais controle sobre a lógica de como o estado deve ser atualizado.

Exemplo prático:
Você pode usar o useReducer para gerenciar o estado de um formulário com múltiplos campos, ou até mesmo controlar o estado de uma aplicação com múltiplos tipos de interação.

### useContext
O useContext é utilizado para compartilhar dados entre componentes sem precisar passar as props manualmente. Ele permite que você acesse o valor de um contexto em qualquer componente dentro da árvore de componentes, facilitando o compartilhamento de informações como temas, configurações ou estado global.

Você cria um Contexto com o createContext, e então usa o useContext para acessar e consumir o valor desse contexto em qualquer componente filho.

Exemplo prático:
Você pode usar o useContext para fornecer e consumir um tema global em toda a sua aplicação, sem precisar passar a informação de componente para componente.

# Como Executar o Projeto
Para rodar este projeto localmente, basta seguir os seguintes passos:

Clone o repositório: Baixe o código-fonte para o seu computador.

Instale as dependências: Navegue até o diretório do projeto e execute o comando para instalar as dependências:

npm install
Execute o projeto: Inicie o servidor de desenvolvimento:

npm start
O projeto será executado em http://localhost:5173.
