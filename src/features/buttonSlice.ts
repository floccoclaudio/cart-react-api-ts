import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../app/rootreducer";
// import { RootState } from "../app/rootreducer";

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

export interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geo;
}

export interface Geo {
    lat: string;
    lng: string;
}

export interface Company {
    name: string;
    catchPhrase: string;
    bs: string;
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
}
interface FetchedPostData {
    userId: number,
    id: number,
    title: string,
    body: string
}


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
    }

})


export default buttonSlice.reducer