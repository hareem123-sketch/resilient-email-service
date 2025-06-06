# 📧 Resilient Email Service

A robust, mock email service built with TypeScript. It includes retry logic, fallback providers, rate limiting, idempotency, queue handling, and a circuit breaker pattern.

---

## ✅ Features

- Retry logic with exponential backoff
- Fallback to backup email provider
- Idempotency (using `idempotencyKey`)
- Basic rate limiting
- Queue system for overflow
- Circuit breaker pattern for unstable providers
- Logging and status tracking
- Unit tests with Jest

---

## 🏗 Assumptions

- You are using **mock email providers** (`MockProviderA` and `MockProviderB`)
- Providers fail randomly to simulate real-world instability
- Email uniqueness is tracked using an `idempotencyKey`
- No real email service is used; this is for architecture & logic simulation
- Rate limiting is applied globally (5 emails per 10 seconds)

---

## 🚀 Getting Started

### 🔧 Prerequisites

- Node.js (v16+ recommended)
- npm

### 📦 Install Dependencies

```bash
npm install
