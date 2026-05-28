# 🕌 Mosque Application

<div align="center">

[![Angular](https://img.shields.io/badge/Angular-18.2-DD0031?logo=angular&logoColor=white)](https://angular.io)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-7952B3?logo=bootstrap&logoColor=white)](https://getbootstrap.com)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

[**🚀 Live Demo**](https://mosque-orcin.vercel.app/) • [Report Bug](../../issues) • [Request Feature](../../issues)

</div>

---

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Quick Start](#quick-start)
- [Available Commands](#available-commands)
- [Project Structure](#project-structure)
- [Development](#development)
- [Build & Deployment](#build--deployment)
- [Testing](#testing)
- [Configuration](#configuration)
- [Further Help](#further-help)

---

## 📖 About

A modern, responsive mosque management web application built with **Angular 18** and **Ant Design**. The application provides a comprehensive platform for managing mosque services, prayer times, and community engagement with multi-language support and professional UI components.

**Live Demo:** [https://mosque-orcin.vercel.app/](https://mosque-orcin.vercel.app/)

---

## ✨ Features

- 🕐 **Prayer Time Management** - Display and manage prayer schedules
- 🌍 **Multi-Language Support** - Full internationalization (i18n) support with Bengali and English
- 📱 **Responsive Design** - Fully responsive UI that works on desktop, tablet, and mobile
- 📞 **Contact Management** - Integrated contact forms and messaging
- 💰 **Donation System** - Secure donation processing capabilities
- 📚 **Islamic Learning** - Discover Islam module for educational content
- 📊 **Modern UI Components** - Built with Ant Design and Bootstrap for professional appearance
- 📄 **PDF Generation** - Convert and download content as PDF
- ⚡ **Performance Optimized** - Fast loading and optimized Angular build
- 🔄 **Reactive Architecture** - Built with RxJS for reactive programming
- 🧪 **Fully Tested** - Unit tests with Karma and Jasmine

---

## 🛠 Tech Stack

| Category | Technology |
|----------|-------------|
| **Framework** | Angular 18.2 |
| **Language** | TypeScript 5.5 |
| **UI Library** | Ant Design (ng-zorro), Bootstrap 5.3 |
| **Styling** | SCSS |
| **Routing** | Angular Router |
| **Forms** | Angular Forms |
| **HTTP Client** | Angular Common HTTP |
| **Animations** | Angular Animations |
| **Internationalization** | ngx-translate |
| **PDF Export** | jsPDF, html2canvas |
| **Icons** | Ant Design Icons |
| **Reactive** | RxJS 7.8 |
| **Testing** | Karma, Jasmine |
| **Build Tool** | Angular CLI 18.2.21 |
| **Deployment** | Vercel |

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18+ or higher
- **npm** 9+ or higher
- **Angular CLI** 18.2.21 globally installed (optional)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd mosque-new
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Navigate to the application**
   ```
   http://localhost:4200/
   ```

The application will automatically reload whenever you modify any source files.

---

## 📝 Available Commands

| Command | Description |
|---------|-------------|
| `npm start` | Run development server at `http://localhost:4200/` |
| `npm run build` | Build project for production |
| `npm run watch` | Build project in watch mode (development) |
| `npm test` | Execute unit tests via Karma |
| `ng generate component <name>` | Generate a new component |
| `ng generate service <name>` | Generate a new service |
| `ng generate module <name>` | Generate a new module |
| `ng help` | Get help on Angular CLI commands |

---

## 🗂 Project Structure

```
mosque-new/
├── src/
│   ├── app/
│   │   ├── layouts/
│   │   │   ├── header-desktop/          # Desktop header component
│   │   │   ├── footer/                   # Footer component
│   │   │   └── nav-drawer/               # Navigation drawer
│   │   ├── modules/
│   │   │   ├── contact/                  # Contact management module
│   │   │   ├── discover-islam/           # Islamic learning module
│   │   │   ├── prayer-time-table/        # Prayer times module
│   │   │   └── mosque-landing/           # Landing page with components
│   │   ├── service/
│   │   │   ├── api/                      # API service calls
│   │   │   ├── common/                   # Common utilities
│   │   │   └── language/                 # Language/i18n services
│   │   ├── shared/
│   │   │   ├── shared.module.ts          # Shared module
│   │   │   └── interface/                # TypeScript interfaces
│   │   ├── app.component.*               # Root component
│   │   ├── app.module.ts                 # Root module
│   │   └── app-routing.module.ts         # Main routing
│   ├── assets/
│   │   ├── config/
│   │   │   └── config.json               # Application configuration
│   │   ├── css/                          # Global styles (SCSS)
│   │   ├── fonts/                        # Custom fonts
│   │   ├── i18n/
│   │   │   ├── en.json                   # English translations
│   │   │   └── bn.json                   # Bengali translations
│   │   ├── img/                          # Images and assets
│   │   └── json/                         # Static JSON data
│   ├── styles.scss                       # Global stylesheet
│   ├── index.html                        # Main HTML file
│   └── main.ts                           # Application entry point
├── angular.json                          # Angular CLI configuration
├── tsconfig.json                         # TypeScript configuration
├── package.json                          # Project dependencies
└── README.md                             # This file
```

---

## 💻 Development

### Development Server

Start the development server with automatic reload:

```bash
npm start
```

Navigate to `http://localhost:4200/`. The application will automatically reload if you change any source files.

### Code Generation

Generate new Angular components, services, and modules:

```bash
# Generate a new component
ng generate component component-name

# Generate other schematics
ng generate directive|pipe|service|class|guard|interface|enum|module
```

### Code Scaffolding

The project uses Angular CLI for code scaffolding. You can generate:
- Components
- Services
- Modules
- Directives
- Pipes
- Guards
- Classes
- Interfaces
- Enums

### Styling

The project uses **SCSS** for styling with the following structure:

```
assets/css/
├── abstracts/        # Variables, mixins, functions
├── base/             # Base element styles
├── components/       # Component-specific styles
├── layout/           # Layout styles
├── vendor/           # Third-party styles
└── main.scss         # Main stylesheet entry point
```

---

## 🔨 Build & Deployment

### Production Build

Build the project for production:

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory. The build is optimized for production with minification, tree-shaking, and code splitting.

### Deployment

The project is configured for **Vercel** deployment:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically build and deploy on each push to `main` branch

**Current Deployment:** [https://mosque-orcin.vercel.app/](https://mosque-orcin.vercel.app/)

---

## 🧪 Testing

### Unit Tests

Run unit tests via [Karma](https://karma-runner.github.io) and [Jasmine](https://jasmine.github.io):

```bash
npm test
```

### End-to-End Tests

To run end-to-end tests, you need to add a package that implements end-to-end testing capabilities:

```bash
ng e2e
```

### Test Coverage

Generate test coverage reports:

```bash
ng test --code-coverage
```

---

## ⚙️ Configuration

### Environment Configuration

Application configuration is stored in:

```
src/assets/config/config.json
```

### Internationalization (i18n)

The application supports multiple languages through ngx-translate:

- **English** - `src/assets/i18n/en.json`
- **Bengali** - `src/assets/i18n/bn.json`

To add a new language:

1. Create a new JSON file in `src/assets/i18n/`
2. Add translation keys following the existing structure
3. Update the language service to register the new language

### Angular Configuration

Angular build and serve configuration is in `angular.json`. Key settings:
- Source root: `src/`
- Build output: `dist/`
- Development server: Port 4200
- Development configuration: Development build with source maps

---

## 📚 Further Help

### Angular CLI Help

For more information on Angular CLI use:

```bash
ng help
```

Or visit the official documentation:

- [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli)
- [Angular Documentation](https://angular.io)
- [TypeScript Documentation](https://www.typescriptlang.org)

### Useful Resources

- [Ant Design Documentation](https://ng.ant.design/)
- [Bootstrap Documentation](https://getbootstrap.com/docs/)
- [RxJS Documentation](https://rxjs.dev/)
- [Angular Router Documentation](https://angular.io/guide/router)
- [ngx-translate Documentation](https://github.com/ngx-translate/core)

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

<div align="center">



[⬆ back to top](#-mosque-application)

</div>
