import React from 'react';
import PropTypes from 'prop-types';
import UserModel from './UserModal';

function ShopItemFunc(props){
    const {item} = props;
 
    return (
     <div class = "main-content">
<h2>{item.brand}</h2>
<h1>{item.title}</h1>
<h3>{item.description}</h3>
<div className="description">
{item.descriptionFull}</div>
<div class="highlight-window mobile"><div class="highlight-overlay"></div></div>
  <div class="divider"></div>
  <div class="purchase-info">
    <div class="price">{item.currency}{item.price}</div>
    <button>Добавить в корзину</button>
</div>
</div>
    )
    }
ShopItemFunc.propTypes = {
    user:PropTypes.instanceOf(UserModel).isRequired
}

export default ShopItemFunc;