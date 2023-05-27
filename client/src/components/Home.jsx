import React from "react";
import { useGetAllProductsQuery } from "../features/productsApi";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";
import FullSlider from "./FullSlider";

const Home = () => {
  const { data, error, isLoading } = useGetAllProductsQuery();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    toast.success(`${product.name} added to cart`);
    navigate("/cart");
  };
  return (
    <div className="w-full h-full bg-gray-100">
      {isLoading ? (
        <Loading />
      ) : error ? (
        <p>Data not Loaded</p>
      ) : (
        <div className="flex flex-col items-center">
          <FullSlider />
          <h2 className="font-bold text-[2rem]">All Books</h2>
          <div className="flex flex-wrap justify-center">
            {data?.map((product) => (
              <div className="w-[230px] m-2 flex flex-col items-center bg-white p-2 shadow-md rounded-lg justify-between">
                <div key={product.id} className="">
                  <div className="w-full ">
                    <img
                      className="rounded-lg object-fill w-[226px] h-[250px]"
                      src={product.imageUrl}
                      alt={product.name}
                    />
                  </div>
                  <div className="text-lg font-medium mt-2">{product.name}</div>
                  <div className="w-full flex items-center justify-between p-2">
                    <div className="font-medium"> {product.author} </div>
                    <div className="text-lg font-bold">₹{product.price}</div>
                  </div>
                </div>
                <div className="w-full flex justify-center bg-blue-500 p-2 rounded-lg hover:bg-blue-700">
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="text-white font-medium w-full"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
