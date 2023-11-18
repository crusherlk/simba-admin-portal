import {
  HiOutlinePencilAlt,
  HiOutlinePlus,
  HiOutlineTrash,
  HiOutlineX,
} from "react-icons/hi";

//
import nikeHodieImg from "../assets/products/1_1.jpg";
import whiteTeeImg from "../assets/products/2_1.jpg";
import redTeeImg from "../assets/products/2.jpg";
import blueShirtImg from "../assets/products/3_1.jpg";
import glowingTeeImg from "../assets/products/9_1.jpg";
//
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { useForm } from "react-hook-form";
//
const products = [
  {
    id: "1423",
    product_name: "nike camo pullover hoodie",
    product_img: nikeHodieImg,
    product_price: "234.22",
    product_stock: 40,
  },
  {
    id: "7866",
    product_name: "black noded white t-shirt",
    product_img: whiteTeeImg,
    product_price: "53.00",
    product_stock: 24,
  },
  {
    id: "4528",
    product_name: "red long sleeved t-shirt",
    product_img: redTeeImg,
    product_price: "74.99",
    product_stock: 120,
  },
  {
    id: "1237",
    product_name: "dark blue short sleeved shirt",
    product_img: blueShirtImg,
    product_price: "64.25",
    product_stock: 0,
  },
  {
    id: "9832",
    product_name: "long sleeve black t-shirt with glowing blue sleaves",
    product_img: glowingTeeImg,
    product_price: "300.00",
    product_stock: 0,
  },
];
//

function Products() {
  const [isOpen, setIsOpen] = useState(false);
  const productForm = useForm({
    defaultValues: {
      name: "",
      price: "",
      stock: "",
      image: "",
    },
  });
  const { register, handleSubmit, formState, reset, setValue } = productForm;
  const { errors, isValid } = formState;

  const closeAddProduct = () => {
    reset();
    setIsOpen(false);
  };

  const onSubmit = (data) => {
    if (isValid) {
      console.log(data);
      closeAddProduct();
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-end">
        {/* <Link className="btn" to={"/products/product"}>
          <span className="text-xl">
            <HiOutlinePlus />
          </span>
          Add Product
        </Link> */}
        <button className="btn" onClick={() => setIsOpen(true)}>
          <span className="text-xl">
            <HiOutlinePlus />
          </span>
          Add Product
        </button>
      </div>
      {/* add / edit products modal */}
      <Dialog
        open={isOpen}
        onClose={() => closeAddProduct()}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <Dialog.Panel className="mx-auto w-[40rem] rounded bg-white p-4 relative">
            <div className="p-4 mt-8 rounded border border-gray-200">
              <Dialog.Title className="text-gray-700 font-medium">
                Add Product
              </Dialog.Title>
              <div className="mt-4">
                <form
                  className="text-gray-700 flex flex-col items-start gap-2"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div className="form-control">
                    <input
                      type="text"
                      name="name"
                      placeholder="Product Name"
                      {...register("name", {
                        required: "Product name is required!",
                      })}
                    />
                    <p className="text-sm pl-2 text-red-500">
                      {errors.name?.message}
                    </p>
                  </div>
                  <div className="form-control">
                    <input
                      type="text"
                      name="price"
                      placeholder="Price"
                      {...register("price", {
                        required: "Product price is required!",
                        pattern: {
                          value: /^[1-9]\d*(\.\d+)?$/,
                          message: "Please enter a valid number",
                        },
                      })}
                    />
                    <p className="text-sm pl-2 text-red-500">
                      {errors.price?.message}
                    </p>
                  </div>
                  <div className="form-control">
                    <input
                      type="text"
                      name="stock"
                      placeholder="Unit count"
                      {...register("stock", {
                        required: "Product stock is required!",
                        pattern: {
                          value: /^[0-9]\d*$/,
                          message: "Please enter a valid number",
                        },
                      })}
                    />
                    <p className="text-sm pl-2 text-red-500">
                      {errors.stock?.message}
                    </p>
                  </div>
                  <div className="form-control">
                    <input
                      type="file"
                      name="product_img"
                      id="product_img"
                      {...register("image")}
                    />
                  </div>

                  <button className="btn my-4" type="submit">
                    Add Product
                  </button>
                </form>
              </div>
            </div>
            <button
              className="btn-alt absolute top-2 right-2 "
              onClick={() => closeAddProduct()}
            >
              <span className="text-2xl">
                <HiOutlineX />
              </span>
            </button>
          </Dialog.Panel>
        </div>
      </Dialog>
      {/*  */}

      <div className="p-4 rounded border border-gray-200">
        <strong className="text-gray-700 font-medium">Products</strong>
        <div className="mt-4">
          <table className="w-full text-gray-700 ">
            <thead>
              <tr>
                <th>#ID</th>
                <th>Product Image</th>
                <th>Product ID</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Stock Availability</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {products.map((p, idx) => (
                <tr key={idx}>
                  <td>#{(idx + 1).toString().padStart(4, 0)}</td>
                  <td>
                    <img
                      className="w-10 h-10 object-cover"
                      src={p.product_img}
                      alt={p.product_name}
                    />
                  </td>
                  <td>{p.id}</td>
                  <td className="capitalize">{p.product_name}</td>
                  <td>${p.product_price}</td>
                  <td
                    className={
                      p.product_stock === 0 ? "text-red-500" : "text-green-500"
                    }
                  >
                    {p.product_stock === 0
                      ? "Out of Stock"
                      : p.product_stock + " in Stock"}
                  </td>
                  <td className="flex gap-2">
                    <button
                      className="btn"
                      onClick={() => {
                        setValue("name", p.product_name);
                        setValue("price", p.product_price);
                        setValue("stock", p.product_stock);

                        setIsOpen(true);
                      }}
                    >
                      <span className="">
                        <HiOutlinePencilAlt />
                      </span>
                    </button>
                    <button
                      className="btn text-red-500 hover:text-red-300"
                      onClick={() => {
                        confirm("Are you sure you want to delete?")
                          ? console.log("yes")
                          : console.log("no");
                      }}
                    >
                      <span className="">
                        <HiOutlineTrash />
                      </span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Products;
