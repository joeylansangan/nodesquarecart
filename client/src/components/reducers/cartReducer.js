import { ADD_TO_CART, REMOVE_ITEM, SUB_QUANTITY, ADD_QUANTITY }  from '../actions/action-types/action-types';

import Item1 from './assets/img1.png';
import Item2 from './assets/img2.png';

const initState = {
    items: [
        {id:1,title:'Diamond Piece', desc: "It looks like shiny water droplets on top of your skin.", price:199,img:Item1},
        {id:2,title:'Gold Chunk', desc: "Chubby gold chunk. Will put a smile on any face.", price:159,img: Item2},
    ],
    addedItems:[],
    total: 0
}
const cartReducer= (state = initState,action)=>{
    if(action.type === ADD_TO_CART){
       let addedItem = state.items.find(item=> item.id === action.id)
        //check if the action id exists in the addedItems
       let existed_item = state.addedItems.find(item=> action.id === item.id)
       if(existed_item)
       {
          addedItem.quantity += 1 
           return{
              ...state,
               total: state.total + addedItem.price,
               quantity: state.quantity + 1
                }
        }
       else{
          addedItem.quantity = 1; 
          //calculating the total
          let newAddy = 1
          let newTotal = state.total + addedItem.price 
          
          return{
              ...state,
              addedItems: [...state.addedItems, addedItem], 
              total : newTotal,
              quantity: newAddy
          }
      }
    }
    if(action.type === REMOVE_ITEM){
        let itemToRemove= state.addedItems.find(item=> action.id === item.id)
        let new_items = state.addedItems.filter(item=> action.id !== item.id)
        
        //calculating the total
        let newRem = 0
        // let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity )
        let newTotal = 0
        console.log(itemToRemove)
        return{
            ...state,
            addedItems: new_items,
            total: newTotal,
            quantity: newRem
        }
    }
    //INSIDE CART COMPONENT
    if(action.type=== ADD_QUANTITY){
        let addedItem = state.items.find(item=> item.id === action.id)
    
        {
          addedItem.quantity += 1 
          let newAdded = state.quantity + 1
          let newTotal = state.total + addedItem.price
          return{
              ...state,
              total: newTotal,
              quantity: newAdded
          }
  
        }
    }
    if(action.type=== SUB_QUANTITY){  
        let addedItem = state.items.find(item=> item.id === action.id) 
        //if the qt == 0 then it should be removed
        if(addedItem.quantity === 1){
            
            let new_items = state.addedItems.filter(item=>item.id !== action.id)
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                addedItems: new_items,
                total: newTotal
                
            }
        }
        else {
            addedItem.quantity -= 1
            let newSub = state.quantity - 1
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                total: newTotal,
                quantity: newSub
            }
        }
        
    }
    return state;
}

export default cartReducer;