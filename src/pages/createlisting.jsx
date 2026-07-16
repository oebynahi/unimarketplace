import Footer from "../components/footer"
import Navbar from "../components/Navbar"
import './createlisting.css'
import { useEffect, useState } from "react"
import { BrowserRouter, Routes, Route, Link, Outlet, Navigate, redirect, useNavigate} from 'react-router-dom'



export default function CreateListing () {


    const navigate = useNavigate()

    ///FUNCTION HANDLING DATA SUBMITTING. GETTING FORM DATA, THEN ADDING IT TO STATE, THEN SENDING TO THE API AND RECIEVING RESPONSE
    async function handleSubmit(event) {

        event.preventDefault()

        const formData = new FormData(event.target)

        const payload = {
            itemTitle:formData.get("itemTitle"),
            itemPrice:formData.get("itemPrice"),
            itemDescription:formData.get("itemDescription"),
            pickupAddress:formData.get("pickupAddress"),
        }

        await fetch("/api/create-listing",
            {
                method: "POST", 
                headers: {'Content-Type':'application/json'},
                body:JSON.stringify(payload)
            })
            .then(response => response.json())
            .then(data => console.log(data))

        navigate("/")
    }
    
    return (
        <>
            <Navbar />
            <div className="listing-details" >
                <input type="file" className="file-importer" placeholder="Insert your images" accept="image/*" multiple/>
                <form className="listing-desc-box" onSubmit={handleSubmit}>
                    <input type="text" className="item-title-box" placeholder="Enter the item title" name="itemTitle"/>
                    <input type="number" className="price-picker-box" placeholder="Enter the price" name="itemPrice"/>
                    <textarea placeholder="Enter the item description" className="text-description-box" name="itemDescription"/>
                    <input type="text" placeholder="Enter pickup address" className="address-text-box" name="pickupAddress"/>
                    <button className="button" type="submit">Create listing</button>
                </form>
            </div>
            <Footer />
        </>
    )
}