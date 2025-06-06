import { EmailProvider } from "../providers/EmailProvider";
import { EmailRequest } from "../types/EmailTypes";

export class EmailService {
  constructor(private providers: EmailProvider[]) {}

  async send(email: EmailRequest) {
    // your implementation here, e.g., pick providers, retry, fallback...
    return this.providers[0].sendEmail(email); // simple example
  }
}
