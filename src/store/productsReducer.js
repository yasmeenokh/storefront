let initialState = {
    products:[
        {
            id: '1',
            name : 'Cake',
            category: 'food',
            url : 'https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            price: '30 JOD',
            availableQuantity: 5,
            inCart : 0,
        }, 
        {
            id: '2',
            name : 'Cookies',
            category: 'food',
            url : 'https://images.pexels.com/photos/2067419/pexels-photo-2067419.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            price: '2 JOD',
            availableQuantity: 35,
            inCart : 0,
        },
        {
            id: '3',
            name : 'Cheese Cake',
            category: 'food',
            url : 'https://images.pexels.com/photos/221068/pexels-photo-221068.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            price: '30 JOD',
            availableQuantity: 3,
            inCart : 0,
        },
        {
            id: '4',
            name : 'Cup Cake',
            category: 'food',
            url : 'https://images.pexels.com/photos/853004/pexels-photo-853004.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            price: '1 JOD',
            availableQuantity: 20,
            inCart : 0,
        },
        {
            id: '5',
            name : 'Mobile',
            category: 'electronics',
            url : 'https://images.pexels.com/photos/193004/pexels-photo-193004.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            price: '800 JOD',
            availableQuantity: 10,
            inCart : 0,
        },
        {
            id: '6',
            name : 'LapTop',
            category: 'electronics',
            url : 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            price: '950 JOD',
            availableQuantity: 5,
            inCart : 0,
        },
        {
            id: '7',
            name : 'HeadSet',
            category: 'electronics',
            url : 'https://images.pexels.com/photos/577769/pexels-photo-577769.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            price: '100 JOD',
            availableQuantity: 20,
            inCart : 0,
        },
        {
            id: '8',
            name : 'Smart Watch',
            category: 'electronics',
            url : 'https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            price: '100 JOD',
            availableQuantity: 20,
            inCart : 0,
        },
    ], 
    cartList : [], 
}

const productsReducer = (state = initialState, action)=>{
    let {type, payload}= action;
    switch(type){
        case 'ACTIVE':
            let products = initialState.products.filter((product)=> 
                product.category === payload? product.category : null
        );
        return {products};

        case 'ADD' :
            let newList = state.products.map((element)=>{
                if(element.name === payload.name){
                    if(payload.availableQuantity > 0){
                        element.availableQuantity --;
                    }
                }
                return element;
            });
            return {...state, cartList : newList};
        
        case 'REMOVE' :
            let listAfter = state.cartList.map((element)=>{
                if(element.name === payload.name){
                    element.availableQuantity = element.availableQuantity + element.inCart
                }
                return element;
            });
            return {...state, cartList : listAfter}
        default: return state;
    }
}

export const activeCategory = (category)=>{
    return{
        type: 'ACTIVE',
        payload: category,
    }
}


export default productsReducer;