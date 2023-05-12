import { useAppSelector } from "../../state/app.hooks";
import { selectCart, removeProductFromCart } from "../../state/cart-state/cart-slice";
import { useDispatch } from "react-redux";

function CartComponent() {
    const cart = useAppSelector(selectCart);
    const dispatch = useDispatch();

    const renderedCart = cart.map(cartItem =>(
      <tr key={cartItem.product.id}>
        <td> { cartItem.product.name } 
            <span style={{color: "red"}}>{ cartItem.available === false ? " (SOLD OUT)" : ""}</span>
        </td>
        <td> { cartItem.quantity } </td>
        <td>
            <button className="btn btn-danger" onClick={() => dispatch(removeProductFromCart({id: cartItem.product.id})) }>Remove product from cart</button>
        </td>
      </tr>
    ));

    return (
      <>
        <h1>Cart</h1>
        
        <h3>In Cart</h3>
        <table className="table table-sm table-striped">
          <thead className="thead-dark">
              <tr>
                  <th>Product name</th>
                  <th>Quantity</th>
                  <th></th>
              </tr>
          </thead>
          <tbody>
              {renderedCart}
          </tbody>
        </table>
      </>
    );
  }
  
  export default CartComponent;