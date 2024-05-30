FROM node:20-alpine

WORKDIR /app

COPY package.json .

RUN npm install -g pnpm

COPY . .

EXPOSE 3000

CMD ["pnpm", "vercel-build"]