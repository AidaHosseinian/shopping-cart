const ADD_PRODUCT = 'ADD_PRODUCT';

export const initialState = {
  basketProducts: []
};

export const addProduct =  (product) => ({
  type: ADD_PRODUCT, 
  product
});

export const reducer = (state = initialState, action) => {
    switch(action.type)
    { 
        case ADD_PRODUCT: 
            state.basketProducts.push({
              product: action.product,
              amount: 1
            }); 
            return { ...state };
            
    }
};