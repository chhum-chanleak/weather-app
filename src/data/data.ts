class SearchHistoryStorage {
  private searchHistoryStorage: Map<string, string> = new Map();

  getSearchHistoryList(): Map<string, string> {
    return this.searchHistoryStorage;
  }

  register(name: string, searchHistory: string): void {
    try {
      if (this.getSearchHistoryList().has(name)) {
        throw new Error(`${name} already exists`);
      }
  
      this.getSearchHistoryList().set(name, searchHistory);
      console.log(`${name} registered successfully`);
    } catch(error) {
      console.error(error);
    }
  }

  deregister(name: string): void {
    try {
      if (!this.getSearchHistoryList().has(name)) {
        throw new Error(`${name} does not exist`);
      }
  
      this.getSearchHistoryList().delete(name);
      console.log(`${name} deregistered successfully`);
    } catch(error) {
      console.error(error);
    }

  }

  getSearchHistory(name: string): string | undefined {
    try {
      if (!this.getSearchHistoryList().has(name)) {
        throw new Error(`${name} does not exist`);
      }
  
      return this.getSearchHistoryList().get(name);
    } catch(error) {
      console.error(error);
    }
  }

  readSearchHistory(): void {
    console.log(this.getSearchHistoryList());
  }
}

export const searchHistoryStorage = new SearchHistoryStorage();