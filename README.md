# Projeto de Avaliação Samsung SDS - Interface de Usuário

Este é o repositório do frontend da aplicação desenvolvida como parte do processo seletivo para a posição na Samsung SDS.

## Descrição

Esta aplicação foi desenvolvida com o objetivo de gerenciar e visualizar documentos relacionados a finanças ou contabilidade em um contexto multi-moeda. Através dela, é possível visualizar documentos, suas moedas associadas, e as cotações de moedas baseadas em datas específicas.

## Funcionalidades Principais

- Visualização e listagem de documentos com seus valores convertidos em diferentes moedas.
- Filtragem de documentos com base em critérios específicos.
- Integração com uma API backend para recuperação de dados de documentos, moedas e cotações.

## Tecnologias Utilizadas

- Angular para o desenvolvimento do frontend.
- Angular Material para componentes da interface de usuário.
- Integração com uma API backend desenvolvida com Spring Boot.

## Deployment da Aplicação

A aplicação está atualmente hospedada e pode ser acessada online:

- **Frontend**: A interface de usuário foi hospedada através do Firebase e está disponível no seguinte link: https://samsung.thomasar.dev.
- **Backend**: A API do backend está sendo executada em uma instância AWS EC2 e pode ser acessada através do seguinte link: https://api.samsung.thomasar.dev/currencies.

Recomendamos que acessem os links fornecidos para ver a aplicação em ação em um ambiente de produção.

## Repositório Backend

O backend desta aplicação foi desenvolvido usando Spring Boot e está hospedado em um repositório separado. Você pode acessar e revisar o código do backend [Link para o repositório](https://github.com/thomasreichmann/samsung-evaluation-api).

## Instruções para Execução

1. Clone este repositório.
2. Navegue até a pasta raiz do projeto e instale as dependências com `npm install`.
3. Execute a aplicação com `ng serve -c development`.
4. Abra seu navegador e acesse `http://localhost:4200` para visualizar a aplicação.
