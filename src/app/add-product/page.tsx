// import FormSubmitButton from "@/components/FormSubmitButton";
// import { prisma } from "@/lib/db/prisma";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
// import { authOptions } from "../api/auth/[...nextauth]/route";

export const metadata = {
  title: "Add Product - Flowmazon",
};

async function addProduct(formData: FormData) {
  "use server";

  // const session = await getServerSession(authOptions);

  // if (!session) {
  //   redirect("/api/auth/signin?callbackUrl=/add-product");
  // }

  const name = formData.get("name")?.toString();
  const description = formData.get("description")?.toString();
  const imageUrl = formData.get("imageUrl")?.toString();
  const price = Number(formData.get("price") || 0);

  if (!name || !description || !imageUrl || !price) {
    throw Error("Missing required fields");
  }

  // await prisma.product.create({
  //   data: { name, description, imageUrl, price },
  // });

  redirect("/");
}

export default async function AddProductPage() {
  // const session = await getServerSession(authOptions);

  // if (!session) {
  //   redirect("/api/auth/signin?callbackUrl=/add-product");
  // }

  return (
    <div className="flex justify-center mx-3 min-h-screen items-center">
    <div className="bg-gray-100 rounded-lg p-3 py-5 w-full lg:w-2/5">
      <h1 className="text-xl font-bold mb-2 text-center">Add Product</h1>
      <form action={addProduct} className="flex flex-col gap-2">
        <input
          required
          name="name"
          placeholder="Name"
          className="input-bordered input w-full"
        />
        <textarea
          required
          name="description"
          placeholder="Description"
          className="textarea-bordered textarea w-full"
        />
        <input
          required
          name="imageUrl"
          placeholder="Image URL"
          type="url"
          className="input-bordered input w-full"
        />
        <input
          required
          name="price"
          placeholder="Price"
          type="number"
          className="input-bordered input w-full"
        />
        {/* <FormSubmitButton className="btn-block">Add Product</FormSubmitButton> */}
        <button type="submit" className="btn btn-primary text-lg">Add Product</button>
      </form>
    </div>
    </div>
  );
}
