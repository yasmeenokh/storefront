let initialState = {
    products:[], 
    cartList : [], 
}

const productsReducer = (state = initialState, action)=>{
    let {type, payload}= action;
    switch(type){
        case 'GET': 
        return{
            products: payload,
            cartList : [],
        }
        case 'ACTIVE':             
            let products = state.products.filter((product)=> {
                return product.category === payload? product.category : null
            }
        );
        return {...initialState, products};
        case 'ADD' :
            let newList = state.products.map((element)=>
                element.name === payload.name ? {
                    id: element.id,
                    name : element.name,
                    category : element.category,
                    url : element.url,
                    price : element.price,
                    availableQuantity : element.availableQuantity -1,
                    inCart: element.inCart + 1 
                }
                : element
            );
            return {products: newList};
        
        case 'REMOVE' :
            let listAfter = state.products.map((element)=>{
                if(element._id === payload._id){
                    element.availableQuantity = element.availableQuantity + element.inCart
                }
                return element;
            });
            return {...state, cartList : listAfter}
        default: return state;
    }
}

// export const activeCategory = (category)=>{
//     return{
//         type: 'ACTIVE',
//         payload: category,
//     }
// }


export default productsReducer;
