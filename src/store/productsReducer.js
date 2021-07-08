let initialState = {
    products:[], 
    cartList : [], 
}

const productsReducer = (state = initialState, action)=>{
    let {type, payload}= action;
    switch(type){
        case 'GET':
            initialState.products = payload; 
            // state
            return  {
                products: payload,
            cartList : [],
    }
        
        case 'ACTIVE':             
            let products = initialState.products.filter((product)=> {
                return product.category === payload? product.category : null
            }
        );
        console.log('PRODUCTSS', products)
        console.log('INITIALSTATE', initialState.products)

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
                    inCart: element.inCart++,
                }
                : element
            );
            return {...state, product: newList}
            // {products: newList};
        
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