const ADD_PRODUCT = 'ADD_PRODUCT';
const Search_Filter = 'Search_Filter';

export const initialState = {
  basketProducts: [],
  searchFilter: ""
};

export const addProduct =  (product) => ({
  type: ADD_PRODUCT, 
  product
});

export const filterItems = (searchFilter) => ({
  type: Search_Filter,
  searchFilter
})

export const reducer = (state = initialState, action) => {
    switch(action.type)
    { 
        case ADD_PRODUCT: 
            state.basketProducts.push({
              product: action.product,
              amount: 1
            }); 
            return { ...state };
         
        case Search_Filter:
            return { ...state, searchFilter: action.searchFilter}

        default:
            return {}
    }
};


