import Footer from "../components/footer"
import Navbar from "../components/Navbar"
import './createlisting.css'


export default function CreateListing () {
    return (
        <>
            <Navbar />
            <div className="listing-details">
                <input type="file" className="file-importer" placeholder="Insert your images" accept="image/*" multiple/>
                <section className="listing-desc-box">
                    <input type="text" className="item-title-box" placeholder="Enter the item title"/>
                    <input type="number" className="price-picker-box" placeholder="Enter the price"/>
                    <textarea placeholder="Enter the item description" className="text-description-box"/>
                    <input type="text" placeholder="Enter pickup address" className="address-text-box"/>
                    <button className="button">Create listing</button>
                </section>
            </div>
            <Footer />
        </>
    )
}