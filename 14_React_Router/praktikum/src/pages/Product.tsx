import { useLocation } from 'react-router-dom';

const Product = () => {
  const location = useLocation();
  const state = location.state;

  return (
    <div className='text-center mt-5'>
     <h3>Product Id : {state.id}</h3>
     <h3>Product Name : {state.name}</h3>
     <h3>Product Category : {state.category}</h3>
     <h3>Product Image : {state.image}</h3>
     <h3>Product Freshness : {state.freshness}</h3>
     <h3>Product Description : {state.desc}</h3>
     <h3 className='text-success fw-bold '>Product Price : {state.price}</h3>
    </div>
  )
}

export default Product