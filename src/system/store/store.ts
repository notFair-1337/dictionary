import { configureStore } from '@reduxjs/toolkit';
import { getDictionary } from '../../services/dictionary'

export const store = configureStore({
  reducer: {
    [getDictionary.reducerPath]: getDictionary.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(getDictionary.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch