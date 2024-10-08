# Pokémon Frontend

Este projeto é a interface do usuário para uma aplicação de interação com Pokémons. Utiliza Next.js para o desenvolvimento do front-end, TypeScript como linguagem principal e Material UI para o design de componentes.

## Funcionalidades

- Exibe Pokémons da primeira geração obtidos a partir da PokeAPI.
- Permite capturar e liberar Pokémons.
- Mostra uma lista de Pokémons capturados.
- Integração com o backend para ações como captura e liberação.

## Requisitos

- Node.js >= 18.17.0
- npm ou yarn

## Instalação

1. **Clone o repositório:**

git clone https://github.com/larissabpaz/pokemon-frontend.git

2. **Instale as dependências:**

npm install ou yarn install

3. **Executando o Projeto**
Inicie o servidor de desenvolvimento:
npm run dev ou yarn dev

4. **Acesse o projeto em seu navegador:**

Abra seu navegador e vá para: http://localhost:{porta}.

## Scripts Disponíveis
npm run dev: Inicia o servidor de desenvolvimento.
npm run build: Compila o projeto para produção.
npm run start: Inicia o servidor de produção após a build.
npm run lint: Executa o linter para verificar erros no código.

## Tecnologias Utilizadas
Next.js: Framework React para renderização no lado do servidor e geração de páginas estáticas.
TypeScript: Superset de JavaScript que adiciona tipagem estática.
Material UI: Biblioteca de componentes React com design moderno e responsivo.
PokeAPI: API pública para obter dados dos Pokémons.

## Integração com o Backend
Este frontend se comunica com uma API desenvolvida em Nest.js para realizar operações como capturar e liberar Pokémons. O backend deve estar rodando para que essas operações funcionem corretamente.

## Endpoints do Backend
GET /pokemons/random: Retorna um Pokémon aleatório.
POST /pokemons/capture: Captura um Pokémon.
GET /pokemons/captured: Lista os Pokémons capturados.
DELETE /pokemons/release/:id: Libera um Pokémon capturado.

## Contribuição
Faça um fork do projeto.
Crie uma branch para sua feature: git checkout -b minha-feature.
Faça commit das suas alterações: git commit -m 'Adiciona minha feature'.
Envie sua branch: git push origin minha-feature.
Abra um Pull Request.

## Licença
Este projeto está licenciado sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.