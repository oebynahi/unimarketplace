import Footer from "../components/footer"
import Navbar from "../components/Navbar"
import './createlisting.css'
import { useEffect, useState } from "react"
import { BrowserRouter, Routes, Route, Link, Outlet, Navigate, redirect, useNavigate} from 'react-router-dom'



export default function CreateListing () {

    const [listingPayload, setListingPayload] = useState(null)

    const navigate = useNavigate()

    ///FUNCTION HANDLING DATA SUBMITTING. GETTING FORM DATA, THEN ADDING IT TO STATE, THEN SENDING TO THE API AND RECIEVING RESPONSE
    async function handleSubmit(formData) {

        const itemTitle = formData.get("itemTitle")
        const itemPrice = formData.get("itemPrice")
        const itemDescription = formData.get("itemDescription")
        const pickupAddress = formData.get("pickupAddress")
        
        setListingPayload({
            itemTitle:itemTitle,
            itemPrice:parseFloat(itemPrice),
            itemDescription:itemDescription,
            pickupAddress:pickupAddress,
        })

        await fetch("/api/create-listing",
            {
                method: "POST",
                headers: {'Content-Type':'application/json'},
                body:JSON.stringify(listingPayload)
            }
        )
            .then(response => response.json())
            .then(data => console.log(data))

        navigate("/")
    }
    
    return (
        <>
            <Navbar />
            <form className="listing-details" action={handleSubmit}>
                <input type="file" className="file-importer" placeholder="Insert your images" accept="image/*" multiple/>
                <section className="listing-desc-box">
                    <input type="text" className="item-title-box" placeholder="Enter the item title" name="itemTitle"/>
                    <input type="number" className="price-picker-box" placeholder="Enter the price" name="itemPrice"/>
                    <textarea placeholder="Enter the item description" className="text-description-box" name="itemDescription"/>
                    <input type="text" placeholder="Enter pickup address" className="address-text-box" name="pickupAddress"/>
                    <button className="button" type="submit">Create listing</button>
                </section>
            </form>
            <Footer />
        </>
    )
}