/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'

export default function Listing(props) {
    const { items } = props;
    console.log(items);
    return (
        <div className="item-list">
            { items.map((item) => {
                if (item.state === "removed") return null;
                return (
                    <div className="item" key={ item.listing_id }>
                        <div className="item-image">
                            <a href={ item.url} />
                            <img src={item.MainImage.url_570xN} alt=''/>
                        </div>
                        <div className="item-details">
                            <p className="item-title">{ item.title.length !== 50 ? item.title.slice(0, 50) + '...' : item.title}</p>
                            <p className="item-price">{ item.currency_code === 'USD' ? '$' : null }{ item.currency_code === 'EUR' ? '€' : null }{ item.currency_code === 'GBP' ? 'GBP ' : null }{ item.currency_code === 'CAD' ? 'CAD ' : null }{ item.price}</p>
                            <p className="item-quantity level-medium">{ item.quantity } left</p>
                        </div>
                    </div>
                )
            }) }
        </div> 
    )
}
