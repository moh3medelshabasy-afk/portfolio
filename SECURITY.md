# Security Policy

## Supported Versions

Currently supported versions of this portfolio:

| Version | Supported          |
| ------- | ------------------ |
| 1.0.x   | :white_check_mark: |

## Reporting a Vulnerability

If you discover a security vulnerability in this project, please report it privately.

### How to Report

1. **Email**: Send details to moh3med.elshabasy@gmail.com
2. **Subject**: Use "Security Vulnerability Report - Portfolio"
3. **Include**:
   - Description of the vulnerability
   - Steps to reproduce
   - Potential impact
   - Suggested fix (if any)

### What to Expect

- **Response Time**: Within 48 hours
- **Updates**: Every 7 days until resolved
- **Resolution**: Security patches will be prioritized

### Please Don't

- Post vulnerability details publicly before a fix is available
- Exploit the vulnerability beyond what's necessary to demonstrate it

## Security Best Practices

This project follows these security practices:

### Code Security
- No sensitive data in code
- Input validation on all forms
- XSS prevention measures
- CSRF protection (if forms have backend)
- Secure external links (rel="noopener noreferrer")

### Dependencies
- Regular updates of all dependencies
- Use of CDN with integrity checks (when applicable)
- Minimal use of external libraries

### Deployment Security
- HTTPS enforcement
- Security headers configuration
- Regular security audits
- Content Security Policy (recommended)

### Data Privacy
- No personal data collection without consent
- Compliance with GDPR (if applicable)
- Clear privacy policy
- Secure handling of contact form submissions

## Acknowledgments

We appreciate security researchers and users who report vulnerabilities responsibly.

---

For general questions, please open an issue on GitHub.
