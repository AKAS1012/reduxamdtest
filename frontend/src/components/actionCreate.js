const ITEM_REQUEST = 'ITEMS_REQUEST';
const ITEMS_REQUESTS_SUCCESS = 'ITEMS_REQUEST_SUCCESS';

export function itemsRequest(bool, startIndex, endIndex){
    let payload = {
        isLoading:bool,
        startIndex,
        endIndex
    }
    return{
        type:ITEM_REQUEST,
        payload,
    }
}
export function itemsRequestSuccess(bool){
    return{
        type:ITEMS_REQUESTS_SUCCESS,
        isLoading:bool,
    }
}