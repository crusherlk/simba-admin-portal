import nikeHodieImg from "../../assets/products/1_1.jpg";
import whiteTeeImg from "../../assets/products/2_1.jpg";
import redTeeImg from "../../assets/products/2.jpg";
import blueShirtImg from "../../assets/products/3_1.jpg";
import glowingTeeImg from "../../assets/products/9_1.jpg";

const popular_products = [
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

function PopularProducts() {
  return (
    <div className="p-4 rounded border border-gray-200 w-[20rem]">
      <strong className="text-gray-700 font-medium">Popular Products</strong>
      <div className="mt-4 flex flex-col gap-4">
        {popular_products.map((product) => (
          <div key={product.id} className="flex">
            <div className="w-10 h-10 min-w-10 bg-gray-200 rounded">
              <img
                className="w-full h-full object-cover overflow-hidden"
                src={product.product_img}
                alt={product.product_name}
              />
            </div>
            <div className="ml-4 flex-1">
              <p className="text-sm text-gray-800 capitalize">
                {product.product_name}
              </p>
              <span
                className={`text-sm font-medium ${
                  product.product_stock === 0
                    ? "text-red-500"
                    : "text-green-500"
                }`}
              >
                {product.product_stock === 0
                  ? "Out of Stock"
                  : product.product_stock + " in Stock"}
              </span>
            </div>
            <div className="text-sm text-gray-400 pl-2">
              ${product.product_price}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default PopularProducts;
