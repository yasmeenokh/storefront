let initialState = {
    categories : [
        {
            name : 'food',
            displayName : 'FOOD',
            description : 'A balanced diet is a cookie in each hand',
        },
        {
            name: 'electronics',
            displayName : 'Electronics',
            description : 'Incredible Prices On All Your Favorite Items',
        }
    ],
    activeCategory: {},
}

// reducer function takes the current state and the action as it argument
// return the new or the updated state
const categoriesReducer =(state= initialState, action)=>{
    let {type, payload}= action;
    switch(type){
        case 'ACTIVE':
            let activeCategory = state.categories.find((category)=> category.name === payload);
            return {categories : state.categories, activeCategory}
        case 'RESET':
            return initialState
        default:
            return state;
    }
}


// action which will have a type and payload(date)
export const activateCategory = (name)=>{
    return{
        type : 'ACTIVE',
        payload : name,
    };
};
export const rest = ()=>{
    return{
        type : 'RESET',
    };
};

export default categoriesReducer;