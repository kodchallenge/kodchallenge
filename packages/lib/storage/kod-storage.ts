const set = (key: string, value: any) => {
    if(typeof localStorage == "undefined") return;
    if(typeof value === 'object') value = JSON.stringify(value);

    localStorage.setItem(key, value);
}

const get = (key: string) => {
    if(typeof localStorage == "undefined") return null;
    return localStorage.getItem(key);
}

const getObject = <T> (key: string): T | null => {
    const data = get(key);
    return data ? JSON.parse(data) as T : null;
}

const remove = (key: string) => {
    if(typeof localStorage == "undefined") return;
    localStorage.removeItem(key);
}

const clear = () => {
    if(typeof localStorage == "undefined") return;
    localStorage.clear();
}

export default {
    set,
    get,
    getObject,
    remove,
    clear,
}