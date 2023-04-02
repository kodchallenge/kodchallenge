type RandomEnumValue<T extends Record<string, string>> = T[keyof T];
export function randomEnumValue<T extends Record<string, string>>(enumObject: T): RandomEnumValue<T> {
    const enumValues = Object.values(enumObject);
    const randomIndex = Math.floor(Math.random() * enumValues.length);
    return enumValues[randomIndex] as RandomEnumValue<T>;
}