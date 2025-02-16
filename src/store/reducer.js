const ADD_PRODUCT = 'ADD_PRODUCT';
const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
const SEARCH_FILTER = 'SEARCH_FILTER';
const TOGGLE_POPUP = 'TOGGLE_POPUP';
const CHANGE_QUANTITY = 'CHANGE_QUANTITY';
 

export const initialState = {
  basketProducts: [],
  searchFilter: "",
  isPopupShow: false
};

export const addProduct =  (product) => ({
  type: ADD_PRODUCT, 
  product
});

export const removeProduct =  (productId) => ({
  type: REMOVE_PRODUCT, 
  productId
});

export const changeQuantity = (productId, q) => ({
  type: CHANGE_QUANTITY,
  product: {productId, q}
})

export const filterItems = (searchFilter) => ({
  type:SEARCH_FILTER,
  searchFilter
})

export const togglePopup = (show) => ({
  type: TOGGLE_POPUP,
  show
})

export const reducer = (state = initialState, action) => {
    switch(action.type)
    { 
        case ADD_PRODUCT:   
            const productIndex = state.basketProducts.findIndex( p => p.productId === action.product.productId);
            if(productIndex >= 0) {
              state.basketProducts[productIndex].quantity++; 
            } else { 
              state.basketProducts.push({
                ...action.product // product : action.product
              }); 
            }
            return { ...state};
         
        case SEARCH_FILTER:
            return { ...state, searchFilter: action.searchFilter}

        case TOGGLE_POPUP:
          return { ...state, isPopupShow: action.show}

        case REMOVE_PRODUCT: 
          state.basketProducts = state.basketProducts.filter(p => p.productId !== action.productId)
          return {...state}

        case CHANGE_QUANTITY: 
          const pIndex = state.basketProducts.findIndex( p => p.productId === action.product.productId);
          state.basketProducts[pIndex].quantity += action.product.q;
          if(state.basketProducts[pIndex].quantity < 1) 
            state.basketProducts[pIndex].quantity = 1;
          return{...state} 
        default:
            return {}
    }
};


