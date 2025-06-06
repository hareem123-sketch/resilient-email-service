"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MockProviderA_1 = require("./providers/MockProviderA");
const MockProviderB_1 = require("./providers/MockProviderB");
const EmailService_1 = require("./services/EmailService");
const emailService = new EmailService_1.EmailService([new MockProviderA_1.MockProviderA(), new MockProviderB_1.MockProviderB()]);
emailService.send({
    to: "user@example.com",
    subject: "Hello!",
    body: "This is a test email.",
    idempotencyKey: "unique-email-123",
}).then(console.log).catch(console.error);
