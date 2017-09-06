import React, {Component} from 'react'

class Product extends Component {
  constructor () {
    super()

    this.state = {
      title: '',
      description: '',
      images: [],
      feature: [],
      benefits: [],
      dimensions: []
    }
  }

  render () {
    return (
      <section className='product'>
        <figure>
          <img src='{this.state.image[0]}' />
        </figure>
        <h2>{this.state.title}</h2>
      </section>
    )
  }
}

export default Product
