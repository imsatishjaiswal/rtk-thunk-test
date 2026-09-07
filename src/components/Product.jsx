import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../redux/slice";
import { fetchProducts } from "../redux/productSlice";
import { useEffect } from "react";
function Product() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  const productList = useSelector((state) => state.products);
  // console.log(productList.items);
  // console.log(productList.items.length);

  return (

    <div className="product-list">
      {
        productList.items.length && productList.items.map((product) => (
          <article className="product-card" key={product.id}>
            <div className="product-image">
            <img src={product.image} alt={product.title} />
            </div>
            <div className="product-info">
              <h2>{product.title}</h2>
              <p className="price">₹{product.price.toFixed(2)}</p>
              <p className="description">{product.description}</p>
            </div>
          </article>
        ))
      }
    </div>


  );

}

export default Product;