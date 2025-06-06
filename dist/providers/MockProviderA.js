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
exports.MockProviderB = exports.MockProviderA = void 0;
class MockProviderA {
    sendEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            return {
                success: true,
                provider: "MockProviderA",
                message: "Email sent successfully from Provider A"
            };
        });
    }
}
exports.MockProviderA = MockProviderA;
class MockProviderB {
    sendEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            if (Math.random() < 0.5)
                throw new Error("MockProviderB failed!");
            return { success: true, provider: "ProviderB", message: "Sent successfully" };
        });
    }
}
exports.MockProviderB = MockProviderB;
