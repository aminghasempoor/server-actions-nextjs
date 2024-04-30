"use client";

import { addProductToDatabase } from "@/app/_actions";
import { useTransition } from "react";

function AddProductButton() {
  const [isPending, startTransition] = useTransition();

  const formData = new FormData();
  formData.append("product", "Mac");
  formData.append("price", "12");

  return (
    <button
      onClick={() => startTransition(() => addProductToDatabase(formData))}
      className="fixed bottom-10 right-10 border bg-green-500 text-white p-2 rounded-sm w-48"
    >
      {isPending ? "Adding..." : "Add Product"}
    </button>
  );
}

export default AddProductButton;
