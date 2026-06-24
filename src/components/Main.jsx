import SearchForm from "./SearchForm"
import ItemCard from "./ItemCard"
import './Main.css'

export default function Main () {
    return (
        <>
            <SearchForm />
            <div className="item-card-grid">
                <ItemCard />
                <ItemCard />
                <ItemCard />
            </div>
        </>
    )
}