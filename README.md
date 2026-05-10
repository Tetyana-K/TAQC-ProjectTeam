# Playwright + TypeScript Test Automation Framework

This repository is a test automation framework built using **Playwright** and **TypeScript**.

---

## Project Description

This project is a basic setup for UI automated testing using:

- Playwright
- TypeScript
- dotenv configuration
- Page Object Model structure preparation

The framework includes prepared folders for pages, components, fixtures, utilities, and environment configuration.

---

## 📌 Requirements

Before starting, make sure the following tools are installed:

- Node.js (LTS version recommended)
- npm

Playwright browsers will be installed during project setup.

## Installation

### 1. Clone the repository and go to the project folder

```bash
git clone https://github.com/Tetyana-K/TAQC-ProjectTeam.git
cd TAQC-ProjectTeam
```

### 2. Install dependencies

```bash
npm install
```

### 3. Install Playwright browsers

```bash
npx playwright install
```

## ⚙️ Environment Setup

Create `.env` file based on `.env.example`:

```bash
cp .env.example .env
```

Or create `.env` manually and add required variables.

## ▶️Running Tests

### Run all tests

```bash
npx playwright test
```

### Run tests in headed mode (visible browser)

```bash
npx playwright test --headed
```

### Run a specific test file

```bash
npx playwright test tests/example.spec.ts
```

### Run tests in debug mode

```bash
npx playwright test --debug
```

### Test Reports

After test execution, open the HTML report:

```bash
npx playwright show-report
```

## ⚙️ Environment Configuration

Project uses .env file for configuration.

Example:

```
BASE_URL=https://example.com
HEADLESS=true
RETRIES=0
TIMEOUT=30000
```

## Project Structure

```
TAQC-ProjectTeam/
│
├── tests/ # Test files
├── pages/ # Page Object base structure
├── components/ # Reusable UI components
├── fixtures/ # Test fixtures
├── utils/ # Helper utilities
│ └── env.ts
│
├── .env
├── .env.example
├── playwright.config.ts
├── package.json
└── README.md
```

## 🛠 Technologies

- TypeScript
- Playwright
- Node.js
- dotenv
