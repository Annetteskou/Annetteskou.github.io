# EmailJS Opsætningsguide

## Hvad er EmailJS?

EmailJS er en gratis service der gør det muligt at sende emails direkte fra din hjemmeside uden at skulle have en backend server.

## Trin-for-trin opsætning:

### 1. Opret EmailJS konto

- Gå til [https://www.emailjs.com/](https://www.emailjs.com/)
- Klik "Sign Up" og opret en gratis konto
- Bekræft min email

### 2. Opret Email Service

- Gå til "Email Services" i dit dashboard
- Klik "Add New Service"
- Vælg min email provider (Gmail, Outlook, etc.)
- Følg instruktionerne for at forbinde min email

### 3. Opret Email Template

- Gå til "Email Templates" i dit dashboard
- Klik "Create New Template"
- Brug denne template:

```
Subject: Ny besked fra {{from_name}}

Hej Annette,

Du har modtaget en ny besked gennem din hjemmeside:

Navn: {{from_name}}
Email: {{from_email}}
Telefon: {{phone}}

Besked:
{{message}}

---
Sendt fra din portfolio hjemmeside
```

### 4. Hent mine nøgler

- Gå til "Account" → "General"
- Kopier min "Public Key"
- Gå til "Email Services" og kopier min "Service ID"
- Gå til "Email Templates" og kopier min "Template ID"

### 5. Opdater koden

I `src/pages/Contact.jsx`, erstat disse linjer:

```javascript
const serviceID = "YOUR_SERVICE_ID"; // Min EmailJS service ID
const templateID = "YOUR_TEMPLATE_ID"; // Min EmailJS template ID
const publicKey = "YOUR_PUBLIC_KEY"; // Min EmailJS public key
```

Med mine rigtige værdier:

```javascript
const serviceID = "service_xxxxxxx"; // Min rigtige service ID
const templateID = "template_xxxxxxx"; // Min rigtige template ID
const publicKey = "xxxxxxxxxxxxxxxx"; // Min rigtige public key
```
