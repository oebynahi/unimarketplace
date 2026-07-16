import SearchForm from "./SearchForm"
import ItemCard from "./ItemCard"
import './Main.css'
import { useEffect, useState } from "react"

export default function Main () {
    
    const [listingsArray, setListingsArray] = useState([])


    const itemCardElements = listingsArray.map(item => <ItemCard 
        title={item.title}
        price={item.price}
        userid={item.listerid}
        pickupLo={item.pickup_location}
        />)


    useEffect(function(){
            fetch("/api/browse-listings")
                .then(res => res.json())
                .then(data => setListingsArray(data))
        }, [])    
        
    
    return (
        <>
            <SearchForm />
            <div className="item-card-grid">
                {itemCardElements}
            </div>
        </>
    )
}