import { createSlice } from "@reduxjs/toolkit"

export const favoriteSlice = createSlice({
    name: 'favorite',
    initialState: {
        favoriteItems: []
    },
    reducers: {
        addItemToFavorite: (state, action) => {
            const timeId = new Date().getTime()
            state.favoriteItems.push({
                id: timeId,
                productId: action.payload.product.productId
            })
        },
        removeItemFromFavorite: (state, action) => {
            state.favoriteItems = state.favoriteItems.filter(
                favoriteItem => favoriteItem.productId !== action.payload.favoriteItemId
            )
        }
    }
})


export const getFavoriteItems = state => state.favorite.favoriteItems;
export const {addItemToFavorite, removeItemFromFavorite} = favoriteSlice.actions;
export default favoriteSlice.reducer;