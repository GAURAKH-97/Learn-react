import ProductList from "../Components/ProductList"
export default function HomePage() {
  return (
    <div className="container mt-4">
      <h1 className="mb-4">Shop Products</h1>
      <div className="row">
        <ProductList/>
        
      </div>
    </div>
  )
}
