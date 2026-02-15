# 🧪 Automação de Testes Web - Cypress

Este projeto é focado no desenvolvimento de **testes automatizados** de alta performance para a plataforma [Automation Practice](https://automationpratice.com.br/), um ambiente que simula cenários reais de e-commerce. A arquitetura foi desenhada para ser escalável, utilizando padrões de projeto e integração contínua.

## 🎯 Escopo dos Testes
Todos os cenários foram desenvolvidos para validar o **fluxo de sucesso** e a **obrigatoriedade de preenchimento dos campos**, assegurando que a aplicação não processe informações incompletas:

* **Login (Campos Obrigatórios):** Validação técnica do formulário de acesso, garantindo que o sistema exija os dados corretos antes da submissão.
* **Cadastro (Sucesso e Integridade):** Automação do registro de novos usuários utilizando dados dinâmicos, validando se todos os campos mandatórios foram processados com sucesso.
* **Realizar Pedido (Fluxo Completo):** Teste de ponta a ponta (End-to-End) que valida preenchimento do formulário de entrega e a seleção do método de pagamento, garantindo a conclusão do pedido.

---

## 🛠️ Tecnologias e Ferramentas
* **[Cypress](https://www.cypress.io/):** Framework principal para testes End-to-End.
* **Page Objects (PO):** Padrão de projeto utilizado para melhorar a manutenção e o reuso de código.
* **[Faker.js](https://github.com/faker-js/faker):** Geração de dados aleatórios e realistas para os testes de cadastro.
* **Cypress Cloud:** Dashboard para monitoramento, relatórios de execução e análise de logs/vídeos.
* **GitHub Actions:** Orquestração de CI/CD.

---

## 📂Estrutura do Projeto
```text
├── .github/
│   └── workflows/          # Configuração das Pipelines (CI/CD) do GitHub Actions
├── cypress/
│   ├── e2e/                # Arquivos de teste (.cy.js) divididos por funcionalidade
│   ├── support/            # Comandos personalizados e configurações globais (e2e.js)
│   └── fixtures/           # Massas de dados estáticas 
├── cypress.config.js       # Configurações globais do Cypress e integração com Cloud
├── package.json            # Dependências e scripts de execução
└── README.md
```


## ⚙️ Integração Contínua (CI/CD)
O projeto conta com duas pipelines automatizadas via **GitHub Actions**:

1.  **Pull Request Workflow:** Executada automaticamente a cada novo PR para garantir que alterações não quebrem as funcionalidades existentes.
2.  **Scheduled Workflow (Cron):** Execução agendada que ocorre de segunda a sexta-feira, a cada 30 minutos após a hora cheia (`30 * * * 1-5`), garantindo a saúde do ambiente de forma recorrente.

---

## 🚀 Como Executar o Projeto

### Pré-requisitos
* Node.js instalado (versão 14 ou superior)
* NPM ou Yarn

### Instalação
1. Clone o repositório:
   ```bash
   git clone [https://github.com/MicaeleMarilia/mc6-cypress-web.git](https://github.com/MicaeleMarilia/mc6-cypress-web.git)
    ```

2. Instale as dependências:
    ```bash
    npm install
    ```

### Execução
1. Interface Gráfica (Cypress Runner):
   ```bash
   npx cypress open
    ```

2. Modo Headless (Terminal):
    ```bash
    npx cypress run
    ```

## 📊 Relatórios
As execuções detalhadas, incluindo vídeos e screenshots de falhas, podem ser visualizadas através do Cypress Cloud integrado a este repositório.


## 🚀 QA Automation: 
#### Micaele Marilia 

🔗 LinkedIn: https://www.linkedin.com/in/micaele-marilia-4b665b117/