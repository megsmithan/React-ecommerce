import React from 'react';

class AddToCartBtn extends React.Component{
    onAddCartClick = () => {
      console.log('yay, you added something to your cart!')
    };

    render() {
        return (
            <div>
                <i onClick={this.onAddCartClick} className='cartBtn shopping cart icon'/>
            </div>
        )
    }
}



export default AddToCartBtn



    /*<button className='cartBtn'>Add To Cart</button>*/