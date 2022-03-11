const initialState = {
    isLoading:false,
    items:[]
}

const reducer = (state = initialState, action) =>{
    switch(action.type){
        case "ITEMS_request":
            return Object.assign({}, state,{
                isLoading:action.payload.isLoading
            })

        case 'ITEMS_REQUESTS_SUCCESS':
            return Object.assign({}, state,{
                items:state.items.concat(action.items),
                isLoading:action.isLoading
            })
    }
}

export default reducer;