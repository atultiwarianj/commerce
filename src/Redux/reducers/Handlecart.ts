import { Action } from '../actions/action'
import { ActionType } from '../action-type/actionType'
import { ActionT } from '../action_creators/index';


const obj:ActionT={
    id : "",
    itemName : "",
    qty : 0,
    ProductImg : "",
    Description : "",
    price : 0,
}
const initialStore ={
  cart : [obj],
}



const handleCart = (state = initialStore, action:Action) => {
  const product = action.payload

  switch (action.type) {
    case ActionType.ADD:
      const itemIndex = state.cart.findIndex((item:ActionT)=>item.id=== action.payload.id)
      if(itemIndex >= 0){
        state.cart[itemIndex].qty += 1
      } else {
        const temp = { ...action.payload, qty : 1}
         return {
                ...state,
                cart: [ ...state.cart, temp],
              }
      }
      break
      case ActionType.DELETE:
        const data = state.cart.filter((el:ActionT)=> el.id !== action.payload.id)
        console.log(data, "data")
        return {
        ...state,
        cart : data,
        }
        default:
          return state
    }

      return state;
    
};

export default handleCart;
