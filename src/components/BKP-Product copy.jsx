import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../redux/slice";
import { fetchProducts } from "../redux/productSlice";
import { useEffect } from "react";
function Product() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  const products = useSelector((state) => state.products);
  console.log(products);
  
  return (
    <section className="product-page">

      {/* Product Image */}
      <div className="product-image">
        <img
          src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600"
          alt="Wireless Headphones"
        />
      </div>

      {/* Product Details */}
      <div className="product-info">

        <h1>Wireless Headphones</h1>

        <p className="price">$129.99</p>

        <p className="description">
          Experience high-quality sound with these wireless headphones.
          Featuring noise cancellation, long-lasting battery life,
          and a sleek modern design for everyday use.
        </p>

        <button onClick={() => { dispatch(addItem(1)); }} className="btn">Add to Cart</button>
        <button onClick={() => {
          dispatch(removeItem(1));
        }} className="btn remove-btn">Remove from Cart</button>
      </div>

    </section>
  );
}

export default Product;