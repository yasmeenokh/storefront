let initialState = {
    products:[
        {
            id: '1',
            name : 'Cake',
            category: 'food',
            url : 'https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            price: '30 JOD',
            availableQuantity: 5,
        }, 
        {
            id: '2',
            name : 'Cookies',
            category: 'food',
            url : 'https://images.pexels.com/photos/2067419/pexels-photo-2067419.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            price: '2 JOD',
            availableQuantity: 35,
        },
        {
            id: '3',
            name : 'Cheese Cake',
            category: 'food',
            url : 'https://images.pexels.com/photos/221068/pexels-photo-221068.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            price: '30 JOD',
            availableQuantity: 3,
        },
        {
            id: '4',
            name : 'Cup Cake',
            category: 'food',
            url : 'https://images.pexels.com/photos/853004/pexels-photo-853004.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            price: '1 JOD',
            availableQuantity: 20,
        },
        {
            id: '5',
            name : 'Mobile',
            category: 'electronics',
            url : 'https://images.pexels.com/photos/193004/pexels-photo-193004.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            price: '800 JOD',
            availableQuantity: 10,
        },
        {
            id: '6',
            name : 'LapTop',
            category: 'electronics',
            url : 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            price: '950 JOD',
            availableQuantity: 5,
        },
        {
            id: '7',
            name : 'HeadSet',
            category: 'electronics',
            url : 'https://images.pexels.com/photos/577769/pexels-photo-577769.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            price: '100 JOD',
            availableQuantity: 20,
        },
        {
            id: '8',
            name : 'Smart Watch',
            category: 'electronics',
            url : 'https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            price: '100 JOD',
            availableQuantity: 20,
        },
    ], 
    count: 0, 
}

const productsReducer = (state = initialState, action)=>{
    let {type, payload}= action;
    switch(type){
        case 'ACTIVE':
            let products = state.products.filter((product)=> 
                product.category === payload? product.category : null
        );
            return{products, count: state.count};
        case 'INCREMENT': 
        const count = state.count + 1 ;
        return {products, count: state.count}
        default: return state;
    }
}

export const activeCategory = (category)=>{
    return{
        type: 'ACTIVE',
        payload: category,
    }
}
export const increment = ()=>{
    return{
        type: 'INCREMENT',
    }
}



export default productsReducer;