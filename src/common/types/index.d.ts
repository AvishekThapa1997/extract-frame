export type ApiResult<T> =
  | {
      success: true;
      data: T;
    }
  | {
      success: false;
      error: {
        statusCode: number;
        message: string | string[];
      };
    };
