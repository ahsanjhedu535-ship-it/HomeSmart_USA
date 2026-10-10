# HomeSmart USA

A responsive Next.js App Router website starter for US homeowners, covering solar energy, home improvement, and smart home technology.

## Included
- Responsive homepage and category pages
- Three individual long-form article pages
- About, Contact, and Privacy Policy pages
- Contact form API route with validation, basic honeypot spam trap, and Resend email integration
- SEO metadata on the homepage, categories, and article pages

## Requirements
- Node.js 18.17+ (Node.js 20 LTS recommended)
- A Resend account for contact form delivery

## Run locally
1. Extract the ZIP.
2. Open a terminal in the `homesmart-usa` folder.
3. Run `npm install`.
4. Copy `.env.example` to `.env.local`.
5. Fill in the environment variables described below.
6. Run `npm run dev` and open `http://localhost:3000`.

## Contact form email setup
The recipient is configured as `homesmartusa.support@gmail.com` in `.env.example`.

1. Create an account at https://resend.com/.
2. Create an API key.
3. For production sending, add and verify a domain you control in Resend, then set `RESEND_FROM_EMAIL` to an address on that verified domain, e.g. `HomeSmart USA <contact@yourdomain.com>`.
4. Set `RESEND_API_KEY` to your key and `CONTACT_TO_EMAIL` to `homesmartusa.support@gmail.com`.
5. Keep these values in your hosting provider's environment-variable settings. Never commit `.env.local` or share your API key.

For initial testing, Resend's onboarding sender may only deliver to a recipient verified in your Resend account. A public website needs a verified sending domain and valid production configuration. The form deliberately reports an error rather than pretending a message was delivered when the email integration is missing or fails.

## Build check
Run `npm run build` before deployment.

## Deploy
Import the project into a Next.js-compatible host such as Vercel, then add the three environment variables from `.env.example` in the project's environment settings and redeploy. The contact form will not send email until the Resend configuration is complete.

## Content and image notes
The current article content is starter editorial content and should be reviewed and expanded before monetization. Image assets are loaded from Unsplash source URLs, so live image loading requires an internet connection and may depend on third-party availability. Replace with licensed, locally stored images for long-term reliability. Update `metadataBase` in `app/layout.js` to your real website domain before launch.

## Important
The included privacy policy is a general starter template, not legal advice. Update it to accurately describe analytics, advertising, cookies, and any other services actually enabled on the deployed website.
