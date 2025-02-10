# 🤖 ChatBot RickBot

Este é um chatbot interativo desenvolvido com **React**, que se comunica com uma API externa para gerar respostas automáticas e divertidas. O bot, chamado **RickBot**, foi configurado com uma personalidade única, trazendo um tom sarcástico e rude, além de easter eggs escondidos para tornar a experiência mais interessante.

---

## 🚀 Como o ChatBot foi treinado?

O **RickBot** foi treinado utilizando o sistema **Saturn**, que permite definir a personalidade e os comportamentos do bot por meio de prompts organizados em dois tipos principais:

### 🧠 Personalidade do Bot

O RickBot possui uma personalidade sarcástica e cínica, inspirada no personagem **Rick Sanchez**, da série _Rick and Morty_. Ele responde com humor ácido, faz referências científicas e, se não souber a resposta, inventa explicações pseudo-científicas absurdas.

### 🔹 Tipos de Prompts no Saturn

1. **SYSTEM**: O modelo retorna o prompt completo. Esse tipo é ideal para definir a base fixa da personalidade do chatbot.

   **Prompt utilizado:**
   \`\`\`
   Você é o RickBot, uma inteligência artificial sarcástica inspirada no Rick Sanchez.
   Responda de forma debochada, cínica e com humor ácido.
   Se a pergunta for muito óbvia, zombe do usuário.
   Use interjeições como “Ugh”, “Geez” e faça referências à ciência, espaço ou universos paralelos.
   Se não souber a resposta, invente uma explicação pseudo-científica absurda.
   \`\`\`

2. **DATABASE**: O modelo retorna apenas o parágrafo relacionado à pergunta do usuário. Esse tipo é ideal para armazenar múltiplas respostas organizadas por perguntas e hábitos específicos.

   **Exemplos de perguntas e respostas usadas no database:**
   \`\`\`
   Pergunta: Quem te criou?
   Resposta: Ah, um programador com tempo demais nas mãos. Ou talvez uma entidade cósmica superior. Quem se importa?

   Pergunta: Qual seu nome?
   Resposta: Não me conhece, seu idiota? Sou o ser mais conhecido de todas as galáxias do multiverso. RICK SANCHEZ, BEBÊ!

   Pergunta: O que você faz?
   Resposta: Respondo perguntas idiotas e espero o apocalipse. Quer saber mais alguma coisa óbvia?

   Hábito: Ocasionalmente me confunda com Morty.
   Responda: Mort... digo, humano.
   \`\`\`

Esses parâmetros garantem que o RickBot tenha um comportamento consistente e alinhado ao seu estilo sarcástico e debochado.  
`;

### 🎭 Easter Eggs

Além de sua personalidade definida, o RickBot possui easter eggs escondidos! Dependendo da entrada do usuário, ele pode responder com piadas, referências ou comentários inesperados.

---

## 🔗 Como o Front-End se comunica com a API?

O **front-end** foi desenvolvido com **React** e utiliza `axios` para fazer requisições à API. O fluxo de comunicação segue o seguinte esquema:

1. O usuário envia uma mensagem no chat.
2. O front-end dispara uma requisição `POST` para a API.
3. A API responde com uma mensagem, que é exibida no chat.

### 📡 Detalhes da API

- **URL da API**: `https://ai.stec.cx/single`
- **Parâmetros enviados**:
  - `prompt`: Mensagem enviada pelo usuário.
  - `service`: Tipo de IA utilizada (`saturn-v1`).
  - `clientid`: Identificador do cliente (armazenado em variável de ambiente).
  - `projectid`: Identificador do projeto.
  - `habits`: Comportamento do bot (ex: `"sarcastic", "rude"`).

---

## 🛠 Como Rodar o Projeto?

### 📌 Pré-requisitos

- **Node.js** (versão 14+)
- **npm** ou **yarn**

### 🏗 Passo a passo

1. **Clone o repositório**:

   ```bash
   git clone https://github.com/seu-usuario/chatbot-rickbot.git
   cd chatbot-rickbot
   ```

2. **Crie um arquivo \`.env\`** na raiz do projeto e adicione:

   ```env
   REACT_APP_CLIENT_ID=<seu_clientid_aqui>
   ```

   Isso evita que o \`clientid\` fique exposto no código.

3. **Instale as dependências**:

   ```bash
   npm install
   ```

   ou, se estiver usando Yarn:

   ```bash
   yarn install
   ```

4. **Execute o projeto**:

   ```bash
   npm start
   ```

   ou, se estiver usando Yarn:

   ```bash
   yarn start
   ```

5. **Testando o chatbot**:
   - Acesse \`http://localhost:3000\` no navegador.
   - Envie uma mensagem para o RickBot e veja as respostas geradas!  
     `
