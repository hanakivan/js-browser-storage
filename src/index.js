const setItem = (key, value) => {
    try {
        localStorage.setItem(key, value);

        return true;
    } catch(error) {
        console.warn("An error while setting localStorage: %o", error);
    }

    return false;
};

const getItem = key => {
    try {
        return localStorage.getItem(key);
    } catch(error) {
        console.warn("An error while getting an item from localStorage: %o", error);
    }

    return null;
};

const removeItem = key => {
    try {
        localStorage.removeItem(key);

        return true;
    } catch(error) {
        console.warn("An error while removing an item from localStorage: %o", error);
    }

    return false;
};

export default {
    getItem,
    setItem,
    removeItem,
};