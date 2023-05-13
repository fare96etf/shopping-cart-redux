import { useDispatch } from "react-redux";
import { useAppSelector } from "../../state/app.hooks";
import { addProduct, removeProduct, selectProducts } from "../../state/product-state/product-slice";
import { addProductToCart, setProductInCartToSoldOut } from "../../state/cart-state/cart-slice";
import { useState } from "react";
import { IProduct } from "../../models/app.models";

function ProductsComponent() {
    const products = useAppSelector(selectProducts);
    const [productForm, setProductForm] = useState({
      name: '',
      description: '',
      price: -1
    });
    const [currentId, setCurrentId] = useState(6);
    const dispatch = useDispatch();

    function removeProductFromList(id: number) {
      dispatch(removeProduct({id: id}));
      dispatch(setProductInCartToSoldOut({id: id}));
    }

    function handleProductFormChange(event: any) {
      const name = event.target.name;
      const value = event.target.value;

      setProductForm(values => ({...values, [name]: value}));
    }

    function addnewProduct() {
      if (productForm.price as number > 0 
          && (productForm.name as string).trim().length > 0
          && (productForm.description as string).trim().length > 0) {
            
        var newProduct: IProduct = {
          id: currentId,
          name: productForm.name as string,
          description: productForm.description as string,
          price: productForm.price as number
        };

        setCurrentId(currentId+1);
        dispatch(addProduct({ product: newProduct }));
      }
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

        <h3>Add new product</h3>
        <form>
            <div className="mb-3">
                <label className="form-label me-3">Name: </label>
                <input name="name" type="text" value={productForm.name} onChange={handleProductFormChange}/>
            </div>
            <div className="mb-3">
                <label className="form-label me-3">Description: </label>
                <input name="description" type="text" value={productForm.description} onChange={handleProductFormChange}/>
            </div>
            <div className="mb-3">
                <label className="form-label me-3">Price: </label>
                <input name="price" type="number" value={productForm.price} onChange={handleProductFormChange}/>
            </div>
            <button className="btn btn-primary" type="button" onClick={addnewProduct}>Add new product</button>
        </form>
      </>
    );
  }
  
  export default ProductsComponent;