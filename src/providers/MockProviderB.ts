import { EmailRequest, EmailResponse } from "../types/EmailTypes";
import { EmailProvider } from "./EmailProvider";

export class MockProviderB implements EmailProvider {
  async sendEmail(email: EmailRequest): Promise<EmailResponse> {
    return {
      success: false,
      provider: "MockProviderB",
      message: "Simulated failure from Provider B"
    };
  }
}
