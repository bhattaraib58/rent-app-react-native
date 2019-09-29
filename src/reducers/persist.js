const persistRehydrate = (state = [], action) => {
    switch (action.type) {
        case "persist/REHYDRATE":
            return { ...state, response: action.payload,hello:true };

        default:
            return state;
    }
}

export default persistRehydrate;