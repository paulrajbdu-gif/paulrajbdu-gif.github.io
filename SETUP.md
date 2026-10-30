# Dev Engineering website

Five static pages, with no build step or external dependencies. Files are intended for the repository root. Product illustrations were extracted from the supplied reference screenshots and saved as compact WebP images. Replace these with original product photos when available for improved resolution. All text and navigation are editable HTML.

## Publish on GitHub Pages
1. Open repository Settings → Pages.
2. Under Build and deployment choose Deploy from a branch.
3. Select main and /(root), then Save.
4. Set Custom domain to deveng.in and Save. The CNAME file also contains this domain.
5. Configure the GoDaddy DNS records below. Enable Enforce HTTPS when GitHub makes it available.

## GoDaddy DNS
Open My Products → deveng.in → DNS. Keep your email records (MX and TXT).
Replace conflicting website A/AAAA records at @ and the website CNAME at www, then configure:

| Type | Name | Value |
| --- | --- | --- |
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | paulrajbdu-gif.github.io |

Use the default TTL. DNS changes may take up to 24 hours. Do not configure domain forwarding. If DNS is managed by another nameserver provider, make these changes there instead.

Reference: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site

## Enquiries
The form validates name, email and requirements, then prepares a mailto draft or WhatsApp message. The visitor must send it. No server delivery or database is configured. Confirm sales@deveng.in exists and receives email; hosting the website does not create a mailbox.

## Content to confirm
The single-punch material limit conflicted in the supplied screenshots (20 mm in prose, 40 mm in the table). It is displayed as “Confirm with our team” pending confirmation. Contact details are transcribed from the supplied screenshots: +91 8110013555, sales@deveng.in, 12 Kumbakudi Industrial Estate, Tiruchirappalli, India.
