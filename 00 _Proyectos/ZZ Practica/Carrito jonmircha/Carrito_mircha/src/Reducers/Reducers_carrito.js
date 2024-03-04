import { TYPES } from "../Actions/Action_carrito"

export const initial_carrito = {
    productos: [
        { id: 1, name: "Ender 3", price: 300 },
        { id: 2, name: "Ender 4", price: 400 },
        { id: 3, name: "Ender 5", price: 500 },
        { id: 4, name: "Ender 6", price: 600 },

    ],
    cart: []
}



export function Reducer_carrito(state, action) {
    switch (action.type) {
        case  TYPES.Add_car:{
            let newItem = state.productos.find(producto => producto.id === action.payload );
            //console.log(newItem)

            let iteminCart = state.cart.find((item)=> item.id === newItem.id)

            return iteminCart
            ?
            {...state,
                    cart:state.cart.map((item)=>
                    item.id === newItem.id
                        ?
                        {..item , quality:item.quality+1}
                        :item
                )
                { ...state,
                    cart:[...state.cart,{...newItem , quality:1}]}
            }
        
        
        case  TYPES.Clear_car:
            //logica
            return{

            }
        
        
        case  TYPES.Rest_car:
            //logica
            return{
                ...state,
            }
        
        default: state;
    };
}
