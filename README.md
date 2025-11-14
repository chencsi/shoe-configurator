# Shoe Configurator

A React-based shoe customization and ordering application.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Configure environment variables:
   - Copy `.env.example` to `.env`
   - Fill in your EmailJS credentials from [emailjs.com](https://www.emailjs.com/)
   - Set your recipient email address

3. Run development server:
```bash
npm run dev
```

## EmailJS Setup

1. Create account at https://www.emailjs.com/
2. Add your email service (Gmail, Outlook, etc.)
3. Create an email template with these variables:
   - `{{customer_name}}`
   - `{{customer_email}}`
   - `{{top_color}}`
   - `{{sole_color}}`
4. Copy Service ID, Template ID, and Public Key to `.env` file

## Environment Variables

See `.env.example` for required variables.