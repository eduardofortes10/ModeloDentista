# Clínica Sorriso Prime

Landing page fictícia para uma clínica odontológica, criada como modelo profissional para portfólio freelancer. O projeto foca em confiança, agendamento rápido pelo WhatsApp, apresentação dos tratamentos e boa experiência em celulares, tablets e desktops.

## Tecnologias

- React
- Vite
- JavaScript
- Tailwind CSS
- Lucide React

## Como rodar localmente

```bash
npm install
npm run dev
```

Depois, acesse a URL exibida no terminal.

## Build de produção

```bash
npm run build
npm run preview
```

## Deploy na Vercel

1. Suba o projeto para um repositório no GitHub.
2. Acesse a Vercel e importe o repositório.
3. Mantenha o framework como Vite.
4. Use `npm run build` como comando de build.
5. Use `dist` como diretório de saída.

## Como alterar telefone, endereço e links

Os principais dados ficam em `src/data.js`:

- WhatsApp: altere `whatsappUrl`.
- Nome, endereço, horário, telefone e e-mail: altere `clinicInfo`.
- Links do menu: altere `navLinks`.
- Tratamentos, diferenciais, avaliações e FAQ: edite os arrays correspondentes.

Os botões de WhatsApp apontam para:

```txt
https://wa.me/5511999999999
```

## Observação

Este é um modelo fictício criado para portfólio freelancer. Ele não representa uma clínica real e não substitui orientações, avaliações ou informações fornecidas por profissionais de saúde.
