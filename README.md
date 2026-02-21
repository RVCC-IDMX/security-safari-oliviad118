# Quick Poll

![Big Five](https://img.shields.io/badge/🏆_Big_Five-Complete!-gold)
![Dependencies](https://img.shields.io/badge/✓_Dependencies-Fixed-228B22)
![Secrets](https://img.shields.io/badge/✓_Secrets-Removed-228B22)
![Git History](https://img.shields.io/badge/✓_Git_History-Cleaned-228B22)
![XSS](https://img.shields.io/badge/✓_XSS-Patched-228B22)
![Code Injection](https://img.shields.io/badge/✓_eval()-Secured-228B22)

A modern, secure web application for conducting quick polls and performing mathematical calculations. Built with security best practices and a clean, responsive design.

## Features

- **Interactive polling system** - Collect user responses with a clean, accessible form
- **Mathematical calculator** - Safe expression evaluation with input sanitization  
- **Responsive design** - Optimized for desktop and mobile using Tailwind CSS
- **Security hardened** - Protection against XSS, code injection, and data exposure
- **Environment-based configuration** - Secure API key management

## Quick start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The application will be available at `http://localhost:5173/`

## Tech stack

- **Frontend:** Vanilla JavaScript (ES6+)
- **Build tool:** Vite 5.4.21
- **Styling:** Tailwind CSS v3 with PostCSS
- **Development:** Hot module replacement, fast refresh
- **Security:** Input sanitization, XSS protection, secure configurations

## Security features

This application has been security audited and hardened against common web vulnerabilities:

- ✅ **Dependency security** - All packages updated to latest secure versions
- ✅ **Secret management** - Environment variables for sensitive configuration  
- ✅ **XSS protection** - Safe DOM manipulation preventing script injection
- ✅ **Code injection prevention** - Secure mathematical expression evaluation
- ✅ **Git security** - Clean commit history with proper secret handling

## Configuration

Copy `.env.example` to `.env` and configure your environment variables:

```bash
cp .env.example .env
```

Required environment variables:
- `VITE_API_KEY` - API key for external service integration
- `VITE_API_URL` - Base URL for API endpoints

## Development

This project follows modern web development best practices:

```bash
# Run development server with hot reload
npm run dev

# Type checking and linting
npm run build

# Security audit
npm audit
```

## License

MIT License - Cynthia Teeters
