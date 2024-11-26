import type { PayloadAction } from '@reduxjs/toolkit';
import type { Category, CategoriesSlice } from './categories';

import initialState from './initial-state';

const sortCategories = (a: Category, b: Category) => {
	if (a.name < b.name) return -1;
	if (a.name > b.name) return 1;
	return 0;
};

export const addCategory = {
	reducer: (slice: CategoriesSlice, { payload }: PayloadAction<Category>) => {
		slice.allIds.push(payload.id);
		slice.byId[payload.id] = payload;
	},
	prepare: (payload: Category) => ({ payload })
};

export const addCategories = {
	reducer: (slice: CategoriesSlice, action: PayloadAction<Category[]>) => {
		const categories = action.payload;

		for (const category of categories) {
			slice.allIds = [...new Set([...slice.allIds, category.id])];
			slice.byId[category.id] = category;
		}
	},
	prepare: (payload: Category[]) => ({
		payload: payload.toSorted(sortCategories)
	})
};

export const addCategoryPreviews = {
	reducer: (slice: CategoriesSlice, action: PayloadAction<Category[]>) => {
		const categories = action.payload;

		slice.previewIds = [];

		for (const category of categories) {
			slice.allIds = [...new Set([...slice.allIds, category.id])];
			slice.previewIds.push(category.id);
			slice.byId[category.id] = category;
		}
	},
	prepare: (payload: Category[]) => ({
		payload: payload.toSorted(sortCategories)
	})
};

export const clearCategories = {
	reducer: (slice: CategoriesSlice) => {
		slice = initialState;
	},
	prepare: (payload: void) => ({ payload })
};
