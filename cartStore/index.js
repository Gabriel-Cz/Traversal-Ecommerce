export const loadCartState = () => {
    try {
        const serialState = localStorage.getItem('cartState');
        if (serialState === null) {
            return undefined;
        } else {
            return JSON.parse(serialState)
        }
    } catch (err) {
        return undefined;
    }
};

export const saveCartState = (state) => {
    try {
        const serialState = JSON.stringify(state);
        localStorage.setItem('cartState', serialState);
        return JSON.parse(serialState);
    } catch (err) {
        console.log(err);
    }
}