type PaginationMeta = {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
};

export class ApiResponse<T = unknown> {
  success: boolean;
  message: string;
  data: T | undefined;
  meta?: PaginationMeta;

  constructor(params: {
    success: boolean;
    message?: string;
    data?: T;
    meta?: PaginationMeta;
  }) {
    this.success = params.success;
    this.message = params.message ?? 'Success';
    this.data = params.data;
    if (params.meta !== undefined) {
      this.meta = params.meta;
    }
  }

  static success<T>(data: T, message = 'Success') {
    return new ApiResponse<T>({
      success: true,
      message,
      data,
    });
  }

  static paginated<T>(data: T, meta: PaginationMeta, message = 'Fetched successfully') {
    return new ApiResponse<T>({
      success: true,
      message,
      data,
      meta,
    });
  }

  static failure(message = 'Something went wrong') {
    return new ApiResponse({
      success: false,
      message,
    });
  }
}
