import Product from './product'

class ProductDetail extends Product {
  render () {
    return (
      <Product>
        <div className='row description'>
          {this.state.description}
        </div>
        <div className='row details'>
          <div className='benefits'>
            {this.state.description}
          </div>
          <div className='features'>
            {this.state.description}
          </div>
          <div className='dimesions'>
            {this.state.description}
          </div>
        </div>
      </Product>
    )
  }
}

export default ProductDetail
