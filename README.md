# Hibiscus Property Care

A React-based gardening website with a simple booking form.

## Features

- Home page introducing gardening services
- About section
- Booking form (EmailJS integration)

## Running Locally

```bash
npm install
npm start
```

## Deploying with GitHub Pages

1. Install gh-pages:
   ```
   npm install --save gh-pages
   ```
2. Add these scripts to your `package.json`:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d build"
   ```
3. Run `npm run deploy`.

## Connecting Your GoDaddy Domain

1. Go to your GoDaddy dashboard > My Products.
2. Click "Manage" for your domain.
3. Select "DNS" > "Add" or "Edit" your A record.
4. Point it to GitHub Pages:
   - If using `yourusername.github.io`, set a CNAME record to `yourusername.github.io`.
   - Or use GoDaddy forwarding to `https://yourusername.github.io/hibiscus-property-care`

**Full steps:** [GitHub Docs - Custom Domain](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)

## Setting Up Form Email (EmailJS)

1. Go to [EmailJS](https://www.emailjs.com/) and sign up.
2. Create a new email service and email template.
3. Get your User ID, Service ID, and Template ID.
4. Add the IDs to `BookingForm.js`.

---
