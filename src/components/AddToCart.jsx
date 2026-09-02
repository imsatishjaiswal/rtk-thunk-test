import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../redux/slice";
function AddToCart() {
    const selector = useSelector((state) => state.cart.value);
    // console.log("selector", selector);
    const dispatch = useDispatch();
    return (
        <>
            <div className="cart">
                <i className="fa-solid fa-cart-shopping"></i>
                <span className="cart-count">{selector}</span>
            </div>
            <button onClick={() => {
                dispatch(clearCart());
            }} className="btn clear-btn">Clear</button>
        </>
    );
}
export default AddToCart;
