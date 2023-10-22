
export const GlassItem = (props) => {
    const { product, wearGlass } = props
  return (
    <div className="col-4 mt-2" key={product.id}>
        <button className="btn btn-outline-dark" style={{
            width: 250,
        }} onClick={() => wearGlass(product)}>
            <img src={product.url} alt="" style={{
                width: 150,
            }}/>
            <div className="card-body">
                <p className="card-title">{product.name}</p>
                <p>{product.price}</p>
                <div className="d-flex justify-content-between">
                </div>
            </div>
        </button>
    </div>
  )
}
