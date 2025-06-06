export class RateLimiter {
  private tokens: number;
  private interval: number;

  constructor(private max: number, perSeconds: number) {
    this.tokens = max;
    this.interval = perSeconds * 1000;
    setInterval(() => (this.tokens = this.max), this.interval);
  }

  consume(): boolean {
    if (this.tokens > 0) {
      this.tokens--;
      return true;
    }
    return false;
  }
}
