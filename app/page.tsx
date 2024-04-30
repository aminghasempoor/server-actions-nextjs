import AddProductButton from "@/components/AddProductButton";
import { addProductToDatabase, Product } from "./_actions";

export default async function Home() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}`, {
    cache: "no-cache",
    next: {
      tags: ["products"],
    },
  });
  const products: Product[] = await res.json();

  return (
    <main>
      <h1 className={"text-3xl font-bold text-center"}>Product</h1>
      <AddProductButton />
      <form
        action={addProductToDatabase}
        className={"flex flex-col gap-5 max-w-xl mx-auto p-5"}
      >
        <input
          name={"product"}
          className={"border border-gray-300 p-2 rounded-md"}
          placeholder={"Enter Product Name"}
        />
        <input
          name={"price"}
          className={"border border-gray-300 p-2 rounded-md"}
          placeholder={"Enter Price Name"}
        />
        <button className={"border bg-blue-500 text-white p-2 rounded-md"}>
          Add Product
        </button>
      </form>
      <h2 className={"font-bold p-5"}>List of Products</h2>
      <div className={"flex flex-wrap gap-5"}>
        {products.map((product) => (
          <div key={product.id} className={"p-5 shadow"}>
            <p>{product.product}</p>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
