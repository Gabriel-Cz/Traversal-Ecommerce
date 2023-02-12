import type { NextApiRequest, NextApiResponse } from 'next'
import type { ProductType } from 'types/Product';
import productsData from '@/public/data-samples/products-data.json'

const handler = (
	_req: NextApiRequest,
	res: NextApiResponse<Partial<ProductType>>
): void => {
	res.status(200).json(productsData);
}

export default handler;