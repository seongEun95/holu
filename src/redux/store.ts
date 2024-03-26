import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import bookmarkSlice from './slice/bookmarkSlice';

const middlewares = [];
if (process.env.NODE_ENV === 'development') middlewares.push(logger);

const store = configureStore({
	reducer: {
		bookmark: bookmarkSlice,
	},
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
