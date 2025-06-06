// src/tests/EmailService.test.ts
import { EmailService } from "../services/EmailService";
import { EmailProvider } from "../providers/EmailProvider";
import { EmailRequest, EmailResponse } from "../types/EmailTypes";

class MockProvider implements EmailProvider {
  async sendEmail(email: EmailRequest): Promise<EmailResponse> {
    return {
      success: true,
      provider: "MockProvider",
      message: "Sent successfully"
    };
  }
}

describe("EmailService", () => {
  it("should send email successfully", async () => {
    const service = new EmailService([new MockProvider()]);
    const email: EmailRequest = {
      to: "test@example.com",
      subject: "Test Subject",
      body: "Hello!",
      idempotencyKey: "abc123"
    };

    const result = await service.send(email);
    expect(result.success).toBe(true);
  });
});
