import { useDispatch } from "react-redux";
import { useAppSelector } from "../../state/app.hooks";
import { removeProduct, selectProducts } from "../../state/product-state/product-slice";
import { addProductToCart, setProductInCartToSoldOut } from "../../state/cart-state/cart-slice";

function ProductsComponent() {
    const products = useAppSelector(selectProducts);
    const dispatch = useDispatch();

    function removeProductFromList(id: number) {
      dispatch(removeProduct({id: id}));
      dispatch(setProductInCartToSoldOut({id: id}));
    }

    const renderedProducts = products.map(product =>(
      <tr key={product.id}>
        <td> { product.id } </td>
        <td> { product.name } </td>
        <td> { product.description } </td>
        <td> { product.price } </td>
        <td> 
            <button className="btn btn-primary" onClick={() => dispatch(addProductToCart({product: product, quantity: 1}))}>Add product to cart</button> 
            <button className="btn btn-danger" onClick={() => removeProductFromList(product.id)}>Remove product from list</button>
        </td>
      </tr>
    ));

    return (
        <>
          <h1>Products</h1>
          
          <h3>Available products list</h3>
          <table className="table table-striped">
            <thead className="thead-dark">
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {renderedProducts}
            </tbody>
        </table>
      </>
    );
  }
  
  export default ProductsComponent;