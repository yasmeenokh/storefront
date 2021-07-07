
let initialState = {
    cart :[]
};

const cartReducer = (state = initialState, action)=>{
    let {type, payload} = action;
    
    switch(type){
        case 'ADD':
            if (!state.cart.includes(payload)) {
                state.cart.push(payload);
                payload.count = 1
            }
            // if(payload.availableQuantity > 0){
            //     state.cart.push(payload);
            //     payload.count +1;
            // }
            return {...state};

        case 'REMOVE':
            let newCart = state.cart.filter((element)=> element.name !== payload.name);
            return {...state ,cart : newCart}
        
    
        default : return state
    }
}


// export const add=(item)=>{
//     return{
//         type : 'ADD',
//         payload: item,
//     }
// }


export default cartReducer;