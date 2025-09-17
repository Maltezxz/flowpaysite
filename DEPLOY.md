# Como fazer Deploy na Netlify

## Opção 1: Deploy Manual (Mais Rápido)

1. **Acesse a Netlify**
   - Vá para [netlify.com](https://netlify.com)
   - Faça login na sua conta

2. **Faça o Upload dos Arquivos**
   - Clique em "Add new site" → "Deploy manually"
   - Arraste a pasta `dist` (que está dentro da pasta `project`) para a área de upload
   - Ou clique em "Browse to upload" e selecione a pasta `dist`

3. **Seu site estará online!**
   - A Netlify gerará uma URL automática
   - Você pode personalizar o nome do site nas configurações

## Opção 2: Deploy via Git (Recomendado para atualizações futuras)

1. **Crie um repositório no GitHub**
   - Faça upload de todo o projeto para o GitHub

2. **Conecte com a Netlify**
   - Na Netlify, clique em "Add new site" → "Import an existing project"
   - Conecte sua conta do GitHub
   - Selecione o repositório

3. **Configure o Deploy**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - A Netlify detectará automaticamente o arquivo `netlify.toml`

4. **Deploy Automático**
   - A cada push no GitHub, o site será atualizado automaticamente

## Arquivos Importantes

- `netlify.toml`: Configurações de build e deploy
- `dist/`: Pasta com os arquivos estáticos prontos para deploy
- `package.json`: Dependências e scripts do projeto

## Comandos Úteis

```bash
# Fazer build do projeto
npm run build

# Ver preview local
npm run preview

# Desenvolvimento local
npm run dev
```
