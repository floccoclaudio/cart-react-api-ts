import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from '../app/rootreducer'



interface PostDataType {
    userId: string;
    id: number;
    title: string;
    body: String;
}
interface InitialButtonStateType {
    posts: PostDataType[];
    isPostLoading: boolean;
    isPostError: boolean;
    isPostSuccess: boolean;
}
const initialButtonState: InitialButtonStateType = {
    posts: [],
    isPostLoading: false,
    isPostError: false,
    isPostSuccess: false,
}
export const fetchPosts = createAsyncThunk<PostDataType[], void, { state: RootState, rejectValue: string }>(
    'fetchPosts',
    async function fetchPlaceHolderPosts(_, { rejectWithValue }) {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts')
            return await response.json()
        }
        catch (err) {
            return rejectWithValue(err)
        }
    }
)


const buttonSlice = createSlice({
    name: 'buttonFetchedData',
    initialState: initialButtonState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchPosts.pending, state => {
            state.isPostLoading = true;
        })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.isPostLoading = false;
                state.isPostSuccess = true;
                state.posts = action.payload;
            })
            .addCase(fetchPosts.rejected, state => {
                state.isPostLoading = false;
                state.isPostError = true;
            })
    }
})



export default buttonSlice.reducer