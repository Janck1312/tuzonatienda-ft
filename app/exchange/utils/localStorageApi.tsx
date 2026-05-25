export class LocalStorageApi {
    static setValue(key: string, value: any) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    static getValue(key: string) {
        const value = localStorage.getItem(key);
        return value ? JSON.parse(value) : null;
    }
}