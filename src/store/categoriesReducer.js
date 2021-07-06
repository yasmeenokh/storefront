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
            let activeCategory = initialState.categories.find((category)=> category.name === payload);
            return {categories : initialState.categories, activeCategory}
        default:
            return state;
    }
}

export default categoriesReducer;