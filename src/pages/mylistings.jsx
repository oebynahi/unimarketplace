import Navbar from "../components/Navbar"
import ListingCard from "../components/listing-card"
import Footer from '../components/footer'
import './mylistings.css'

export default function MyListings () {
    return (
        <>
            <Navbar />
            <div className="listing-page">
                <ListingCard />
                <ListingCard />
                <ListingCard />
                <ListingCard />
            </div>
            <Footer/>
        </>
        
    )
}