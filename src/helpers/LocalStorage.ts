export const StorageKeys = {
  SELECTED_CITIES: 'SELECTED_CITIES',
} as const;

export type StorageKeysType = (typeof StorageKeys)[keyof typeof StorageKeys];

class StorageUtility {
  static setItem<T>(key: StorageKeysType, value: T): void {
    try {
      const jsonValue = JSON.stringify(value);
      localStorage.setItem(key, jsonValue);
    } catch (e) {}
  }

  static getItem<T>(key: StorageKeysType): T | null {
    try {
      const jsonValue = localStorage.getItem(key);
      const value = jsonValue != null ? JSON.parse(jsonValue) : [];
      return value;
    } catch (e) {
      return null;
    }
  }

  static removeItem(key: StorageKeysType): void {
    try {
      localStorage.removeItem(key);
    } catch (e) {}
  }

  static clear(): void {
    try {
      localStorage.clear();
    } catch (error) {}
  }

}

export default StorageUtility;