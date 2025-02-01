class SearchHistoryStorage {
  private searchHistoryStorage: Map<string, string> = new Map();

  getLogList(): Map<string, string> {
    return this.searchHistoryStorage;
  }

  register(name: string, log: string): void {
    if (this.getLogList().has(name)) {
      throw new Error(`${name} already exists`);
    }

    this.getLogList().set(name, log);
    console.log(`${name} registered successfully`);
  }

  deregister(name: string): void {
    if (!this.getLogList().has(name)) {
      throw new Error(`${name} does not exist`);
    }

    this.getLogList().delete(name);
    console.log(`${name} deregistered successfully`);
  }

  getLog(name: string): string | undefined {
    if (!this.getLogList().has(name)) {
      throw new Error(`${name} does not exist`);
    }

    return this.getLogList().get(name);
  }

  readLog(): void {
    console.log(this.getLogList());
  }
}

export const searchHistoryStorage = new SearchHistoryStorage();