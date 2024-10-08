import mongoose from "mongoose";
import { z } from "zod";

const ItemsSchema = z.object({
  productId: z.string().refine((val) => mongoose.Types.ObjectId.isValid(val), {
    message: "Invalid productId",
  }),
  quantity: z.number().min(1, "Quantity must be at least 1"),
});

const ShippedAddressSchema = z.object({
  customerName: z.string(),
  states: z.string(),
  contactNo: z.string(),
  zipCode: z.string(),
  address: z.string(),
  note: z.string().optional(),
});

const OrderValidationSchema = z.object(
  {
    body: z.object({
      items: z.array(ItemsSchema),
      shippedAddress: ShippedAddressSchema,
    })
  }
);
const orderStatusSchema = z.object({
  body: z.object({
    orderStatus: z.enum(["pending", "shipped", "delivered", "canceled"])
  })
});
export { OrderValidationSchema, orderStatusSchema };
