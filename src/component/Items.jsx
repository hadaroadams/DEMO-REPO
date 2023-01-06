import React from 'react'

import './Item.css'
function Items({num,image,header,title}) {
  return (
    <div className='container'>
        <div className='items'>
            <img src={image} alt="" className='itemImage' />
            <div className='itemSub'>
            <h1 className='itemNum'>{num}</h1>
            <h3 className='itemTitle'>{title}</h3>
            <span className='itemHeader'>{header}</span>
            </div>
        </div>
    </div>
  )
}

export default Items
