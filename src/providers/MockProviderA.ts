import { EmailRequest, EmailResponse } from "../types/EmailTypes";
import { EmailProvider } from "./EmailProvider";

export class MockProviderA implements EmailProvider {
  async sendEmail(email: EmailRequest): Promise<EmailResponse> {
    return {
      success: true,
      provider: "MockProviderA",
      message: "Email sent successfully from Provider A"
    };
  }
}


export class MockProviderB implements EmailProvider {
  async sendEmail(email: EmailRequest): Promise<EmailResponse> {
    if (Math.random() < 0.5) throw new Error("MockProviderB failed!");
    return { success: true, provider: "ProviderB", message: "Sent successfully" };
  }
}
