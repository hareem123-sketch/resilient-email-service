import { MockProviderA } from './providers/MockProviderA';
import { MockProviderB } from './providers/MockProviderB';
import { EmailService } from './services/EmailService';

const emailService = new EmailService([new MockProviderA(), new MockProviderB()]);

emailService.send({
  to: "user@example.com",
  subject: "Hello!",
  body: "This is a test email.",
  idempotencyKey: "unique-email-123",
}).then(console.log).catch(console.error);
