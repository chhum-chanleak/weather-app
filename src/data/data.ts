class SearchHistoryStorage {
  private searchHistoryStorage: Map<string, string> = new Map();

  getSearchHistoryList(): Map<string, string> {
    return this.searchHistoryStorage;
  }

  register(name: string, searchHistory: string): void {
    if (this.getSearchHistoryList().has(name)) {
      throw new Error(`${name} already exists`);
    }

    this.getSearchHistoryList().set(name, searchHistory);
    console.log(`${name} registered successfully`);
  }

  deregister(name: string): void {
    if (!this.getSearchHistoryList().has(name)) {
      throw new Error(`${name} does not exist`);
    }

    this.getSearchHistoryList().delete(name);
    console.log(`${name} deregistered successfully`);
  }

  getSearchHistory(name: string): string | undefined {
    if (!this.getSearchHistoryList().has(name)) {
      throw new Error(`${name} does not exist`);
    }

    return this.getSearchHistoryList().get(name);
  }

  readSearchHistory(): void {
    console.log(this.getSearchHistoryList());
  }
}

export const searchHistoryStorage = new SearchHistoryStorage();