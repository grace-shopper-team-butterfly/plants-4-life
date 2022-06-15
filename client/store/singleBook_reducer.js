import axios from 'axios'

const initialState = {}

// Action Type

const FIND_ONE_PRODUCT ='FIND_ONE_PRODUCT'

// Action creator

export const findOneProduct = (product) => ({
    type: FIND_ONE_PRODUCT,
    product
})

// Thunk creator

export const fetchOneProduct = (productId) => {
    try {
        return async (dispatch) => {
            const {data: product} = await axios.get(`/api/products/${productId}`)
            dispatch(findOneProduct(product))
        }
    } catch (error) {
        next(error)
    }
}

// Reducer

export default function singleBookReducer(state = initialState, action) {
    switch (action.type){
        case FIND_ONE_PRODUCT:
            return action.product
        default:
            return state
    }
}