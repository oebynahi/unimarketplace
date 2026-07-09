import "./Navbar.css"
import favicon from "../../public/favicon.svg"
import { BrowserRouter, Routes, Route, Link, Outlet, Navigate} from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-left-cluster">
                <Link to={"/"}><h3 className="logo-text">1DE</h3></Link>
            </div>
            <div className="navbar-middle-cluster">
                <h3 className="category-page-text">Browse</h3>
                <Link to={"/my-listings"}><h3 className="category-page-text">My listings</h3></Link>
                <h3 className="category-page-text">Chat</h3>
            </div>
            <div className="navbar-right-cluster">
                <button className="button"><Link to={"/create-listing"}>+ Create</Link></button>
                <img src={favicon} alt="profile icon" className="profile-logo"/>
            </div>
        </nav>
    )
}