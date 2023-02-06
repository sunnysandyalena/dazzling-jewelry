import { createSlice } from "@reduxjs/toolkit";

export const jewelrySlice = createSlice ({
    name: "products",
    initialState: {
        selectedType: "ALL JEWELRY",
    },
    reducers: {
        filterType: (state, action) => {
            state.selectedType = action.payload;
        }
    }
    
})

export const getSelectedType = state => state.products.selectedType;
export const { filterType } = jewelrySlice.actions;
export default jewelrySlice.reducer;