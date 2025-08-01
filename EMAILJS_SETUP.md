# EmailJS Setup Instructions

To enable email functionality for your contact form, follow these steps:

## 1. Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## 2. Create Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose "Gmail" as your email service
4. Connect your Gmail account (pv123dinesh@gmail.com)
5. Note down the **Service ID** (e.g., "service_portfolio")

## 3. Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template content:

**Subject:** New Contact Form Message from {{from_name}}

**Content:**
```
Hello Dinesh,

You have received a new message from your portfolio contact form:

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This message was sent from your portfolio website.
Reply directly to: {{reply_to}}
```

4. Save the template and note down the **Template ID** (e.g., "template_contact")

## 4. Get Public Key
1. Go to "Account" > "General"
2. Find your **Public Key** (starts with something like "user_...")

## 5. Update the Code
Replace these values in `src/components/sections/ContactSection.tsx`:

```javascript
const serviceId = 'YOUR_SERVICE_ID'; // Replace with your Service ID
const templateId = 'YOUR_TEMPLATE_ID'; // Replace with your Template ID  
const publicKey = 'YOUR_PUBLIC_KEY'; // Replace with your Public Key
```

## 6. Test the Form
1. Fill out the contact form on your website
2. Check your Gmail inbox (pv123dinesh@gmail.com)
3. You should receive the message within a few seconds

## Troubleshooting
- Make sure all IDs are correct
- Check EmailJS dashboard for any error logs
- Verify your Gmail account is properly connected
- Check spam folder if emails don't appear in inbox

## Free Plan Limits
- 200 emails per month
- EmailJS branding in emails
- Upgrade to paid plan for more emails and remove branding

Your contact form will now send emails directly to pv123dinesh@gmail.com!