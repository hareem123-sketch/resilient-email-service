// src/providers/EmailProvider.ts
import { EmailRequest, EmailResponse } from "../types/EmailTypes";

export { EmailRequest, EmailResponse }; // ✅ Make sure to export them
export interface EmailProvider {
  sendEmail(email: EmailRequest): Promise<EmailResponse>;
}
