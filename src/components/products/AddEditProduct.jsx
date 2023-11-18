import { HiOutlineArrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";

function AddEditProduct() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-start">
        <Link className="btn-alt" to={"/products"}>
          <span className="text-xl">
            <HiOutlineArrowLeft />
          </span>
          Go Back
        </Link>
      </div>
      <div className="p-4 rounded border border-gray-200">
        <strong className="text-gray-700 font-medium">Add Product</strong>
        <div className="mt-4">
          <form className="text-gray-700 w-3/12 flex flex-col items-start gap-2">
            <input type="text" name="name" placeholder="Product Name" />
            <input type="text" name="price" placeholder="Price" />
            <input type="text" name="stock" placeholder="Unit count" />
            <input type="file" name="product_img" id="product_img" />

            <button className="btn my-4" type="submit">
              Add Product
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default AddEditProduct;
