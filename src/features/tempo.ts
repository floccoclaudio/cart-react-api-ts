// import { createAsyncThunk, createSlice, isRejectedWithValue } from "@reduxjs/toolkit";
// import { RootState } from '../app/rootreducer'



// interface PostDataType {
//     userId: string;
//     id: number;
//     title: string;
//     body: String;
// }
// interface CommentsDataType {
//     postId: number
//     id: number
//     name: string
//     email: string
//     body: string
// }
// export interface AlbumDataType {
//     userId: number
//     id: number
//     title: string
// }


// interface InitialButtonStateType {
//     posts: {
//         data: PostDataType[]
//         isLoading: boolean;
//         isError: boolean;
//         isSuccess: boolean;
//     }
//     comments: {
//         data: CommentsDataType[];
//         isLoading: boolean;
//         isError: boolean;
//         isSuccess: boolean;
//     }
//     albums: {
//         data: AlbumDataType[],
//         isLoading: boolean;
//         isError: boolean;
//         isSuccess: boolean;
//     }

// }
// const initialButtonState: InitialButtonStateType = {
//     posts: {
//         data: [],
//         isLoading: false,
//         isError: false,
//         isSuccess: false,
//     },
//     comments: {
//         data: [],
//         isLoading: false,
//         isError: false,
//         isSuccess: false,
//     },
//     albums: {
//         data: [],
//         isLoading: false,
//         isError: false,
//         isSuccess: false,
//     }


// }
// export const fetchPosts = createAsyncThunk<PostDataType[], void, { state: RootState, rejectValue: string }>(
//     'fetchPosts',
//     async function fetchPlaceHolderPosts(_, { rejectWithValue }) {
//         try {
//             const response = await fetch('https://jsonplaceholder.typicode.com/posts')
//             return await response.json()
//         }
//         catch (err) {
//             return rejectWithValue(err)
//         }
//     }
// )

// export const fetchComments = createAsyncThunk<CommentsDataType[], void, { state: RootState, rejectValue: string }>(
//     'fetchComments',
//     async function fetchPlaceHolderComments(_, { rejectWithValue }) {
//         try {
//             const response = await fetch('https://jsonplaceholder.typicode.com/comments')
//             return await response.json()
//         } catch (err) {
//             return rejectWithValue(err)
//         }
//     }
// )

// export const fetchAlbums = createAsyncThunk<AlbumDataType[], void, { state: RootState, rejectWithValue: string }>(
//     'fetchAlbums',
//     async function fetchAlbums(_, { rejectWithValue }) {
//         try {
//             const response = await fetch('https://jsonplaceholder.typicode.com/albums')
//             return response.json()
//         }
//         catch (err) {
//             rejectWithValue(err)
//         }
//     }
// )

export { }







// const buttonSlice = createSlice({
//     name: 'buttonFetchedData',
//     initialState: initialButtonState,
//     reducers: {},
//     extraReducers: builder => {
//         builder.addCase(fetchPosts.pending, state => {
//             state.posts.isLoading = true;
//         })
//             .addCase(fetchPosts.fulfilled, (state, action) => {
//                 state.posts.isLoading = false;
//                 state.posts.isSuccess = true;
//                 state.posts.data = action.payload;
//             })
//             .addCase(fetchPosts.rejected, state => {
//                 state.posts.isLoading = false;
//                 state.posts.isError = true;
//             })
//             .addCase(fetchComments.pending, state => {
//                 state.comments.isLoading = true;
//             })
//             .addCase(fetchComments.fulfilled, (state, action) => {
//                 state.comments.isLoading = false;
//                 state.comments.isSuccess = true;
//                 state.comments.data = action.payload;
//             }).addCase(
//                 fetchComments.rejected, state => {
//                     state.comments.isLoading = false;
//                     state.comments.isError = true;
//                 })

//             .addCase(fetchAlbums.pending, state => {
//                 state.albums.isLoading = true;
//             })
//             .addCase(fetchAlbums.fulfilled, (state, action) => {
//                 state.albums.isLoading = false;
//                 state.albums.isSuccess = true;
//                 state.albums.data = action.payload;
//             }).addCase(
//                 fetchAlbums.rejected, state => {
//                     state.albums.isLoading = false;
//                     state.albums.isError = true;
//                 })

//     }
// })



// export default buttonSlice.reducer