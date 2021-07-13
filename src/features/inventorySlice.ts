import { createSlice } from "@reduxjs/toolkit"
import { FakeStoreType } from "../types/types"


interface ShopSliceType {
    inventory: FakeStoreType[];
    isShopLoading: boolean;
    isShopError: boolean;
    isShopSuccess: boolean;

}

const initialShopState: ShopSliceType = {
    inventory: [],
    isShopLoading: false,
    isShopError: false,
    isShopSuccess: false
}

const shopSlice = createSlice({
    name: 'inventory',
    initialState: initialShopState,
    reducers: {

    }
})
export default shopSlice.reducer