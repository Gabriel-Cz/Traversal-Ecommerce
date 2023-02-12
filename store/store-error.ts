interface DispatchReturn {
  error: unknown;
  message: string;
}

export default class StoreError {
  reducerName: string = '';

  constructor(reducerName: string) {
    this.reducerName = reducerName;
  }

  private logError(error: unknown): void {
    return console.log(`
      ${this.reducerName.toUpperCase}: ${JSON.stringify(error)}
    `)
  }

  public dispatch(error: unknown, message: string): DispatchReturn {
    this.logError(error);
    return {
      error,
      message
    }
  }
}