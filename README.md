# Configuração do Projeto Employ

Este documento explica como configurar e rodar o projeto **Employ** localmente, incluindo instruções para desenvolvedores utilizarem o Docker.

---

## Requisitos para Rodar o Projeto

Antes de iniciar, certifique-se de que você possui os seguintes requisitos instalados:

1. **Node.js** (versão 18 ou superior):
   - [Instalar Node.js](https://nodejs.org/)

2. **Gerenciador de pacotes** (NPM ou Yarn):
   - O NPM vem junto com o Node.js.

3. **Docker** (opcional para ambiente containerizado):
   - [Instalar Docker](https://docs.docker.com/get-docker/)

4. **Git** (para clonar o repositório):
   - [Instalar Git](https://git-scm.com/)

---

## Passos para Configuração Local

### 1. Clonar o Repositório

Clone o repositório para sua máquina local:

```bash
git clone https://github.com/vitorcastilho/employ.git
```

Entre na pasta do projeto:

```bash
cd employ
```

### 2. Instalar Dependências

Instale as dependências do projeto usando o NPM:

```bash
npm install
```

Se preferir usar o Yarn:

```bash
yarn install
```

### 3. Rodar o Projeto

Inicie o ambiente de desenvolvimento:

```bash
npm run dev
```

O servidor estará rodando em: [http://localhost:3000](http://localhost:3000)

---

## Executando com Docker

Caso prefira rodar o projeto utilizando Docker, siga os passos abaixo:

### 1. Construir a Imagem Docker

Certifique-se de estar na raiz do projeto e execute o seguinte comando para construir a imagem Docker:

```bash
docker build -t employ-dev .
```

### 2. Rodar o Container

Depois de construir a imagem, inicie o container com o comando:

```bash
docker run -p 3000:3000 -v $(pwd):/app -v /app/node_modules employ-dev
```

O projeto estará acessível em: [http://localhost:3000](http://localhost:3000)

---

## Scripts Disponíveis

Aqui estão os principais scripts definidos no `package.json`:

- **`npm run dev`**: Inicia o ambiente de desenvolvimento.
- **`npm run build`**: Realiza o build para produção.
- **`npm run start`**: Inicia o servidor em modo de produção (após o build).
- **`npm run lint`**: Verifica problemas de lint no código.

---

## Estrutura do Projeto

- **`/src`**: Contém o código-fonte do projeto.
  - **`/app`**: Páginas do Next.js.
  - **`/components`**: Componentes reutilizáveis.
  - **`/styles`**: Arquivos de estilo (CSS, SASS, etc.).
- **`/public`**: Arquivos estáticos acessíveis diretamente (imagens, ícones, etc.).
- **`package.json`**: Configurações e dependências do projeto.

---

## Dependências Principais

As principais dependências do projeto incluem:

- [React](https://reactjs.org/)
- [Next.js](https://nextjs.org/)

Verifique todas as dependências em `package.json` para mais detalhes.

---

## Dicas para Desenvolvimento

1. Use um editor de texto como o [VS Code](https://code.visualstudio.com/).
2. Instale as extensões recomendadas:
   - ESLint
   - Prettier
3. Verifique erros de lint antes de commitar:

```bash
npm run lint
```

4. Sempre teste suas alterações localmente antes de criar um pull request.

---

Se encontrar problemas ou tiver dúvidas, consulte a documentação oficial do Next.js ou entre em contato!

