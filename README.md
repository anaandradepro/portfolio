# Portfolio de Ana Luiza Andrade

Template completo de landing page com design premium, Next.js, Tailwind CSS v4, Prisma (NextAuth/Stripe fields ready), Design System com tokens gerenciáveis e Storybook (opcional).

## Tecnologias

- **Framework:** Next.js 15 (App Router, Turbopack)
- **Styling:** Tailwind CSS v4
- **Database:** Prisma ORM (+ PostgreSQL no Neon.tech)
- **Design System:** Tokens em `design-system/tokens.ts` (Theme Wired)
- **Theme:** Dark / Light mode (via `next-themes`)

## Como rodar localmente

1. Clone o repositório e instale as dependências:
   ```bash
   npm install
   ```

2. Configure as variáveis de ambiente:
   Copie `.env.example` para `.env` e adicione a sua `DATABASE_URL` do banco Neon (gratuito).
   ```bash
   cp .env.example .env
   ```

3. (Opcional) Suba o esquema no banco de dados:
   ```bash
   npx prisma db push
   ```

4. Como o Design System é "Wired", gere as variáveis CSS a partir dos tokens:
   ```bash
   npm run tokens
   ```

5. Rode o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
   Acesse http://localhost:3000 para visualizar o projeto.

## Tokens e Design System (SSOT)

Os tokens de design ficam em `design-system/tokens.ts`. Se precisar alterar as cores:
1. Edite `tokens.ts`.
2. Rode `npm run tokens`.
3. O `globals.css` será atualizado automaticamente com as novas variáveis mantendo assim tudo centralizado.
