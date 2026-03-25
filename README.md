# GymWeb

Premium fitness landing page plus backend auth and dashboard built with:

- Next.js App Router
- Tailwind CSS
- Framer Motion
- Prisma + PostgreSQL
- JWT authentication (httpOnly cookie)

## Run Locally

1. Install dependencies:

```bash
npm install
```

2. Start local Prisma DB (if using Prisma local dev):

```bash
npx prisma dev
```

3. Sync schema:

```bash
npx prisma db push
```

4. Start app:

```bash
npm run dev
```

5. Open `http://localhost:3000`