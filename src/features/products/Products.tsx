// import React, { useEffect } from "react"
// import { useDispatch, useSelector } from "react-redux"
// import { addToCart, fetchProductsAsync } from "./productsSlice"
// import { RootState } from "../../app/store"

// Assuming Product type is defined somewhere
export interface Product {
  id: number
  title: string
  category: string
  description: string
  image: string
}

const Products: React.FC = () => {
  const handleAddToCart = (product: Product) => {
    console.log(product)
  }

  // if (productsState.isLoading) {
  //   return <div className="spinner-border"></div>
  // }

  // if (productsState.isError) {
  //   return <div className="alert alert-danger">{productsState.status}</div>
  // }

  return (
    <div className="row">
      <h1>Shop our Products</h1>
      <div className="col-md-3">
        <div className="card">
          <img src="" className="card-img-top" alt="" height="300" />
          <div className="card-body">
            <h5 className="card-title">Bread | Daily Essentials</h5>
            <p className="card-text">....</p>
            <button type="button" className="btn btn-primary">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products
