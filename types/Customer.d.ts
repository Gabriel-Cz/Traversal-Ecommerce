export type CustomerType = {
  id: string | number;
  name: string;
  image?: string;
}

export type CustomerReviewType = CustomerType & {
  review: {
    id: string;
    description: string;
    rating: number;
  }
}