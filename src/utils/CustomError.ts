export class CustomError extends Error {
  code: string;
  public constructor(code: string, message?: string) {
    super(message);
    this.code = code;
  }

  public getCode() {
    return this.code;
  }
}
