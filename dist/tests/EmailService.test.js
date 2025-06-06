"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/tests/EmailService.test.ts
const EmailService_1 = require("../services/EmailService");
class MockProvider {
    sendEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            return {
                success: true,
                provider: "MockProvider",
                message: "Sent successfully"
            };
        });
    }
}
describe("EmailService", () => {
    it("should send email successfully", () => __awaiter(void 0, void 0, void 0, function* () {
        const service = new EmailService_1.EmailService([new MockProvider()]);
        const email = {
            to: "test@example.com",
            subject: "Test Subject",
            body: "Hello!",
            idempotencyKey: "abc123"
        };
        const result = yield service.send(email);
        expect(result.success).toBe(true);
    }));
});
