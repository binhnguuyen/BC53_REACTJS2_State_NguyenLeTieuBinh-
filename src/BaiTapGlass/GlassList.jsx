import React from 'react'
import { GlassItem } from './GlassItem'

export const GlassList = (props) => {
    // bóc tách tham số trong props ra
    const { data, wearGlass } = props
  return (
    <div
        className='row'>
            {/* ở map đầu tiên nó sẽ truyền xuống data của product đầu tiên, rồi thứ 2, thứ 3... */}
            {data.map((product) => {
                // console.log('product: ', product);
                return (
                    // Ở component ProductList phải truyền hàm handleProductDetail để hiện detail khi ấn vào nút Detail, hàm  handleCart để hiện giỏ hàng khi ấn vào nút Buy, cho component ProductItem
                    <GlassItem 
                        key={product.id} 
                        product={product} 
                        wearGlass={wearGlass}
                        // handleProductDetail={handleProductDetail}
                        // handleCart={handleCart}
                    />
                )
                
            })}
    </div>
  )
}
