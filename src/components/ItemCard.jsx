import './ItemCard.css'

export default function ItemCard(props) {
    return (
        <div className="card-max">
            <img src="../../item-card-placeholder.jpg" alt="item photo" className="item-photo"/>
            <div className="item-details-container">
                <h5 className="title">{props.title}</h5>
                <p className="price-text">{props.price}</p>
                <p className="author-username">{props.userid}</p>
                <p className="distance-to">{props.pickupLo}</p>
            </div>
        </div>
    )
}