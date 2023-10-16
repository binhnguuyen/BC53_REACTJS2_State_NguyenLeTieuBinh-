
export const GlassItem = (props) => {
    const { product, wearGlass } = props
  return (
    <div className="col-3 mt-3">
        <button className="btn btn-outline-dark" style={{
            width: 200,
        }} onClick={() => wearGlass(product)}>
            <img src={product.url} alt="" style={{
                width: 100,
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
