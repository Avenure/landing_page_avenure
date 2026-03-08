# Deploy no GitHub Pages (avenure.github.io)

## Passo 1: Criar o repositório no GitHub

Para o site ficar em **https://avenure.github.io** (só o nome da empresa), crie um repositório com o nome exato:

```
avenure.github.io
```

1. Acesse https://github.com/organizations/Avenure/repositories/new
2. Nome do repositório: **avenure.github.io**
3. Deixe como **público**
4. **Não** marque "Add a README" (o projeto já existe)
5. Clique em **Create repository**

## Passo 2: Conectar e enviar o código

Se o projeto ainda não está conectado ao GitHub:

```bash
git remote add origin https://github.com/Avenure/avenure.github.io.git
git branch -M main
git push -u origin main
```

Se já está conectado a outro repositório (ex: landing_page_avenure), troque o remote:

```bash
git remote set-url origin https://github.com/Avenure/avenure.github.io.git
git push -u origin main
```

## Passo 3: Ativar o GitHub Pages

1. No repositório, vá em **Settings** → **Pages**
2. Em **Source**, escolha **GitHub Actions**

## Passo 4: Deploy automático

A cada `git push` na branch `main`, o workflow faz o deploy. O site ficará em:

**https://avenure.github.io**

---

### Se usar outro nome de repositório

Se o repositório for, por exemplo, `landing_page_avenure`, a URL será:

**https://avenure.github.io/landing_page_avenure/**

Nesse caso, ajuste o `base` no `vite.config.ts` para `'/landing_page_avenure/'`.
