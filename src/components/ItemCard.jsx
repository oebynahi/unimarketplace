import './ItemCard.css'

export default function ItemCard() {
    return (
        <div className="card-max">
            <img src="../../item-card-placeholder.jpg" alt="item photo" className="item-photo"/>
            <div className="item-details-container">
                <h5 className="title">Rudy's Rhubarb Refreshers</h5>
                <p className="price-text">$7.50</p>
                <p className="author-username">Rudy Pacsun</p>
                <p className="distance-to">1.7km away</p>
            </div>
        </div>
    )
}