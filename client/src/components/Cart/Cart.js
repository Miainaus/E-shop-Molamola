import './cart.scss';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { deleteFromCart } from '../../redux/cartSlice';
import { loadStripe } from '@stripe/stripe-js';
import { makeRequest } from '../../makeRequest';

const Cart = () => {
  const products = useSelector((state) => state.cart.products);
  const totalPrice = () => {
    let total =0
    products.forEach((product) => total += product.quantity * product.price);
    return total;
  }
  const dispatch = useDispatch();
  const stripePromise = loadStripe('pk_test_51NfZAJKF10E90bw5rowQnHorbQNzEnJ5nCnGhsJtO7H1BNQE5JEZvEtp8kLzeJdbNKz3IqaaIHEBGJak9TqB2gLj00GSfhIZno');
  const handlePayment =async () => { 
    try {
      const stripe = await stripePromise;
      const res = await makeRequest.post("/orders", {
        products,
      });
      await stripe.redirectToCheckout({
        sessionId:res.data.stripeSession.id,
      })
    } catch (err) { console.log(err)}
  }


  return (
    <div className="cart">
      {products.map(item => (
        <Link className="link" to={`/product/${item.id}`}>
        <div className="item">
          <img src={process.env.REACT_APP_UPLOAD_URL+item.img} alt="img" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.description?.substring(0, 80)}</p>
            <div className="price">{item.quantity} x ${item.price}</div>
          </div>
            <DeleteIcon className='delete' onClick={()=> dispatch(deleteFromCart(item.id))} />
          </div>
          </Link>
      ))}
      <div className="total">
        <span>Subtotal</span><span>${ totalPrice().toFixed(2)}</span>
      </div>
      <button onClick={handlePayment}>VIEW BAG&CHECKOUT</button>

    </div>
  );
}

export default Cart;
