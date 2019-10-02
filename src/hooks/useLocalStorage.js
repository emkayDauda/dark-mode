import React, {useState} from 'react';

const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        // Get from local storage by key
        const item = window.localStorage.getItem(key);
        // Parse and return stored json or, if undefined, return initialValue
        return item ? JSON.parse(item) : initialValue;
    })

    setValue = (value) => {
        window.localStorage.setItem(key, value);
        setStoredValue(JSON.stringify(value));
    }

    return [storedValue, setValue];
}