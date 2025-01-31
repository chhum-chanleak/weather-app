import { type WeatherInfo } from "../utility/utils";

export class WeatherInfoDataStorage {
  private weatherInfoDataStorage: Map<string, WeatherInfo> = new Map();

  getLogList(): Map<string, WeatherInfo> {
    return this.weatherInfoDataStorage;
  }

  register(name: string, log: WeatherInfo): void {
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

  getLog(name: string): WeatherInfo | undefined {
    if (!this.getLogList().has(name)) {
      throw new Error(`${name} does not exist`);
    }

    return this.getLogList().get(name);
  }

  readLog(): void {
    console.log(this.getLogList());
  }
}