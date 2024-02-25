import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { add, remove } from "../redux/Slices/cartSlice";
import SimpleSlider from "../Components/SimpleSlider";
import Footer from "../Components/Footer";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const { cart } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [categoryFilters, setCategoryFilters] = useState([]);
  const [priceFilter, setPriceFilter] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get("https://dummyjson.com/products");
      if (response.data.products && response.data.products.length > 0) {
        setProducts(response.data.products);
        setSearchResults(response.data.products);
      } else {
        setProducts([]);
        setSearchResults([]);
      }
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  const handleCategoryChange = (category) => {
    const updatedFilters = categoryFilters.includes(category)
      ? categoryFilters.filter((c) => c !== category)
      : [...categoryFilters, category];
    setCategoryFilters(updatedFilters);
    filterProducts(updatedFilters, priceFilter, searchTerm);
  };

  const handlePriceChange = (priceRange) => {
    setPriceFilter(priceRange);
    filterProducts(categoryFilters, priceRange, searchTerm);
  };

  const handleResetFilters = () => {
    setCategoryFilters([]);
    setPriceFilter("");
    setSearchTerm("");
    filterProducts([], "", "");
  };

  const handleSearch = (searchValue) => {
    setSearchTerm(searchValue);
    filterProducts(categoryFilters, priceFilter, searchValue);
  };

  const filterProducts = (categories, price, search) => {
    const filteredProducts = products.filter((product) => {
      const categoryMatch =
        categories.length === 0 || categories.includes(product.category);
      const priceMatch =
        price === "" ||
        (product.price >= parseInt(price.split("-")[0]) &&
          product.price <= parseInt(price.split("-")[1]));
      const searchMatch = product.title
        .toLowerCase()
        .includes(search.toLowerCase());
      return categoryMatch && priceMatch && searchMatch;
    });
    setSearchResults(filteredProducts);
  };

  const addToCart = (item) => {
    dispatch(add(item));
    toast.success("Added to cart");
  };

  const removeFromCart = (itemId) => {
    dispatch(remove(itemId));
    toast.error("Removed from cart");
  };

  const navigateToProductDetails = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div className="container mx-auto px-4 flex flex-col min-h-screen mt-20">
      <div className="h-90 w-full">
        <SimpleSlider className="w-full h-full" />
      </div>
      <div className="flex-grow flex">
        <div className="w-1/4 p-4">
          <div className="mb-4 bg-gray-100 p-4 rounded-lg mt-10">
            <h2 className="text-lg font-semibold mb-2">Category</h2>
            {products.length > 0 &&
              [...new Set(products.map((product) => product.category))].map(
                (category) => (
                  <div key={category} className="mb-2">
                    <input
                      type="checkbox"
                      id={category}
                      checked={categoryFilters.includes(category)}
                      onChange={() => handleCategoryChange(category)}
                      className="mr-2 cursor-pointer"
                    />
                    <label htmlFor={category} className="cursor-pointer">
                      {category}
                    </label>
                  </div>
                )
              )}
          </div>
          <div className="bg-gray-100 p-4 rounded-lg mt-4">
            <h2 className="text-lg font-semibold mb-2">Price Range</h2>
            <div>
              <div className="mb-2">
                <input
                  type="radio"
                  id="price0"
                  name="price"
                  value="0-100"
                  checked={priceFilter === "0-100"}
                  onChange={() => handlePriceChange("0-100")}
                  className="mr-2 cursor-pointer"
                />
                <label htmlFor="price0" className="cursor-pointer">
                  ₹0 - ₹100
                </label>
              </div>
              <div className="mb-2">
                <input
                  type="radio"
                  id="price1"
                  name="price"
                  value="100-200"
                  checked={priceFilter === "100-200"}
                  onChange={() => handlePriceChange("100-200")}
                  className="mr-2 cursor-pointer"
                />
                <label htmlFor="price1" className="cursor-pointer">
                  ₹100 - ₹200
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  id="price2"
                  name="price"
                  value="200-300"
                  checked={priceFilter === "200-300"}
                  onChange={() => handlePriceChange("200-300")}
                  className="mr-2 cursor-pointer"
                />
                <label htmlFor="price2" className="cursor-pointer">
                  ₹200 - ₹300
                </label>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <button
              onClick={handleResetFilters}
              className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md transition duration-300"
            >
              Reset Filters
            </button>
          </div>
        </div>
        <div className="w-3/4 p-4">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSearch(searchTerm);
            }}
          >
            <div className="flex justify-between items-center mb-4">
              <input
                type="text"
                placeholder="Search Product..."
                value={searchTerm}
                onChange={(e) => handleSearch(e.target.value)}
                className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500 flex-grow mr-2"
              />

              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition duration-300"
              >
                Search
              </button>
            </div>
          </form>
          <h1 className="text-3xl font-semibold text-center my-8">Products</h1>
          {loading ? (
            <p className="text-center">Loading products...</p>
          ) : error ? (
            <p className="text-center text-red-500">Error: {error.message}</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {searchResults.map((product) => (
                <div
                  key={product.id}
                  className="border border-gray-300 rounded-lg overflow-hidden shadow-md transition duration-300 transform hover:scale-105 hover:shadow-xl p-4 flex flex-col"
                >
                  <img src={product.thumbnail} alt={product.title} />
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold mt-2 mb-1">
                      {product.title}
                    </h3>
                    <p className="text-gray-600 mb-2 flex-grow">
                      {product.description}
                    </p>
                    <p className="text-green-700 font-bold text-sm">
                      ${product.price}
                    </p>
                    {cart.some((p) => p.id === product.id) ? (
                      <button
                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md mt-2 transition duration-300 mr-2"
                        onClick={() => removeFromCart(product.id)}
                      >
                        Remove from Cart
                      </button>
                    ) : (
                      <button
                        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md mt-2 transition duration-300 gap-x-3"
                        onClick={() => addToCart(product)}
                      >
                        Add to Cart
                      </button>
                    )}
                    <button
                      className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md mt-2 transition duration-300 ml-2"
                      onClick={() => navigateToProductDetails(product.id)}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
