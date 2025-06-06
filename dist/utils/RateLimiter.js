"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RateLimiter = void 0;
class RateLimiter {
    constructor(max, perSeconds) {
        this.max = max;
        this.tokens = max;
        this.interval = perSeconds * 1000;
        setInterval(() => (this.tokens = this.max), this.interval);
    }
    consume() {
        if (this.tokens > 0) {
            this.tokens--;
            return true;
        }
        return false;
    }
}
exports.RateLimiter = RateLimiter;
