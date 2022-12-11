import type { NextApiRequest, NextApiResponse } from 'next';
import type { CustomerReviewType } from '@/types';
import customerReviews from '@/public/data-samples/customers-reviews.json';

const handler = (
	_req: NextApiRequest,
	res: NextApiResponse<CustomerReviewType[]>
): void => {
	res.status(200).json(customerReviews.data);
}

export default handler;