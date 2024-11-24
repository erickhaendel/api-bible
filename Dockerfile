# Use a imagem oficial do Node.js como base
FROM node:20

# Cria o diretório de trabalho dentro do container
WORKDIR /usr/src/app

# Copia os arquivos necessários
COPY package*.json ./
COPY tsconfig.json ./

# Instala as dependências
RUN npm install

# Copia o restante do projeto
COPY . .

# Expor a porta que a aplicação usa
EXPOSE 3000

# Comando para rodar a aplicação
CMD ["npm", "run", "dev"]
