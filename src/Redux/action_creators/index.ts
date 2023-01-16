import { ActionType } from "../action-type/actionType"

export interface ActionT{
    id :string,
    itemName : string,
    qty : number,
    ProductImg : string,
    Description : string,
    price : number,
    }

export const addCart =(item:ActionT)=>{
    // console.log("action", product)
    return{
        type : ActionType.ADD,
        payload : item
    }
}

// For delete item from cart
export const delCart =(id:ActionT)=>{
    return{
        type : ActionType.DELETE,
        payload : id
    }
}


