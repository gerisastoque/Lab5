import { productsActions, ShoppingItemsActions } from '../types/store';

export const actions = (payload: any) => {
	return [
		{
			action: productsActions.GETPRODUCTS,
			payload,
		},
		{
			action: ShoppingItemsActions.GETSHOPPINGITEMS,
			payload,
		},
		{
			action: ShoppingItemsActions.SAVESHOPPINGITEMS,
			payload,
		},
	];
};
