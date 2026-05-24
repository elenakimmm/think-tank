# Think Tank Consulting

> Brand, Digital & Growth Systems

A modern web application for Think Tank Consulting, built with Next.js and deployed on Vercel.

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Visit `http://localhost:3000` in your browser.

## Deployment

This project is configured for Vercel deployment:

1. Push to GitHub
2. Connect repo to Vercel
3. Vercel auto-deploys on push to main branch

## Project Structure

```
├── app/
│   ├── layout.js        # Root layout
│   ├── page.js          # Home page
│   └── [slug]/
│       └── page.js      # Dynamic pages (works, about, contact, etc)
├── components/          # Shared React components
├── public/             # Static assets
├── styles/             # Global CSS
└── package.json
```

## Connected Domain

Your domain `getttc.com` is connected to this Vercel deployment.

DNS Configuration:
- Update your domain registrar's nameservers to Vercel's, or
- Create CNAME record pointing to your Vercel deployment URL
