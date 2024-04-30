"use server";
import { revalidateTag } from "next/cache";

export interface Product {
  id?: number;
  product: string;
  price: string;
}

export const addProductToDatabase = async (e: FormData) => {
  const product = e.get("product")?.toString();
  const price = e.get("price")?.toString();
  if (!product || !price) return;

  const newProduct: Product = {
    product,
    price,
  };

  await fetch(`${process.env.NEXT_PUBLIC_URL}`, {
    method: "POST",
    body: JSON.stringify(newProduct),
    headers: {
      "Content-Type": "application/json",
    },
  });

  revalidateTag("products");
};
