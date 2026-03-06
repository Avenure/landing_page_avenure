# Deploy na Cloudflare Pages

## Pré-requisitos

1. **Conta Cloudflare** com o domínio avenure.com configurado
2. **Nameservers** já propagados (aguarde até 24h se ainda estiver em propagação)

## Passo a passo

### 1. Instalar dependências

```bash
npm install
```

### 2. Autenticar no Cloudflare

```bash
npx wrangler login
```

Isso abrirá o navegador para você fazer login na sua conta Cloudflare.

### 3. Fazer o deploy

```bash
npm run deploy
```

Ou manualmente:

```bash
npm run build
npx wrangler pages deploy dist --project-name=avenure
```

### 4. Primeira vez: criar o projeto

Na primeira execução, o Wrangler pode pedir para criar o projeto. Confirme com `y` (yes).

### 5. Conectar ao domínio avenure.com

Após o deploy:

1. Acesse o [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Vá em **Pages** → **avenure**
3. Clique em **Custom domains**
4. Adicione **avenure.com** e **www.avenure.com**

O Cloudflare vai configurar automaticamente o DNS e o SSL.

## Variáveis de ambiente (opcional)

Se precisar de variáveis no build, crie `.dev.vars` para desenvolvimento local e configure no dashboard da Cloudflare para produção.

## Build local

Para testar o build antes de fazer deploy:

```bash
npm run build
npm run preview
```
