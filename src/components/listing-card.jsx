import './listing-card.css'

export default function ListingCard() {
    return (
        <div className="my-listing-card">
            <div className='left-side-container'>
                <h6 className='listing-title'>Rudy's Rhubarb Refreshers</h6>
                <p className='listing-price'>$7.50</p>
                <p className='listing-date'>Listed on 29 June 2026</p>
            </div>
            <div className='right-side-container'>
                <p className='listing-offer'>Offers: 0</p>
            </div>
        </div>
    )
}