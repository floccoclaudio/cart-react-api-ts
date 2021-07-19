import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { FakeStoreType } from "../types/types"
import { RootState } from '../app/rootreducer'

export const fetchInventory = createAsyncThunk<
    //return input type
    FakeStoreType[],
    //output type
    void,
    //typing getState
    { state: RootState; rejectValue: string }>(
        'items/fetchFakeStoreItems',
        async function fetchFakeStoreItems(_, { rejectWithValue }) {
            try {
                let response = await fetch('https://fakestoreapi.com/products/')
                return await response.json()
            }
            catch (error) {
                return rejectWithValue(error as string)
            }

        }
    )

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
    name: 'shop',
    initialState: initialShopState,
    reducers: {

    },
    extraReducers:
        builder => {
            builder.addCase(fetchInventory.pending, state => {
                state.isShopLoading = true
            })
            builder.addCase(fetchInventory.fulfilled, (state, action) => {
                state.isShopLoading = false;
                state.isShopSuccess = true;
                state.inventory = action.payload
            })
            builder.addCase(fetchInventory.rejected, state => {
                state.isShopLoading = false;
                state.isShopError = true;
            })

        }
})
export default shopSlice.reducer