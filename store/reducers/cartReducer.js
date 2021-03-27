const countItems = (state, action) => {
    switch (action.type) {
        case 'COUNT_ITEMS':
            return {
                itemsNumber: () => {
                    return items.lenght();
                } 
            }
        default:
            return state = null;
    }
}

export default countItems;