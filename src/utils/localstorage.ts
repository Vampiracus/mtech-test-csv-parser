export const storageItemName = 'data';

export function getDataFromStorage(): Person[] {
    const data = localStorage.getItem(storageItemName);
    if (data === null) return [];
    return JSON.parse(data);
}

export function setDataInStorage(data: Person[]) {
    localStorage.setItem(storageItemName, JSON.stringify(data));
}
