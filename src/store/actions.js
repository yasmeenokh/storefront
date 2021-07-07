import superagent from 'superagent';

const API = 
// 'https://api-js401.herokuapp.com/api/v1/products'
'https://yasmeen-api-server.herokuapp.com/api/v1/products';

export const getRemoteData = () => (dispatch, state)=>{
    superagent.get(API).then(
        response=> {
            dispatch(getAction(response.body));
            console.log('RESPONSE====>', response.body )
        }
    )
};

export const updateRemoteData = (item) => (dispatch, state)=>{
    superagent.put(`${API}/${item._id}`).send({
        availableQuantity : item.availableQuantity -1,
        inCart : item.inCart++,
    })
    .then(
        response=> {
            dispatch(add(response.body));
        }
    )
};

export const removeRemoteData = (item) => (dispatch, state)=>{
    superagent.put(`${API}/${item._id}`).send({
        availableQuantity : item.availableQuantity + item.inCart ,
        inCart : 0,
    })
    .then(
        response=> {
            dispatch(remove(response.body));
        }
    )
};




export const getAction = (payload)=>{
    return{
        type: 'GET',
        payload : payload,
    }
}

export const add=(item)=>{
    return{
        type : 'ADD',
        payload: item,
    }
}

export const remove=(item)=>{
    return{
        type : 'REMOVE',
        payload: item,
    }
}

export const activeCategory = (category)=>{
    return{
        type: 'ACTIVE',
        payload: category,
    }
}

export const activateCategory = (name)=>{
    return{
        type : 'ACTIVE',
        payload : name,
    };
};