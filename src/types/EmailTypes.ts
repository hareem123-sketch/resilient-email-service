// src/types/EmailTypes.ts
export interface EmailRequest {
  to: string;
  subject: string;
  body: string;
  idempotencyKey?: string;
}

export interface EmailResponse {
  success: boolean;
  provider: string;
  message: string;
}
