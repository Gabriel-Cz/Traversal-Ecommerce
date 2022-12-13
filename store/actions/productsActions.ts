import axiosModule from '@/utils/axios-instance';
import { AppThunk } from '@/store/typing';
import {
	DispatchProducts,
	DispatchProduct,
	DispatchFilter,
	DispatchFilterByElement
} from './typing';
import * as types from '../types'
import StoreError from 'store/store-error';
import { ProductType } from 'types/Product';

const errorBuilder = new StoreError('products');

export const getProducts: AppThunk = () =>
	async (dispatch: DispatchProducts) => {
		try {
			let { data } = await axiosModule.get<ProductType[]>('/products');
			dispatch({
				type: types.GET_PRODUCTS,
				payload: data
			});
		} catch (error) {
			dispatch({
				type: types.PRODUCTS_ERROR,
				payload: errorBuilder.dispatch(error, 'Try again later.')
			})
		}
	}

export const getProduct = (id: string) =>
	async (dispatch: DispatchProduct) => {
		try {
			let { data } = await axiosModule.get<ProductType[]>('/products')
			const product = data.find(product => product.id === id)
			dispatch({
				type: types.GET_PRODUCT,
				payload: product
			});
		} catch (error) {
			dispatch({
				type: types.PRODUCTS_ERROR,
				payload: errorBuilder.dispatch(error, 'Try again later.')
			})
		}
	}

export const filterProducts = (type: string, filter: string) =>
	async (dispatch: DispatchFilter) => {
		try {
			const { data } = await axiosModule.get<ProductType[]>('/products');
			const products = data.filter(product => product[type] === filter);
			dispatch({
				type: types.FILTER_PRODUCTS,
				payload: products,
			});
		} catch (error) {
			dispatch({
				type: types.PRODUCTS_ERROR,
				payload: errorBuilder.dispatch(error, 'Try again later.')
			})
		}
	}

export const filterByElement = (type: string) =>
	async (dispatch: DispatchFilterByElement) => {
		try {
			let { data } = await axiosModule.get<ProductType[]>('/products');
			const products = data.filter(product => product[type] === 'gold' || 'silver')
			dispatch({
				type: types.FILTER_ELEMENTS,
				payload: products
			})
		} catch (error) {
			dispatch({
				type: types.PRODUCTS_ERROR,
				payload: errorBuilder.dispatch(error, 'Try again later.')
			})
		}
	}