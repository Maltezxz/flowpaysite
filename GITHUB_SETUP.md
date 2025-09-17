# Como Subir o Projeto para o GitHub

## Passo a Passo Completo

### 1. Criar Repositório no GitHub

1. **Acesse o GitHub:**
   - Vá para [github.com](https://github.com)
   - Faça login na sua conta

2. **Criar Novo Repositório:**
   - Clique no botão **"New"** ou **"+"** → **"New repository"**
   - Nome do repositório: `SiteFlowPay` (ou o nome que preferir)
   - Descrição: `Site de pagamentos SiteFlowPay - React + Vite`
   - Marque como **Public** (ou Private se preferir)
   - **NÃO** marque "Add a README file", "Add .gitignore" ou "Choose a license"
   - Clique em **"Create repository"**

### 2. Conectar o Repositório Local ao GitHub

Após criar o repositório no GitHub, você verá uma página com instruções. Use estes comandos:

```bash
# Adicionar o repositório remoto (substitua SEU_USUARIO pelo seu username do GitHub)
git remote add origin https://github.com/SEU_USUARIO/SiteFlowPay.git

# Renomear a branch principal para main (padrão atual do GitHub)
git branch -M main

# Fazer push para o GitHub
git push -u origin main
```

### 3. Comandos para Executar

Execute estes comandos no terminal (na pasta do projeto):

```bash
# Substitua SEU_USUARIO pelo seu username do GitHub
git remote add origin https://github.com/SEU_USUARIO/SiteFlowPay.git
git branch -M main
git push -u origin main
```

### 4. Verificar se Funcionou

- Acesse seu repositório no GitHub
- Você deve ver todos os arquivos do projeto
- O commit inicial deve aparecer no histórico

## Próximos Passos

Depois de subir para o GitHub, você pode:

1. **Fazer Deploy Automático na Netlify:**
   - Conectar o repositório GitHub com a Netlify
   - Deploy automático a cada push

2. **Atualizações Futuras:**
   ```bash
   git add .
   git commit -m "Descrição da alteração"
   git push
   ```

## Comandos Git Úteis

```bash
# Ver status dos arquivos
git status

# Ver histórico de commits
git log --oneline

# Ver repositórios remotos
git remote -v

# Fazer pull das alterações
git pull
```

## Troubleshooting

**Se der erro de autenticação:**
- Use um Personal Access Token em vez da senha
- Ou configure SSH keys

**Se der erro de branch:**
- Execute: `git branch -M main`
- Depois: `git push -u origin main`
