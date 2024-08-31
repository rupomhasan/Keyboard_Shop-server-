import { ObjectId } from "mongoose"

export type TProducts = {
  _id: string,
  name: string,
  description: string,
  image: string,
  brand: ObjectId,
  productsQuantity: number,
  availableQuantity: number,
  price: number,
  reviews?: ObjectId[],
  rating?: number,
  isFeatured?: boolean,
  size?: string,
  slug?: string,
  isDeleted?: boolean,

}