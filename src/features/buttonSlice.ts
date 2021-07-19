import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../app/rootreducer";

//#region  Slice type declarations

export interface FetchUserData {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
    phone: string;
    website: string;
    company: Company;
}

interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geo;
}

interface Geo {
    lat: string;
    lng: string;
}

interface Company {
    name: string;
    catchPhrase: string;
    bs: string;
}

interface FetchedPhotos {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
}

interface FetchedPostData {
    id: number,
    title: string,
    userId: number,
    body: string
}
interface InitialButtonStateType {
    posts: {
        data: FetchedPostData[],
        isLoading: boolean,
        isError: boolean,
        isSuccess: boolean
    }
    users: {
        data: FetchUserData[],
        isLoading: boolean,
        isError: boolean,
        isSuccess: boolean,
        chosenId?: FetchUserData
    }
    photos: {
        data: FetchedPhotos[],
        isLoading: boolean,
        isError: boolean,
        isSuccess: boolean,
    }
}

//state values declaration
const initialButtonState: InitialButtonStateType = {
    posts: {
        data: [],
        isLoading: false,
        isError: false,
        isSuccess: false,
    },
    users: {
        data: [],
        isLoading: false,
        isError: false,
        isSuccess: false,
        chosenId: undefined
    },
    photos: {
        data: [],
        isLoading: false,
        isError: false,
        isSuccess: false,
    }
}
//#endregion
//#region  async requests

export const fetchPosts = createAsyncThunk<FetchedPostData[], void, { state: RootState, rejectWithValue: string }>(
    'fetchPlaceholderPosts', async (_, { rejectWithValue }) => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts')
            return response.json()
        } catch (err) {
            rejectWithValue(err)
        }
    }
)




export const fetchUsers = createAsyncThunk<FetchUserData[], void, { state: RootState, rejectWithValue: string }>(
    'fetchUsers',
    async (_, { rejectWithValue }) => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
            return response.json()
        }
        catch (err) {
            rejectWithValue(err)
        }
    }
)

export const fetchUser = createAsyncThunk<FetchUserData, string, { state: RootState, rejectWithValue: string }>(
    'fetchUser',
    async (id, { rejectWithValue }) => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            return response.json()
        }
        catch (err) {
            rejectWithValue(err)
        }
    }
)




export const fetchImages = createAsyncThunk<FetchedPhotos[], void, { state: RootState, rejectWithValue: string }>(
    'fetchPics', async (_, { rejectWithValue }) => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/photos/?_limit=50')

            return response.json()
        }
        catch (err) { rejectWithValue(err) }
    }
)
//#endregion


const buttonSlice = createSlice({
    name: 'fetchButtonData',
    initialState: initialButtonState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchPosts.pending, (state) => {
            state.posts.isLoading = true
        })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.posts.isLoading = false;
                state.posts.isSuccess = true;
                state.posts.data = action.payload
            })
            .addCase(fetchPosts.rejected, state => {
                state.posts.isLoading = false;
                state.posts.isError = true
            })
            .addCase(fetchUsers.pending, state => {
                state.users.isLoading = true;
            })
            .addCase(
                fetchUsers.fulfilled, (state, action) => {
                    state.users.isLoading = false;
                    state.users.isSuccess = true;
                    state.users.data = action.payload
                })
            .addCase(fetchUsers.rejected, state => {
                state.users.isLoading = false;
                state.users.isError = true
            })
            .addCase(fetchUser.pending, state => {
                state.users.isLoading = true;
            })
            .addCase(
                fetchUser.fulfilled, (state, action) => {
                    state.users.isLoading = false;
                    state.users.isSuccess = true;
                    state.users.chosenId = action.payload

                })
            .addCase(fetchUser.rejected, state => {
                state.users.isLoading = false;
                state.users.isError = true
            })
            .addCase(fetchImages.pending, state => {
                state.photos.isLoading = true
            })
            .addCase(fetchImages.fulfilled, (state, action) => {
                state.photos.isLoading = false;
                state.photos.isSuccess = true;
                state.photos.data = action.payload;
            })
            .addCase(fetchImages.rejected, state => {
                state.photos.isLoading = false;
                state.photos.isError = true
            })
    }

})


export default buttonSlice.reducer