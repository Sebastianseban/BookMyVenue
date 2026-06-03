export class ApiError extends Error {
  public readonly statusCode: number;
  public readonly errors?: Array<{ field: string; message: string }>;
  public readonly context?: Record<string, unknown>;

  constructor(
    statusCode: number,
    message: string,
    errors?: Array<{ field: string; message: string }>,
    context?: Record<string, unknown>,
  ) {
    super(message);
    this.statusCode = statusCode;
    if (errors) {
      this.errors = errors;
    }
    if (context) {
      this.context = context;
    }

    Error.captureStackTrace(this, this.constructor);
  }
}
