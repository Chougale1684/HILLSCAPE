# HILLSCAPE Studios — full-stack starter

A production-oriented Next.js + TypeScript + Prisma/PostgreSQL foundation for HILLSCAPE.

## Stack
- Next.js App Router + React + TypeScript
- Tailwind CSS v4 (utility-ready; primary brand styling in `app/globals.css`)
- Prisma + PostgreSQL
- Auth.js Credentials provider + JWT sessions
- bcrypt password hashing
- Zod validation

## Local setup
1. Install Node.js 20+ and PostgreSQL.
2. Copy `.env.example` to `.env`.
3. Set `DATABASE_URL` and a strong `AUTH_SECRET`.
4. Run:

```bash
npm install
npx prisma generate
npx prisma db push
npm run db:seed
npm run dev
```

Open `http://localhost:3000`.

## Owner login
The seed creates the owner from `OWNER_EMAIL` / `OWNER_PASSWORD` in `.env`. Change the default password before deploying. Owner users have `role=OWNER` and are protected server-side as well as by middleware.

## Included
- Premium responsive public site: Home, About, Workshops, workshop detail, Goods, Contact
- Customer signup/login
- Password hashing; passwords never stored plaintext
- Customer dashboard with bookings, reviews, notifications and profile
- Owner dashboard with overview metrics
- Workshop create/delete + status and gallery schema
- Booking API and owner booking status management
- Review eligibility architecture (attended booking required, one review per customer/workshop)
- Posts and announcements CRUD
- Product and order architecture
- Customer CSV export
- Prisma relational schema for future checkout, Razorpay and cloud media
- SEO metadata, semantic structure and branded empty states

## Media / payments
For a production launch, connect Cloudinary/S3 for uploads and Razorpay for payment. The database and API shape are intentionally ready for those integrations. Never put API secrets in client code.

## Deployment
Deploy the Next.js app on Vercel or another Node-compatible host and use managed PostgreSQL (e.g. Neon/Supabase/Railway). Set all `.env` variables in the host. Run `prisma migrate deploy` as part of deployment after converting the prototype schema to migrations.
